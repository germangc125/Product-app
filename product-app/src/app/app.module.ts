import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { ProductListPage } from '../pages/product/product-list/product-list';
import { ProductDetailPage } from "../pages/product/product-detail/product-detail";
import { ProductCreatePage } from '../pages/product/product-create/product-create';
import { ProductEditPage } from '../pages/product/product-edit/product-edit';
import { ProfileEditPage } from  '../pages/profile/profile-edit/profile-edit';
import { ProfileFgotpassPage } from  '../pages/profile/profile-fgotpass/profile-fgotpass';
import { ProfilePage } from '../pages/profile/profile-detail/profile';
import { LogoutPage } from '../pages/access/logout/logout';
import {LoginPage}   from  '../pages/access/login/login';
import { Storage } from '@ionic/storage';
import {CreateUserPage}   from '../pages/access/create-user/create-user';

@NgModule({
  declarations: [
    MyApp,
    ProductListPage,
    ProductDetailPage,
    ProductCreatePage,
    ProductEditPage,
    ProfilePage,
    ProfileEditPage,
	ProfileFgotpassPage,
    LogoutPage,
    LoginPage,
    CreateUserPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductListPage,
    ProductDetailPage,
    ProductCreatePage,
    ProductEditPage,
    ProfilePage,
    ProfileEditPage,
	ProfileFgotpassPage,
    LogoutPage,
    LoginPage,
    CreateUserPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage]
})
export class AppModule {}