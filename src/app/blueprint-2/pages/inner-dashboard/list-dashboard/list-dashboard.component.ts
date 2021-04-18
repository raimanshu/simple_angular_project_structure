import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoutePath } from 'src/app/core/config';
import { DASHBOAD_SLIDER } from 'src/app/core/const/app.constant';
import { AuthService } from 'src/app/core/service/auth.service';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-list-dashboard',
  templateUrl: './list-dashboard.component.html',
  styleUrls: ['./list-dashboard.component.css']
})
export class ListDashboardComponent implements OnInit, OnDestroy  {
  externalLinks? = RoutePath;
  hasCompany:boolean = false;
  constructor(private authService:AuthService,
    private CommonService: CommonService,) { }

  ngOnInit(): void {
    this.sliderpara();
    this.getProfileDetails();
  }
  sliderpara(){
    let data = DASHBOAD_SLIDER;
    this.authService.sendMessage(data);
  }

  getProfileDetails() {
    // this.loader = true;
    this.CommonService.getProfileDetailsApi().subscribe((res) => {
      console.log(res);
      
      // this.loader = false;
      // this.profileDetails = res.data;
      // this.photoUrl = res.data.image;
      if (res.data?.company?.company_name != null) {
        // localStorage.setItem('company-id', this.profileDetails.company.id);
        this.hasCompany = true;
      } else {
        this.hasCompany = false;
      }
    }, (error) => {
      // this.loader = false;
      console.log(error);
    })
  }

  ngOnDestroy(){
    let data = '';
    this.authService.sendMessage(data)
  }


}
