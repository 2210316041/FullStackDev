import { Example2 } from './../example2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
Ex3:Example2[]=[
  new Example2('Trivikram',10,'H&H')
];
Ex4:Example2[]=[
  new Example2('Karthik',12,'ECE')
];
Ex5:Example2[]=[
  new Example2('Sri Sai',24,'CSE'),
  new Example2('Arjun',10,'CSE')
];
g1:string='green'
g2:string='blue'
  constructor() { }

  ngOnInit() {
  }

}
