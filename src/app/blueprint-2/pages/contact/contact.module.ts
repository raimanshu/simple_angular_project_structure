import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [ ContactUsComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    CoreModule
  ]
})
export class ContactModule { }
