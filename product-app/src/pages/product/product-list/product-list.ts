import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Product} from "../../../model/product";
import {ProductService} from "../../../providers/product-service";
import { ProductDetailPage } from "../product-detail/product-detail";
import {LoginPage}      from '../../access/login/login';
import { Storage } from '@ionic/storage';


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
    private idsesion:number

  constructor(public navCtrl: NavController, private productService: ProductService,public storage: Storage) {}

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
    


      this.storage.get("USER").then(res => {
if(res !=null){


     if(res.id !=undefined){
       this.getProducts();

       
     }
    

}

 else{
           this.navCtrl.push(LoginPage);
   
        
     }


    



    	
    });
     

      

 }


}
