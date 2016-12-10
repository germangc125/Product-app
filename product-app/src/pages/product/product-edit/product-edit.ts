import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { ProductService } from "../../../providers/product-service";
import { Product } from '../../../model/product';
import { ProductListPage } from "../product-list/product-list";
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ProductEdit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-edit',
  templateUrl: 'product-edit.html',
  providers: [ProductService]
})
export class ProductEditPage {
  productForm: FormGroup;

  public idProductSelected:any;
 
  product:Product= {
              id:0,
              name:"",
              type:"",
              quantity:0,
              price:0,
              latitude:"",
              longitude:"",
  };


  constructor(public navCtrl: NavController, public params:NavParams,private productService: ProductService,public formBuilder: FormBuilder,public alertCtrl: AlertController) {
    this.idProductSelected = this.params.get("id");
    this.getProduct(this.idProductSelected);

  setTimeout(() =>  this.productForm = this.createProductForm(), 550);

   

  }

  private createProductForm() {
    return this.formBuilder.group({
      name: [this.product.name, [Validators.required, Validators.minLength(3)]],
      type: [this.product.type, [Validators.required, Validators.minLength(6)]],
      quantity: [this.product.quantity, [Validators.required, Validators.minLength(1)]],
      price: [this.product.price, [Validators.required, Validators.minLength(5)]],
      latitude: [this.product.latitude],
      longitude: [this.product.longitude],
    });
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

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Update product?',
      message: 'Are you sure to add this update product?',
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
              alert("Actualizado");
          }
        }
      ]
    });
    confirm.present();
  }

  updateProduct(){
    this.productService.create(this.product)
    .subscribe(product => {
       this.navCtrl.push(ProductListPage);
     });
  }

  ionViewDidLoad() {
    console.log('Hello ProductEditPage Page');
  }

}
