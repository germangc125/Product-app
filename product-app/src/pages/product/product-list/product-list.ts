import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Product} from "../../../model/product";
import {ProductService} from "../../../providers/product-service";
import { ProductDetailPage } from "../product-detail/product-detail";


/*
  Generated class for the ProductList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
  providers: [ProductService]
})
export class ProductListPage {

  constructor(public navCtrl: NavController, private productService: ProductService) {}

  ionViewDidLoad() {}
  products: Product[];
  product:Product= {
              id:0,
              name:"",
              type:"",
              quantity:0,
              price:"",
              latitude:"",
              longitude:"",
  };

  getProducts() {
      this.productService.getProducts()
          .subscribe(
          products => {
              this.products = products;
          },

          error => {
              console.log(error);
          }
      );
  }

  productSelecionado(product:Product){
    this.navCtrl.push(ProductDetailPage,{id: product.id});
  }


  ngOnInit(): void {
      this.getProducts();

 }

}
