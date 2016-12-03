import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../validators/custom-validators';
import { NavController } from 'ionic-angular';
import { User }          from '../../../model/user';
import {UserService}     from '../../../providers/user-service';

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
     users: User[];

  constructor(public navCtrl: NavController,private userservice: UserService,public formBuilder: FormBuilder) {
    this.userForm=this.createUserForm();
  }

  ionViewDidLoad() {
    console.log('Hello CreateUserPage Page');
  }

   add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.userservice.create(name)
            .subscribe(user => {
                this.users.push(user);
              
            });
    }

     private createUserForm() {
    return this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(6), CustomValidators.emailValidator]],
      password: ['', [Validators.required, CustomValidators.passwordValidator]],
      phone: ['', Validators.required],
    });
  }

}
