import { Component } from '@angular/core';
import { RoomList, Rooms } from './rooms/rooms';

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

  changeValue(){
    if(this.innerTextValue =="value changes"){
      this.innerTextValue = "hey from inner";
    }else{
      this.innerTextValue = "value changes";
    }
}




}


