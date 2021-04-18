import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';

const routes: Routes = [
  {path:RoutePath.Empty, component:SubscriptionPageComponent},
  {path:RoutePath.payment, component:PaymentPageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
