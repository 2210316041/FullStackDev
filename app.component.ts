import { Example } from './example';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2';
  one:string='Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.';
Ex1:Example[]=[
  new Example('Sri Sai',24,'B10'),
  new Example('Trivikram',26,'B10'),
  new Example('Chinnu',28,'B10')
];
c1:string='orange';
c2:string='red';
}
