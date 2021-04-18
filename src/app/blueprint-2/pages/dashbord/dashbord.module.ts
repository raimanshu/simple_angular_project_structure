import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FotterComponent } from './fotter/fotter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HeaderComponent, LayoutComponent, FotterComponent],
  imports: [
    CommonModule,
    DashbordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashbordModule { }
