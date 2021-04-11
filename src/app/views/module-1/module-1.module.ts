import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module-1-routing.module';
import { HomeComponent } from './home/home.component';
import { UsedComponentsModule } from 'src/app/shared/used-components/used-components.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    Module1RoutingModule,
    UsedComponentsModule
  ]
})
export class Module1Module { }
