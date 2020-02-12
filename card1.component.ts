import { Task1 } from './../task1';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
g1:string="https://angular.io/";
  E5:Task1[]=[
  new Task1('Angular',9,'Description')
]

  constructor() { }

  ngOnInit() {
  }

}
