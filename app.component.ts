import { TableComponent } from './table/table.component';
import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';
import {Input} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularH';
  mycolor:string='green';
 
  @ViewChild(TableComponent,{static:true}) stu:TableComponent;
  onclick1()
  {
    this.stu.example="Inside App-Component";
  }
}
