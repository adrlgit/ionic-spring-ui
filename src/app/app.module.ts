import { NgModule, ErrorHandler } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular"
import { MyApp } from "./app.component"

import { AboutPage } from "../pages/about/about"
import { ContactPage } from "../pages/contact/contact"
import { HomePage } from "../pages/home/home"
import { TabsPage } from "../pages/tabs/tabs"

import { StatusBar } from "@ionic-native/status-bar"
import { SplashScreen } from "@ionic-native/splash-screen"
import { LoginPage } from "../pages/login/login"
import { LoginServiceProvider } from "../providers/login-service/login-service"
import { HttpModule, Http, XHRBackend, RequestOptions } from "@angular/http"
import { Utils } from "../entity/Utils"
import { InterceptorHttpService } from "../providers/InterceptorHttpService"

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage, LoginPage],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Utils,
    {
      provide: Http,
      useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => {
        return new InterceptorHttpService(backend, defaultOptions)
      },
      deps: [XHRBackend, RequestOptions]
    },
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginServiceProvider
  ]
})
export class AppModule {}
