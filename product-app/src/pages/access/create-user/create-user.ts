import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../../validators/custom-validators';
import { NavController } from 'ionic-angular';
import { User }          from '../../../model/user';
import {UserService}     from '../../../providers/user-service';
import { AlertController,ToastController } from 'ionic-angular';
import {LoginPage}   from '../login/login';

/*
  Generated class for the CreateUser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
  providers: [UserService]
})
export class CreateUserPage {
    userForm: FormGroup;
    user:User= {
              id: 0,
             email: '',
             password: '',
             firstname: '',
                lastname: '',
               phone: '',
             status: ''
  };

  constructor(public navCtrl: NavController,private userservice: UserService,public formBuilder: FormBuilder,public alertCtrl: AlertController,public toastCtrl: ToastController) {
    this.userForm=this.createUserForm();
  }



showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'New user?',
      message: 'Are you sure to add this new user?',
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
            this. addUser();
          }
        }
      ]
    });
    confirm.present();
  }

  addUser(){
    this.userservice.create(this.user)
    .subscribe(user=> {
        let toast = this.toastCtrl.create({
                            message: 'User was add successfully',
                            duration: 3000,
                            position: 'top'
                       });
                       toast.present();
       this.navCtrl.push(LoginPage);
     });
  }



  ionViewDidLoad() {
    console.log('Hello CreateUserPage Page');
  }

  

     private createUserForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6), CustomValidators.emailValidator]],
      password: ['', [Validators.required, CustomValidators.passwordValidator]],
      phone: ['', [Validators.required,Validators.maxLength(10),CustomValidators.phonedValidator]],
    });
  }

}
