import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from "../../../providers/user-service";
import { AlertController, ToastController } from 'ionic-angular';
import {User} from '../../../model/user';
import { ProfilePage } from '../profile-detail/profile';

/*
  Generated class for the ProfileFgotpass page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile-fgotpass',
  templateUrl: 'profile-fgotpass.html',
      providers: [UserService]
})
export class ProfileFgotpassPage {
	
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
	  ) {
		  
		this.idUserlogin = this.params.get("email");
		this.getUser(this.idUserlogin);
		this.userForm = this.editUserForm();
		  
	  }
	  
	  
	      private editUserForm() {
    return this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  
       showConfirm(user:User) {
    let confirm = this.alertCtrl.create({
      title: 'Edit Password?',
      message: 'Are you sure to edit your password?',
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
            this.updatePass(user);
            this.navCtrl.push(ProfilePage);
          }
        }
      ]
    });
    confirm.present();
  }
  
  
  
  
       updatePass(user:User) {
        this.userService.updatePass(user)
            .subscribe(
            user => {
                this.user = user;
            },
            error => {
                console.log(error);
            }
        );
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
  

  ionViewDidLoad() {
    console.log('Hello ProfileFgotpassPage Page');
  }

}
