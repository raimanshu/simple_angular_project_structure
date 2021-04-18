import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:RoutePath.Empty, component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
