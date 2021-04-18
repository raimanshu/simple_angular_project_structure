import { Component, OnDestroy, OnInit } from '@angular/core';
import { CONTACT_US } from 'src/app/core/const/app.constant';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit, OnDestroy {
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.sliderpara();
  }
  sliderpara(){
    let data = CONTACT_US;
    this.authService.sendMessage(data);
  }

  ngOnDestroy(){
    let data = '';
    this.authService.sendMessage(data)
  }


}
