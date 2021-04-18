import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aircraft-information',
  templateUrl: './aircraft-information.component.html',
  styleUrls: ['./aircraft-information.component.css']
})
export class AircraftInformationComponent implements OnInit {
  stateList = [
    {id:1, state_name:'demo 1'},
    {id:2, state_name:'demo 2'},
    {id:3, state_name:'demo 3'},
    {id:4, state_name:'demo 4'},
    {id:5, state_name:'demo 5'},
  ]
  
  pricelist = [
    {id:1, name:'USD'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
