import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { WorkpageComponent } from './workpage/workpage.component';

const routes: Routes = [
  {path:RoutePath.Empty, component:WorkpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowItWorkRoutingModule { }
