import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveADirective } from './directive-a.directive';
import { DirectiveBDirective } from './directive-b.directive';



@NgModule({
  declarations: [DirectiveADirective, DirectiveBDirective],
  imports: [
    CommonModule
  ]
})
export class SharedDirectivesModule { }
