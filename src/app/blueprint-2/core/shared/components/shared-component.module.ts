import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CommonSlideComponent } from './common-slide/common-slide.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoderOneComponent } from './loder-one/loder-one.component';


const MODULES =[
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  SharedModule,
  DirectivesModule,
  PipesModule,
  CarouselModule
]
const COMONENTS = [
  SubscriptionPlanComponent,
  TestimonialComponent,
  CommonSlideComponent,
  LoderOneComponent,
]

@NgModule({
  declarations: [
    ...COMONENTS,
  ],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports:[
    ...MODULES,
    ...COMONENTS
  ]
})
export class SharedComponentModule { }
