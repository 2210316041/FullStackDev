import { Row1Component } from './row1/row1.component';
import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAF';
  color:string="red";
  @ViewChild(Row1Component,{static:true}) st:Row1Component;
my11()
{
  this.st.ex1="Hello";
}
}
