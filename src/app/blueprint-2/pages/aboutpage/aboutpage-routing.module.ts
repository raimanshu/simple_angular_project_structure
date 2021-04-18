import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { AboutsComponent } from './abouts/abouts.component';

const routes: Routes = [
  {path:RoutePath.Empty, component:AboutsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutpageRoutingModule { }
