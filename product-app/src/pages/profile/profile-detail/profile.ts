import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from "../../../providers/user-service";
import {User} from '../../../model/user';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
   providers: [UserService]
})
export class ProfilePage {
	
	
	user:User= {
    id: 0,
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: "",
    status: ""
  };

  constructor(public navCtrl: NavController, private userService: UserService) {
	  this.getUser("admin198@admin.co");
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
    console.log('Hello ProfilePage Page');
  }

}
