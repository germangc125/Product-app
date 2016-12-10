import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { ProductListPage } from '../pages/product/product-list/product-list';
import { ProductDetailPage } from "../pages/product/product-detail/product-detail";
import { ProductCreatePage } from '../pages/product/product-create/product-create';
import { ProductEditPage } from '../pages/product/product-edit/product-edit';

import { ProfilePage } from '../pages/profile/profile-detail/profile';
import { LogoutPage } from '../pages/access/logout/logout';
import {LoginPage}   from  '../pages/access/login/login';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    ProductListPage,
    ProductDetailPage,
    ProductCreatePage,
    ProductEditPage,
    ProfilePage,
    LogoutPage,
    LoginPage
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
    LogoutPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage]
})
export class AppModule {}
