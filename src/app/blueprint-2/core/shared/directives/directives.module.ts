import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardDirective } from './credit-card.directive';
import { CvvCardDirective } from './cvv-card.directive';
import { DateCardDirective } from './date-card.directive';


const COMPONENTS = [
  CreditCardDirective,
  CvvCardDirective,
  DateCardDirective
]
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...COMPONENTS
  ]
})
export class DirectivesModule { }
