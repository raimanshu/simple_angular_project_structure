import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from './shared/components/shared-component.module';
import { ModalModule } from 'ngx-bootstrap/modal';

const MODULES =[
    SharedComponentModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES,
    ModalModule.forRoot()
  ],
  exports:[
    ...MODULES,
    ModalModule
  ]
})
export class CoreModule { }
