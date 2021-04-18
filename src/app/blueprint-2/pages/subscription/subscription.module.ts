import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { PaymentPageComponent } from './payment-page/payment-page.component';


@NgModule({
  declarations: [SubscriptionPageComponent, PaymentPageComponent],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    CoreModule
  ]
})
export class SubscriptionModule { }
