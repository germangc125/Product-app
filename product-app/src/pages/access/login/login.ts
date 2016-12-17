import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserService}    from '../../../providers/user-service';
import { AlertController } from 'ionic-angular';
import {ProductListPage}   from '../../product/product-list/product-list';
import { Storage } from '@ionic/storage';
import {CreateUserPage}   from '../create-user/create-user';
import {CustomValidators} from '../../../validators/custom-validators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/*
  Generated class for the Login page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage {
    loginForm: FormGroup;
    email:string = "";
    password:string = "";
   	private setDataUser: any = {id: 0, correo: ''};


  constructor(public navCtrl: NavController,private userservice:UserService,public alertCtrl: AlertController,public storage: Storage,public formBuilder: FormBuilder) {
    this.loginForm=this.loginFormulario();

  }

 private loginFormulario() {
       return this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(6), CustomValidators.emailValidator]],
      password: ['', [Validators.required, CustomValidators.passwordValidator,Validators.minLength(6)]],
    });
  }


  login() {
            this.userservice.signinuser(this.email,this.password).subscribe
            (
                 data => {     
               //Navigate to home page
                              var json= JSON.stringify(data);
                                     console.log('ver data :'+ json)
                                console.log(data)
                                 if (data.id==undefined)   
                                 {
                  
                                          let alert = this.alertCtrl.create({
                                    title: 'User login!',
                                   subTitle: 'user or password invalid!',
                                     buttons: ['OK']
                                      });
                                   alert.present();
  

                                   } 
                                    else
                                  {
                                               this.setDataUser.id=data.id;
                                                 this.setDataUser.correo=data.email;
                                                     this.storage.set('USER',this.setDataUser).then((val) => {
                       
                                                    this.navCtrl.push(ProductListPage);


                                                           })
                                    } 
                          }
                )
           }


Resgister(){
         this.navCtrl.push(CreateUserPage);

       }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }


   


}
