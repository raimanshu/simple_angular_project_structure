import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoutePath } from 'src/app/core/config';
import { ValidateEmail } from 'src/app/core/validator/email.validator';
import { ILoginUser, Respose } from 'src/app/core/shared/typings/app.typings'
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { LocalstorageService } from 'src/app/core/service/localstorage.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ForgetPasswordComponent } from 'src/app/pages/auth/forget-password/forget-password.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logininfo: FormGroup;
  sub = false;
  response: any;
  externalLinks?= RoutePath;
  loader: boolean = false;
  bsModalRef: BsModalRef;

  constructor(
    private fb: FormBuilder,
    private socialService: SocialAuthService,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService,
    private localstorage: LocalstorageService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.loginformIntialization();
  }

  loginformIntialization() {
    this.logininfo = this.fb.group({
      email: ['', [Validators.required, ValidateEmail]],
      password: ['', [Validators.minLength(6), Validators.required]],
      remember: [null]
    })
  }

  get f() {
    return this.logininfo.controls;
  }

  onLoginForm() {
    this.sub = true;
    if (this.logininfo.invalid) {
      return
    }
    const payload: ILoginUser = this.logininfo.value;
    this.loginUser(payload);
  }

  // Social login 
  signInWithGoogle() {
    // let thisRef = this;
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      this.response = user;
      this.socialmedia(user,'google');
    }, error => {
      console.log('Server Error')
    })
  }

  signInWithFB() {
    this.socialService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      this.response = user;
      this.socialmedia(user,'facebook');
    }, error => {
      console.log('Server Error')
    }
    );

  }

  socialmedia(user, type) {
    let payload;
    if(type == 'google'){
      payload = {
        first_name: user.firstName,
        email: user.email,
        image: user.photoUrl,
        driver: type,
        social_id: user.id,
        device_token: user.idToken,
        role: 'user'
      }
    } else {
      payload = {
        first_name: user.firstName,
        email: user.email,
        image: user.photoUrl,
        driver: type,
        social_id: user.id,
        device_token: user.authToken,
        role: 'user'
      }
    }

    console.log(user);
    this.authService.socialLogin(payload).subscribe((res) => {
      if (res.success) {
        this.toastr.success(res.message)
        console.log(res);
        this.router.navigate([RoutePath.Empty]);
        this.localstorage.sendUserName(res.data.username)
        this.localstorage.sendToken(res.token);
        localStorage.setItem('user_id', res.data.id);
        localStorage.setItem('email', res.data.email);
      }
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }


  loginUser(users) {
    this.loader = true;
    console.log(users)
    this.authService.postLogin(users).pipe(
      finalize(() => {
        this.loader = false;
      }),
    ).subscribe((res: Respose) => {
      if (res.success) {
        this.toastr.success(res.message)
        console.log(res);
        this.router.navigate([RoutePath.Empty]);
        this.localstorage.sendUserName(res.data.username)
        this.localstorage.sendToken(res.token);
        localStorage.setItem('user_id', res.data.id);
        localStorage.setItem('email', res.data.email);
      }
    }, error => {
      console.log("Server Error")
      const ms = error.error
      const message = ms.message;
      this.toastr.error(message);
    })
  }

  // forgot password 
  forgotPasswod() {
    this.bsModalRef = this.modalService.show(ForgetPasswordComponent, {
    })
  }

}
