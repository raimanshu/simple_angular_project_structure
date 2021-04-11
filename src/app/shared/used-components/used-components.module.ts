import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';

const COMPONETS =[
  ComponentAComponent,
  ComponentBComponent
]

@NgModule({
  declarations: [
    ...COMPONETS,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ...COMPONETS 
  ]
})
export class UsedComponentsModule { }
