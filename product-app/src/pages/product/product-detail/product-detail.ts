import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductService } from "../../../providers/product-service";
import { Product } from '../../../model/product';
import { ProductCreatePage } from '../product-create/product-create';
/*
  Generated class for the ProductDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
    providers: [ProductService]
})
export class ProductDetailPage {
  public idProductSelected:any;
 
  product:Product= {
              id:0,
              name:"",
              type:"",
              quantity:0,
              price:0,
              latitude:0,
              longitude:0
  };


  constructor(public navCtrl: NavController, public params:NavParams,private productService: ProductService) {
    this.idProductSelected = this.params.get("id");
    this.getProduct(this.idProductSelected);
  }

 getProduct(id:number) {
        this.productService.getProduct(id)
            .subscribe(
            product => {
                this.product = product;
            },
            error => {
                console.log(error);
            }
        );
    }

  ionViewDidLoad() {
    console.log('Hello ProductDetailPage Page');
  }

  goCreateProduct(){
     this.navCtrl.push(ProductCreatePage);
  }
}
