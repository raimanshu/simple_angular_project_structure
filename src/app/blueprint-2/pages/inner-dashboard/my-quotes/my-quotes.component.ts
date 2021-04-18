import { Component, OnInit } from '@angular/core';
import { IAngularMyDpOptions } from 'angular-mydatepicker';

@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.component.html',
  styleUrls: ['./my-quotes.component.css']
})
export class MyQuotesComponent implements OnInit {
  myOptions: IAngularMyDpOptions = {
    dateRange: true,
    dateFormat: 'dd/mm/yyyy'
    // other options...
  };
  stateList = [
    {id:1, state_name:'demo 1'},
    {id:2, state_name:'demo 2'},
    {id:3, state_name:'demo 3'},
    {id:4, state_name:'demo 4'},
    {id:5, state_name:'demo 5'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
