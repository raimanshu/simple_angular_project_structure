import { Component, OnDestroy, OnInit } from '@angular/core';
import { HOW_IT_WORK } from 'src/app/core/const/app.constant';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-workpage',
  templateUrl: './workpage.component.html',
  styleUrls: ['./workpage.component.css']
})
export class WorkpageComponent implements OnInit, OnDestroy {

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.sliderpara();
  }
  sliderpara(){
    let data = HOW_IT_WORK;
    console.log(data)
    this.authService.sendMessage(data);
  }

  ngOnDestroy(){
    let data = '';
    this.authService.sendMessage(data)
  }

}
