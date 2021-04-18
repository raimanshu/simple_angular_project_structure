import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { ModalModule } from 'ngx-bootstrap/modal';

const MODULES =[ 
  NgSelectModule,
  AngularMyDatePickerModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports:[
    ...MODULES,
  ]
})
export class SharedModule { }
