import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from '../../core/config/router.config';
import { AircraftInformationComponent } from './aircraft-information/aircraft-information.component';
import { AirpartFormComponent } from './airpart-form/airpart-form.component';

const routes: Routes = [
  {path:RoutePath.Aircraft, component:AircraftInformationComponent},
  {path:RoutePath.Airpart, component:AirpartFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AircraftRoutingModule { }
