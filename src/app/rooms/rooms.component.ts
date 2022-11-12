import { Component, OnInit } from '@angular/core';
import { RoomList, Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  rooms : Rooms ={
    totalRomms:20,
    availableRooms: 10,
    bookedRooms:10,
  }


  
  RoomList : RoomList[]  = [{
    roomType : "Avarage",
    amenities : "Free Wifi",
    roomNumber :1,
    price : 500,
    photo : "image url",
    checkInTime : new Date("11-Nov-2021"),
    checkOutTime : new Date("20-Nov-2021"),
  }, 
  {
    roomType : "Above avarage",
    amenities : "Free Wifi,TV",
    roomNumber :2,
    price : 700,
    photo : "image url",
    checkInTime : new Date("11-Nov-2021"),
    checkOutTime : new Date("20-Nov-2021"),
  }]

}
