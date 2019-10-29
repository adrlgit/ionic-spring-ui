import { Component } from "@angular/core"
import { Platform, Tabs } from "ionic-angular"
import { StatusBar } from "@ionic-native/status-bar"
import { SplashScreen } from "@ionic-native/splash-screen"

import { LoginPage } from "../pages/login/login"
import { CookieService } from "angular2-cookie"
import { TabsPage } from "../pages/tabs/tabs"

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = LoginPage
  requestOptions: any

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private cookieService: CookieService,
  ) {

    if (this.cookieService.getObject("usuarioAtual")) {
      this.requestOptions.headers.set('Authorization', "Bearer " + this.cookieService.get("acessToken"));
      this.rootPage = TabsPage;
    } else {
      this.rootPage =
        LoginPage;
    }

    platform.ready().then(() => {
      statusBar.styleDefault()
      splashScreen.hide()
    })
  }
}
