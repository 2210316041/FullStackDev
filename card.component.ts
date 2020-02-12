import { Exam1 } from './../exam1';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
E:Exam1[]=[
  new Exam1('Sri Sai',2210316041,'Computer-Science')
];
g1:string=' gainsboro';
E1:Exam1[]=[
  new Exam1('Arjun',2210316025,'Aero-Space')
];
show:boolean=true;
c1:string="blue";
change()
{
  if(this.show==true)
  {
this.c1='green';
  }
}
change1()
{
  if(this.show==true)
  {
this.c1='red';
  }
}
  constructor() { }

  ngOnInit() {
  }

}
