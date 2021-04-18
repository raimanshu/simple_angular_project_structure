import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ListDashboardComponent } from './list-dashboard/list-dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyQuotesComponent } from './my-quotes/my-quotes.component';
import { MyRfqsComponent } from './my-rfqs/my-rfqs.component';
import { PurchaseHistroyComponent } from './purchase-histroy/purchase-histroy.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  {path:RoutePath.Empty, component:ListDashboardComponent, children: [
  { path: RoutePath.Empty, redirectTo:RoutePath.myprofile, pathMatch: RoutePath.full },
  {path:RoutePath.myprofile, component:MyProfileComponent},
  {path:RoutePath.myrfqs, component:MyRfqsComponent},
  {path:RoutePath.My_quotes, component:MyQuotesComponent},
  {path:RoutePath.histroy, component:PurchaseHistroyComponent},
  {path:RoutePath.seller, component:SellerComponent},
  {path:RoutePath.changePassword, component:ChangePasswordComponent},
  {path:RoutePath.editProfile, component:EditProfileComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerDashboardRoutingModule { }
