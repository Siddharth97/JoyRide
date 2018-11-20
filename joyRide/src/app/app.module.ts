import { myService } from './../providers/data-service/data-service';
import { ConfirmPage } from './../pages/confirm/confirm';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CameraTabDefaultPagePage } from '../pages/camera-tab-default-page/camera-tab-default-page';
import { CartTabDefaultPagePage } from '../pages/cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../pages/cloud-tab-default-page/cloud-tab-default-page';
import { GoogleMaps } from '@ionic-native/google-maps';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PostTripPage } from '../pages/post-trip/post-trip';
import { FindTripPage } from '../pages/find-trip/find-trip';
import { TravelingDriversPage } from '../pages/traveling-drivers/traveling-drivers';
import { TripDetailsPage } from '../pages/trip-details/trip-details';
import { SettingsPage } from '../pages/settings/settings';
import { TripHistoryPage } from '../pages/trip-history/trip-history';
import { ProfilePage } from '../pages/profile/profile';
import { PaymentsPage } from '../pages/payments/payments';
import { AboutPage } from '../pages/about/about';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Api } from '../providers/api/api';
import { User } from '../providers/user/user';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { HttpModule } from '@angular/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    PostTripPage,
    FindTripPage,
    TravelingDriversPage,
    TripDetailsPage,
    SettingsPage,
    TripHistoryPage,
    ProfilePage,
    PaymentsPage,
    AboutPage,
    ConfirmPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp), HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    PostTripPage,
    FindTripPage,
    TravelingDriversPage,
    TripDetailsPage,
    SettingsPage,
    TripHistoryPage,
    ProfilePage,
    PaymentsPage,
    AboutPage,
    ConfirmPage
  ],
  providers: [
    GoogleMaps,
    StatusBar,
    Api,
    User,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider,
    myService
  ]
})
export class AppModule {}