import { Component, OnInit } from '@angular/core';
import { Rooms } from './rooms';

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

  
}
