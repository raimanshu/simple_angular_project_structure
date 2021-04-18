import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RfqsRoutingModule } from './rfqs-routing.module';
import { RfqsPageComponent } from './rfqs-page/rfqs-page.component';


@NgModule({
  declarations: [RfqsPageComponent],
  imports: [
    CommonModule,
    RfqsRoutingModule
  ]
})
export class RfqsModule { }
