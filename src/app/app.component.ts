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

rooms : Rooms = {
  availableRooms : 60,
  bookedRooms : 5,
  totalRomms :17
}

export : RoomList  = {
  roomType : "avarage",
  amenities : "Free Wifi",
  price : 500,
  photo : "image url",
  checkInTime : new Date("11-Nov-2021"),
  checkOutTime : new Date("20-Nov-2021"),
}


}


