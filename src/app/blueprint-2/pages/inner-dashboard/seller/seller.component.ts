import { Component, OnInit } from '@angular/core';
import { CommonSlideComponent } from 'src/app/core/shared/components/common-slide/common-slide.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/core/service/common.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RoutePath } from 'src/app/core/config';
import { error } from 'selenium-webdriver';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  // stateList = [
  //   {id:1, state_name:'demo 1'},
  //   {id:2, state_name:'demo 2'},
  //   {id:3, state_name:'demo 3'},
  //   {id:4, state_name:'demo 4'},
  //   {id:5, state_name:'demo 5'},
  // ]

  sub = false;
  form: FormGroup;
  stateList = [];
  cityList = [];
  countryList = [];
  companyDetails:any;
  loader: boolean = false;
  hasCompany: boolean = false;

  option:boolean = false;
  namecountry:string;

  constructor(
    private commonService: CommonService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.getCountryList();
     this.getdetails();

    this.formInitialization();
  }

  editdetails(){
    if(this.option == false){
      this.option = true;
      this.formInitialization();
    }
  }

  getdetails(){
    this.commonService.getBestSellerInfo({ company_id: localStorage.getItem('company-id') }).subscribe((res) => {
      this.loader = false;
      this.companyDetails = res.data;
      if(res.data.company_name == null || res.data.company_name == ''){
        this.option = true;
        this.hasCompany = false;
      }else{
        this.option = false;
        this.hasCompany = true;
      }
        this.namecountry = res.data.company_country.country_name;
      // this.formInitialization();
      console.log(res);
    }, (error) => {
      // this.toastr.error('Something went wrong.');
      this.loader = false;
      console.log(error);
    });
  }

  formInitialization() {
    if (this.hasCompany) {
      this.form.patchValue({
        company_name: this.companyDetails.company_name,
        type_of_company: this.companyDetails.type_of_company,
        website: this.companyDetails.website,
        phone: this.companyDetails.phone,
        company_address: this.companyDetails.company_address,
        city: this.companyDetails.city,
        state: this.companyDetails.state,
        zipcode: this.companyDetails.zipcode,
        country: this.companyDetails.country
      });
      console.log(this.form.value);
    } else {
      this.form = this.fb.group({
        company_name: ['', [Validators.required]],
        type_of_company: ['', [Validators.required]],
        website: [''],
        phone: [''],
        company_address: ['', [Validators.required]],
        city: [''],
        state: [''],
        zipcode: [''],
        country: ['']
      })
    }
  }

  getCountryList() {
    this.loader = true;
    this.commonService.getCountry().subscribe((res) => {
      this.loader = false;
      console.log(res);
      this.countryList = res.data;
      this.form.controls.country.patchValue(this.countryList[0]);
    }, (error) => {
      this.loader = false;
      console.log(error);
    })
  }

  onBecomeSellerFormSubmit() {
    this.sub = true;
    if (this.form.invalid) {
      return
    }
    const payload = this.form.value;
    this.addCompanyInfo(payload);
  }

  addCompanyInfo(formData) {

    const data = {
      user_id: localStorage.getItem("user_id"),
      company_name: formData.company_name,
      type_of_company: formData.type_of_company,
      website: formData.website,
      phone: formData.phone,
      company_address: formData.company_address,
      city: formData.city,
      state: formData.state,
      zipcode: formData.zipcode,
      country: formData.country
    }
    this.loader = true;
    this.commonService.postAddCompanyInfo(data).subscribe((res) => {
      console.log(res);
      this.loader = false;
      this.form.reset();
      this.sub = false;
      this.hasCompany = false;
      this.router.navigate([RoutePath.dashboard + '/' + RoutePath.Empty]);
      this.toastr.success('Data saved sucessfully.');
    }, (error) => {
      console.log(error);
      this.loader = false;

    })
  }

  get f() {
    return this.form.controls;
  }

  countrySelected() {
    if (this.f.country.value != "") {
      console.log(this.f.country.value);
      this.loader = true;
      this.commonService.postStates(this.f.country.value).subscribe((res) => {
        this.loader = false;
        console.log(res);
        this.stateList = res.data;
      }, (error) =>{
        console.log(error);
        this.loader = false;
      });
    } else {
      this.toastr.info("Please select a country.");
    }
  }



  stateSelected() {
    if (this.f.state.value != "") {
      console.log(this.f.state.value);
      this.loader = true;
      this.commonService.postCity(this.f.state.value).subscribe((res) => {
        console.log(res);
        this.loader = false;
        this.cityList = res.data;
      }, (error) => {
        console.log(error);
        this.loader = false;
      });
    } else {
      this.toastr.info("Please select a state.");
    }
  }

}
