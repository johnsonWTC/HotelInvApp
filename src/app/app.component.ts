import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HotelInvApp';
  innerTextValue = "hey from inner";
  hideInnerText = false;

  HideText (){
    this.hideInnerText = !this.hideInnerText;
  }
}


