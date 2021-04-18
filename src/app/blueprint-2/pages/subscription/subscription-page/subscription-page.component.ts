import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
// import { SUBSCRIPTION_PLAN } 'src/app/core/const/app.constant'
import { SUBSCRIPTION_PLAN } from 'src/app/core/const/app.constant'

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.css']
})
export class SubscriptionPageComponent implements OnInit, OnDestroy {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.sliderpara();
  }
  sliderpara(){
    let data = SUBSCRIPTION_PLAN;
    this.authService.sendMessage(data);
  }

  ngOnDestroy(){
    let data = '';
    this.authService.sendMessage(data)
  }


}
