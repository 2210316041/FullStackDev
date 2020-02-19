import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fetchdata',
  templateUrl: './fetchdata.component.html',
  styleUrls: ['./fetchdata.component.css']
})
export class FetchdataComponent implements OnInit {

  posts=[
    {
      date:"19 Feb",
      temp1:"23",
      temp2:"18",
      summ:"moderate"
    },
    {
      date:"20 Feb",
      temp1:"24",
      temp2:"19",
      summ:"moderate"
    },
    {
      date:"21 Feb",
      temp1:"18",
      temp2:"15",
      summ:"cool!"
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  

}
