import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CoreModule } from 'src/app/core/core.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const COMPONETS =[
  LoginComponent, 
  SignupComponent,
  ForgetPasswordComponent
]

@NgModule({
  declarations: [
    ...COMPONETS
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule
  ]
})
export class AuthModule { }
