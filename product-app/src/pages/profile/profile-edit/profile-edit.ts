import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from "../../../providers/user-service";
import {User} from '../../../model/user';

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

  constructor(public navCtrl: NavController, private userService: UserService, public params:NavParams) {
  	this.idUserlogin = this.params.get("email");
  	this.getUser(this.idUserlogin);
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

  ionViewDidLoad() {
    console.log('Hello ProfileEditPage Page');
  }

}
