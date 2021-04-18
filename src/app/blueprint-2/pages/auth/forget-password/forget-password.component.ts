import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { RoutePath } from 'src/app/core/config';
import { AuthService } from 'src/app/core/service/auth.service';
import { ForgotPassword, Respose } from 'src/app/core/shared/typings/app.typings';
import { ValidateEmail } from 'src/app/core/validator/email.validator';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {
  forgotPassword: FormGroup;
  sub: boolean = false;
  loader:boolean = false;


  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.ForgetformIntialization();
  }

  ForgetformIntialization() {
    this.forgotPassword = this.fb.group({
      email: ['', [Validators.required, ValidateEmail]],
    })
  }

  get f() {
    return this.forgotPassword.controls;
  }

  onForgotForm() {
    this.sub = true;
    if (this.forgotPassword.invalid) {
      return
    }
    const payload: ForgotPassword = this.forgotPassword.value;
    this.forgotUser(payload);
  }

  forgotUser(user){
    console.log(user)
    this.loader = true;

    this.authService.postForgot(user).pipe(
      finalize(() => {
        this.loader = false;
      }),
    ).subscribe((res: Respose) => {
      if(res.status){
        this.toastr.success(res.message)
        console.log(res);
        this.bsModalRef.hide();
        this.router.navigate([RoutePath.auth + '/' + RoutePath.login]);
      }
    },error => {
      console.log("Server Error")
      const ms = error.error
      const message = ms.message;
      this.toastr.error(message);
    })
  }

  ngOnDestroy(){
    this.forgotPassword.patchValue({
      email:'',
    })
  }

}
