import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoutePath } from 'src/app/core/config';
import { AuthService } from 'src/app/core/service/auth.service';
import { IRegisterUser, Respose } from 'src/app/core/shared/typings/app.typings'
import { ValidateEmail } from 'src/app/core/validator/email.validator';
import { MatchFieldValidator } from 'src/app/core/validator/field-matcher.validator';
import { finalize } from 'rxjs/operators';
import { INTERNET_CONNECTION_ERROR } from 'src/app/core/const/app.constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  externalLinks?= RoutePath;
  signupinfo: FormGroup;
  sub = false;
  loader: boolean = false;
  latitude: number = 0;
  longitude: number = 0;
  coutry = [];
  states = [];
  city = [];

  stateList = [
    { id: 1, state_name: 'demo 1' },
    { id: 2, state_name: 'demo 2' },
    { id: 3, state_name: 'demo 3' },
    { id: 4, state_name: 'demo 4' },
    { id: 5, state_name: 'demo 5' },
  ]

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.signupformIntialization();
    this.getLatLong();
    this.coutryApi();
  }

  // coutry Api implements 
  coutryApi() {
    this.authService.getCountry().subscribe(res => {
      if(res.status){
        this.coutry = res.data;
      }else{
        this.coutry = ['']
      }

    }, error => {
      console.log('server Error')
    })
  }

  // Coutry id api 
  courtyId(event) {
    const data = {
      country_id: event
    }
    this.authService.postCoutry(data).subscribe(res => {
      if(res.status){
        this.states = res.data;
      }else{
        this.coutry = ['']
      }
    }, error => {
      console.log('server Error')
    })
  }

  // state Id 
  stateId(event) {
    const data = {
      state_id: event
    }
    this.authService.postState(data).subscribe(res => {
      if(res.status){
        this.city = res.data;
      }else{
        this.city = [''];
      }
    }, error => {
      console.log('server Error')
    })
  }

  // latitute and lagitute api 
  getLatLong() {
    this.authService.getPosition().then(res => {
      this.latitude = res.lat;
      this.longitude = res.lng;
    }).catch(res => {
      console.log('user Location Off')
      this.latitude = 0;
      this.longitude = 0;
    })
  }


  signupformIntialization() {
    this.signupinfo = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, ValidateEmail]],
      country: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
      { validator: MatchFieldValidator.mustMatch('password', 'confirmPassword') });
  }

  get f() {
    return this.signupinfo.controls;
  }

  loginRute() {
    this.router.navigate([RoutePath.auth + '/' + RoutePath.login])
  }

  onSignupForm() {
    this.sub = true;
    if (this.signupinfo.invalid) {
      return
    }
    const payload: IRegisterUser = this.signupinfo.value;
    this.signupUser(payload);
  }


  signupUser(user) {
    this.loader = true;
    console.log(user);
    const data = {
      email: user.email,
      role: 'user',
      first_name: user.name,
      password: user.password,
      city: user.city,
      state: user.state,
      country: user.country,
      latitude: this.latitude,
      longitude: this.longitude
    }
    console.log(data);
    this.authService.postRegister(data).pipe(
      finalize(() => {
        this.loader = false;
      }),
    ).subscribe((res: Respose) => {
      if (res.success) {
        this.toastr.success(res.message)
        this.router.navigate([RoutePath.auth + '/' + RoutePath.login]);
      }
    }, error => {
      console.log("Server Error")
      const ms = error.error
      if (error.status == "0") {
        let ERRRO_MASSAGE = INTERNET_CONNECTION_ERROR.massage;
        this.toastr.error(ERRRO_MASSAGE);
      } else if (ms.error['email']) {
        const message = ms.error['email']
        this.toastr.error(message);
      } else if (ms.error['name']) {
        const message = ms.error['name']
        this.toastr.error(message);
      }
    })

  }
}
