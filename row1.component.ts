
import { Task1 } from './../task1';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-row1',
  templateUrl: './row1.component.html',
  styleUrls: ['./row1.component.css']
})
export class Row1Component implements OnInit {
ex1:string="bye";
E4:Task1[]=[
  new Task1('SriSai',24,'B10')
];
E5:Task1[]=[
  new Task1('Arjun',25,'B10')
];
  constructor() { }

  ngOnInit() {
  }

}
