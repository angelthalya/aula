import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome : string = "MEU NAMORADO";

  clicar () : void {
     alert ("alerta de gado d+");
  }


}
