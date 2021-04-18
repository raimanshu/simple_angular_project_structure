import { Component, OnDestroy, OnInit } from '@angular/core';
import { ABOUT_SLIDER } from 'src/app/core/const/app.constant'
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.css']
})
export class AboutsComponent implements OnInit, OnDestroy {
  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.sliderpara();
  }
  sliderpara(){
    let data = ABOUT_SLIDER;
    console.log(data)
    this.authService.sendMessage(data);
  }

  ngOnDestroy(){
    let data = '';
    this.authService.sendMessage(data)
  }


}
