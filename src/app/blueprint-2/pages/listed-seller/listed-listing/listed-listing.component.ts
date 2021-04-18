import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/core/service/common.service';

@Component({
  selector: 'app-listed-listing',
  templateUrl: './listed-listing.component.html',
  styleUrls: ['./listed-listing.component.css']
})
export class ListedListingComponent implements OnInit, OnDestroy {
  navigationSubscription;
  data: any;
  test1;
  formData: any = '';
  productList: any = [];
  constructor(
    private commonService: CommonService,
    private router: Router,
    private toastr: ToastrService,
  ) {

    if (this.commonService.subsVar == undefined) {
      this.commonService.subsVar = this.commonService.
        invokeFirstComponentFunction.subscribe((name) => {
          console.log(name);
          this.formData = name;
          // this.productList="we are searching";
          setTimeout(() => {
            this.getAllProductsApi();
            // this.productList="we completed searching";
          }, 500);  
        });
    }
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        setTimeout(() => {
          this.getAllProductsApi();
          // this.productList="we completed searching";
        }, 500);  
      }
    })
   }

  ngAfterViewInit() {
   
  }

  ngOnInit(): void {
    
  }

  getAllProductsApi() {
    let payload = {
      user_id: localStorage.getItem('user_id'),
      list_type: this.formData == '' ? 'all' : this.formData.list_type,
      search: this.formData.keyword,
      list_for: 'other'
    }

    this.commonService.getAllAirpartsList(payload).subscribe((res) => {
      this.handleResponse(payload.list_type, res.data);
      console.log(res);
    });
  }

  handleResponse(type, lists) {
    // this.productList=lists as any;
    switch (type) {
      case 'all':
        let arr = [];
        for (var key of Object.keys(lists)) {
          if (lists[key]["data"].length != 0) {
            arr.push.apply(arr, lists[key]["data"]);
          }
        }
       
        this.productList.push.apply(this.productList, arr);
        arr.length = 0;
        if (this.productList.length == 0) {
          this.toastr.info('No records found.');
        }
        console.log(this.productList);
        break;
      case 'aircraft':
        this.productList = lists.aircrafts.data;
        if (this.productList.length == 0) {
          this.toastr.info('No records found.');
        }
        console.log(this.productList);
        break;
      case 'airpart':
        this.productList = lists.airparts.data;
        if (this.productList.length == 0) {
          this.toastr.info('No records found.');
        }
        console.log(this.productList);
        break;
      default: console.log("Donot match any option.");
        break;
    }
  }

  ngOnDestroy() {
    this.productList = [];
    this.formData = '';
  }




}
