import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from "../../../providers/user-service";
import { AlertController, ToastController } from 'ionic-angular';
import {User} from '../../../model/user';

/*
  Generated class for the ProfileFgotpass page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile-fgotpass',
  templateUrl: 'profile-fgotpass.html'
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
  

  ionViewDidLoad() {
    console.log('Hello ProfileFgotpassPage Page');
  }

}
