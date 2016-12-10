import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Product } from '../../../model/product';
import { ProductService } from "../../../providers/product-service";
import { ProductListPage } from "../product-list/product-list";
import { AlertController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

/*
  Generated class for the ProductCreate page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-create',
  templateUrl: 'product-create.html',
  providers: [ProductService]
})
export class ProductCreatePage {
  productForm: FormGroup;
  product:Product= {
              id:0,
              name:"",
              type:"",
              quantity:0,
              price:0,
              latitude:"",
              longitude:""
  };

  constructor(public navCtrl: NavController, private productService: ProductService,public formBuilder: FormBuilder,public alertCtrl: AlertController) {
    this.productForm = this.createProductForm();
  }
  private createProductForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required, Validators.minLength(6)]],
      quantity: ['', [Validators.required, Validators.minLength(1)]],
      price: ['', [Validators.required, Validators.minLength(5)]],
      latitude: [''],
      longitude: [''],
    });
  }

  getCordenadas(){
    Geolocation.getCurrentPosition().then(res => {
        this.product.latitude = res.coords.latitude;
        this.product.longitude = res.coords.longitude;
    });
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'New product?',
      message: 'Are you sure to add this new product?',
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
            this.addProduct();
          }
        }
      ]
    });
    confirm.present();
  }

  addProduct(){
    this.productService.create(this.product)
    .subscribe(product => {
       this.navCtrl.push(ProductListPage);
     });
  }

  ionViewDidLoad() {
    console.log('Hello ProductCreatePage Page');
  }

  ngOnInit(): void {
     this.getCordenadas();
  }
}
