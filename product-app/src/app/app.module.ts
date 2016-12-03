import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProductPage } from '../pages/product/product-list/product';
import { ProfilePage } from '../pages/profile/profile-detail/profile';
import { LogoutPage } from '../pages/access/logout/logout';

@NgModule({
  declarations: [
    MyApp,
    ProductPage,
    ProfilePage,
    LogoutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductPage,
    ProfilePage,
    LogoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
