import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { ListedListingComponent } from './listed-listing/listed-listing.component';

const routes: Routes = [
  {path:RoutePath.Empty, component:ListedListingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListedSellerRoutingModule { }
