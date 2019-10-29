import { Component } from "@angular/core"
import { IonicPage, NavController, NavParams } from "ionic-angular"
import { PerfilServiceProvider } from "../../providers/perfil-service/perfil-service"

@IonicPage()
@Component({
  selector: "page-perfil",
  templateUrl: "perfil.html",
  providers: [PerfilServiceProvider]
})
export class PerfilPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public perfilService: PerfilServiceProvider
  ) {
    this.perfilService
      .getPerfis()
      .subscribe((response) => (this.perfilService = response))
  }
}
