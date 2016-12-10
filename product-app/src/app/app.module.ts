import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

import { ProductListPage } from '../pages/product/product-list/product-list';
import { ProductDetailPage } from "../pages/product/product-detail/product-detail";
import { ProductCreatePage } from '../pages/product/product-create/product-create';

import { ProfilePage } from '../pages/profile/profile-detail/profile';
import { ProfileEditPage } from  '../pages/profile/profile-edit/profile-edit'

import { LogoutPage } from '../pages/access/logout/logout';

@NgModule({
  declarations: [
    MyApp,
    ProductListPage,
    ProductDetailPage,
    ProductCreatePage,
    ProfilePage,
    ProfileEditPage,
    LogoutPage
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
    ProfilePage,
    ProfileEditPage,
    LogoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
