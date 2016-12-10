import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { ProductService } from "../../../providers/product-service";
import { Product } from '../../../model/product';
import { ProductListPage } from "../product-list/product-list";
import { AlertController,ToastController  } from 'ionic-angular';
import {CustomValidators} from '../../../validator/custom-validator';
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
              price:"",
              latitude:"",
              longitude:"",
  };


  constructor(public navCtrl: NavController, public params:NavParams,private productService: ProductService,public formBuilder: FormBuilder,public alertCtrl: AlertController,public toastCtrl: ToastController) {
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
              this.updateProduct();
          }
        }
      ]
    });
    confirm.present();
  }

  updateProduct(){
        this.productService.update(this.product)
            .subscribe(product => {
                       let toast = this.toastCtrl.create({
                            message: 'Product was update successfully',
                            duration: 3000,
                            position: 'top'
                       });
                       toast.present();
                             this.navCtrl.push(ProductListPage);
                       }
        );
  }

  ionViewDidLoad() {
    console.log('Hello ProductEditPage Page');
  }

 ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required, Validators.minLength(6)]],
      quantity: ['', [Validators.required, Validators.minLength(1)]],
      price: ['', [Validators.minLength(5)]],
      latitude: [''],
      longitude: [''],
    });
  }
}
