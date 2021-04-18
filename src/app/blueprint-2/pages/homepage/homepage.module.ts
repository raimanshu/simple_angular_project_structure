import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    CoreModule
  ]
})
export class HomepageModule { }
