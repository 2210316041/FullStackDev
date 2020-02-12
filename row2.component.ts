import { Task1 } from './../task1';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row2',
  templateUrl: './row2.component.html',
  styleUrls: ['./row2.component.css']
})
export class Row2Component implements OnInit {
 
Ex5:Task1[]=[
  new Task1('SriSai',24,'B10')
];
Ex6:Task1[]=[
  new Task1('Arjun',25,'B10')
];
  constructor() { }

  ngOnInit() {
  }

}
