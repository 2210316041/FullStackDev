import { Menu } from './../menu';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {
M1:Menu[]=[
  new Menu('Home','Students','Teachers','News')
]
  constructor() { }

  ngOnInit() {
  }

}
