import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { IntroComponent } from './intro/intro.component';

const COMPONETS =[
  HeaderComponent,
  FooterComponent, 
  SideNavComponent,
  ComponentAComponent
]

@NgModule({
  declarations: [
    ...COMPONETS,
    IntroComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONETS
  ]
})
export class SharedComponentsModule { }
