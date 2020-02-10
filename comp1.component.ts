import { Example2 } from './../example2';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})

export class Comp1Component implements OnInit {
Ex2:Example2[]=[
  new Example2('Arjun',25,'B10')
];
c2:string='blue'

  constructor() { }

  ngOnInit() {
  }

}
