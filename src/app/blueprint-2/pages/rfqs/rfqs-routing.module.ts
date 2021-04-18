import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { RfqsPageComponent } from './rfqs-page/rfqs-page.component';

const routes: Routes = [
  {path:RoutePath.Empty, component:RfqsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RfqsRoutingModule { }
