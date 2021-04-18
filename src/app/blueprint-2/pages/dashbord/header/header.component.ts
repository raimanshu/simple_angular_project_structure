import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { LocalstorageService } from 'src/app/core/service/localstorage.service';
import { CommonService } from 'src/app/core/service/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  externalLinks? = RoutePath;
  userName:string;
  form : FormGroup;
  constructor(private localstorage:LocalstorageService,
    private router:Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private commonService: CommonService
    ) { }

  ngOnInit(): void {
    this.userValue();

    this.form = this.fb.group({
      list_type: ['airpart'],
      keyword: [''],
    })
  }
  userValue(){
    this.localstorage.getUserName().subscribe(res =>{
      this.userName = res;
    });
    console.log(this.userName)
  }

  logout(){
    this.localstorage.signOut();
    this.router.navigate([RoutePath.Empty])
  }

  searchKeyword(){
    console.log(this.form.value);
    // this.commonService.setData(this.form.value);
    // this.commonService.sendProductData(this.form.value);
    // if(this.form.controls['keyword'].value != ''){
      this.commonService.onSearchClick(this.form.value);
      setTimeout(() => {
        this.router.navigate([RoutePath.listed]);
      }, 200);
    // } else {
    //   this.toastr.info("Please type something.");
    // }

  }
}
