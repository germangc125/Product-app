import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductService } from "../../../providers/product-service";
import { Product } from '../../../model/product';
import { ProductCreatePage } from '../product-create/product-create';
import { ProductEditPage } from '../product-edit/product-edit';
import { AlertController,ToastController } from 'ionic-angular';
import { ProductListPage } from "../product-list/product-list";

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
              price:"",
              latitude:"",
              longitude:""
  };

  constructor(public navCtrl: NavController, public params:NavParams,private productService: ProductService,public alertCtrl: AlertController,public toastCtrl: ToastController) {
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

  goEditProduct(){
     this.navCtrl.push(ProductEditPage,{id: this.product.id});
  }

  showConfirmDelete() {
    let confirm = this.alertCtrl.create({
      title: 'Delete product?',
      message: 'Are you sure to delete this product?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.deleteProduct();
          }
        }
      ]
    });
    confirm.present();
  }

  deleteProduct(){
        this.productService.delete(this.product.id)
            .subscribe(
            product => {
                  let toast = this.toastCtrl.create({
                            message: 'Product was delete successfully',
                            duration: 3000,
                            position: 'top'
                       });
                       toast.present();
                       this.navCtrl.push(ProductListPage);
            },
            error => {
                console.log(error);
            }
        );
  }
}
