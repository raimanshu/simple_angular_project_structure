import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HowItWorkRoutingModule } from './how-it-work-routing.module';
import { WorkpageComponent } from './workpage/workpage.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [WorkpageComponent],
  imports: [
    CommonModule,
    HowItWorkRoutingModule,
    CoreModule
  ]
})
export class HowItWorkModule { }
