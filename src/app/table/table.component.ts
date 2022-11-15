import { Component, Input, OnInit } from '@angular/core';
import { RoomList } from '../rooms/rooms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
 

  @Input() rooms : RoomList[] = []
  ngOnInit(): void {
  
  }

}
