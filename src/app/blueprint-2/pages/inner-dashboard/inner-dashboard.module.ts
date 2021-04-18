import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerDashboardRoutingModule } from './inner-dashboard-routing.module';
import { ListDashboardComponent } from './list-dashboard/list-dashboard.component';
import { CoreModule } from 'src/app/core/core.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyRfqsComponent } from './my-rfqs/my-rfqs.component';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { PurchaseHistroyComponent } from './purchase-histroy/purchase-histroy.component';
import { SellerComponent } from './seller/seller.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [ListDashboardComponent, MyProfileComponent, MyRfqsComponent, MyQuotesComponent, PurchaseHistroyComponent, SellerComponent, ChangePasswordComponent, EditProfileComponent],
  imports: [
    CommonModule,
    InnerDashboardRoutingModule,
    CoreModule
  ]
})
export class InnerDashboardModule { }
