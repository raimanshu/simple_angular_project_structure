import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.css']
})
export class SubscriptionPlanComponent implements OnInit {

  plansList = [];
  loader: boolean = false;
  constructor(
    private commonService: CommonService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getSubscriptionPlansList();
  }

  getSubscriptionPlansList(){
    this.loader = true;
    this.commonService.getSubscriptionPlanList().subscribe((res) => {
      this.plansList = res.data;
      this.loader = false;
      console.log(res.message);
    }, (error) => {
      this.loader = false;
      console.log(error);
    })
  }

}
