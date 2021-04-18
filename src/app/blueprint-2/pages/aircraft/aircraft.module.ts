import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AircraftRoutingModule } from './aircraft-routing.module';
import { AircraftInformationComponent } from './aircraft-information/aircraft-information.component';
import { CoreModule } from 'src/app/core/core.module';
import { AirpartFormComponent } from './airpart-form/airpart-form.component';


@NgModule({
  declarations: [AircraftInformationComponent, AirpartFormComponent],
  imports: [
    CommonModule,
    AircraftRoutingModule,
    CoreModule
  ]
})
export class AircraftModule { }
