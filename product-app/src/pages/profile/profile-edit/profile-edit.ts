import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from "../../../providers/user-service";
import { AlertController, ToastController } from 'ionic-angular';
import {User} from '../../../model/user';
import { ProfilePage } from '../profile-detail/profile';

/*
  Generated class for the ProfileEdit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
     providers: [UserService]
})
export class ProfileEditPage {
    userForm: FormGroup;

	  public idUserlogin:any;

	user:User= {
    id: 0,
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
    status: ""
  };

  constructor(
    public navCtrl: NavController, 
    private userService: UserService, 
    public formBuilder: FormBuilder, 
    public params:NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
    ) 
  {
  	this.idUserlogin = this.params.get("email");
  	this.getUser(this.idUserlogin);
    this.userForm = this.editUserForm();
  }

    private editUserForm() {
    return this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }





     getUser(email:string) {
        this.userService.getUser(email)
            .subscribe(
            user => {
                this.user = user;
            },
            error => {
                console.log(error);
            }
        );
    }

    
     showConfirm(user:User) {
    let confirm = this.alertCtrl.create({
      title: 'Edit User?',
      message: 'Are you sure to edit your user?',
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
            this.updateUser(user);
             this.navCtrl.push(ProfilePage);
          }
        }
      ]
    });
    confirm.present();
  }


       deleteConfirm(user:User) {
    let confirm = this.alertCtrl.create({
      title: 'Delete User?',
      message: 'Are you sure to delete your user?',
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
            this.deleteUser(user);
          }
        }
      ]
    });
    confirm.present();
  }




     updateUser(user:User) {
        this.userService.updateUser(user)
            .subscribe(
            user => {
                this.user = user;
            },
            error => {
                console.log(error);
            }
        );
    }

       deleteUser(user:User) {
        this.userService.deleteUser(user.email)
            .subscribe(
            error => {
                console.log(error);
            }
        );
    }

  ionViewDidLoad() {
    console.log('Hello ProfileEditPage Page');
  }

}
