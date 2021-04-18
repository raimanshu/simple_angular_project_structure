import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListedSellerRoutingModule } from './listed-seller-routing.module';
import { ListedListingComponent } from './listed-listing/listed-listing.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [ListedListingComponent],
  imports: [
    CommonModule,
    ListedSellerRoutingModule,
    CoreModule
  ]
})
export class ListedSellerModule { }
