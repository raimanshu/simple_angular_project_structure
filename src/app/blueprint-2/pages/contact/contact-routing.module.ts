import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { ContactUsComponent } from './contact-us/contact-us.component'

const routes: Routes = [
  {path:RoutePath.Empty, component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
