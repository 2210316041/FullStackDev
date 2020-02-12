import { Exam1 } from './../exam1';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
E3:Exam1[]=[
  new Exam1('Trivikram',2210316010,'CSE')
];
E4:Exam1[]=[
  new Exam1('SRI SAI',2210316041,'CSE')
];
  constructor() { }

  ngOnInit() {
  }

}
