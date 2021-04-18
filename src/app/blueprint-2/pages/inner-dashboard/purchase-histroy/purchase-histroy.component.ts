import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-histroy',
  templateUrl: './purchase-histroy.component.html',
  styleUrls: ['./purchase-histroy.component.css']
})
export class PurchaseHistroyComponent implements OnInit {
  stateList = [
    {number:10},
    { number:20},
    { number:30},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
