import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController } from 'ionic-angular';
import { Product } from '../../../model/product';
import { ProductService } from "../../../providers/product-service";
import { ProductListPage } from "../product-list/product-list";

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
              latitude:0,
              longitude:0
  };

  constructor(public navCtrl: NavController, private productService: ProductService,public formBuilder: FormBuilder) {
    this.productForm = this.createProductForm();
  }
  private createProductForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required, Validators.minLength(6)]],
      quantity: ['', [Validators.required, Validators.minLength(1)]],
      price: ['', [Validators.required, Validators.minLength(5)]],
      latitude: ['', [Validators.required, Validators.minLength(6)]],
      longitude: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getCordenadas(){
    
  }



  add(product: Product): void {
        this.productService.create(product)
      .subscribe(product => {
          this.navCtrl.push(ProductListPage);
      });
    }


  ionViewDidLoad() {
    console.log('Hello ProductCreatePage Page');
  }

  ngOnInit(): void {}





}
