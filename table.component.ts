import { Exam1 } from './../exam1';
import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  E1:Exam1[]=[
    new Exam1('Sri Sai',2210316041,'Computer-Science')
  ];
  E2:Exam1[]=[
    new Exam1('Raju',2210316040,'Aero-Space')
  ];
  example:string="Inside Table-Component";
  @Input() color:string;

  constructor() { }

  ngOnInit() {
  }

}
