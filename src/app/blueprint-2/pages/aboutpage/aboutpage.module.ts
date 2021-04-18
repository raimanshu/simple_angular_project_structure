import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutpageRoutingModule } from './aboutpage-routing.module';
import { AboutsComponent } from './abouts/abouts.component';
import { CoreModule } from 'src/app/core/core.module';

const COMPONETS = [
  AboutsComponent
]

@NgModule({
  declarations: [
    ...COMPONETS
  ],
  imports: [
    CommonModule,
    AboutpageRoutingModule,
    CoreModule
  ]
})
export class AboutpageModule { }
