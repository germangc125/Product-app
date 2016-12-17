import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from "../../../providers/user-service";
import { AlertController } from 'ionic-angular';
import {User} from '../../../model/user';
import { ProfileEditPage } from  '../profile-edit/profile-edit';
import { ProfileFgotpassPage } from  '../profile-fgotpass/profile-fgotpass';
import {LoginPage}      from '../../access/login/login';
import { Storage } from '@ionic/storage';

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
  
  
   lv_email: string = "";

  constructor(
    public navCtrl: NavController, 
    private userService: UserService,
    public alertCtrl: AlertController,
	public storage: Storage
      ) {
		
	   
	  this.getUser2(this.lv_email);	 
 	  
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
getUser2(email:string) {
		 
		 
	
       this.storage.get("USER").then(res => {
          if(res !=null){


     if(res.id !=undefined){
	   this.lv_email = res.correo;	
	   
	   
	    this.userService.getUser(this.lv_email)
            .subscribe(
            user => {
                this.user = user;
				
            },
            error => {
                console.log(error);
				
            }
        );
		
       
     }
    

}

 else{
           this.navCtrl.push(LoginPage);
   
        
     }


    



    	
    });



	
		 
		 
       
		
		
		
		
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
  
   userSelecionado(user:User){
    this.navCtrl.push(ProfileEditPage,{email: user.email});
  }
  
     editPass(user:User){
    this.navCtrl.push(ProfileFgotpassPage,{email: user.email});
  }
  
  
  

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }
  
  
    ngOnInit(): void {
    


      this.storage.get("USER").then(res => {
if(res !=null){


     if(res.id !=undefined){
	   this.lv_email = res.correo;	
	   console.log(this.lv_email);
       
     }
    

}

 else{
           this.navCtrl.push(LoginPage);
   
        
     }


    



    	
    });
     

      

 }

  
  
  

}
