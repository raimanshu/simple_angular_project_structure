import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/core/service/auth.service';
import { MustMatch } from '../must-match.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  ChangePassword: FormGroup;
  submitted = false;
  loader: boolean = false;
  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.changePasswordFormInitialization();
  }

  changePasswordFormInitialization() {
    this.ChangePassword = this.fb.group({
      old_password: ['', Validators.required],
      new_password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    }, {
      validators: MustMatch('new_password', 'confirm_password')
    })
  }
  onChangePasswordForm() {
    this.submitted = true;
    console.log(this.ChangePassword.value);
    if (!this.ChangePassword.invalid) {
      let payload = {
        email: localStorage.getItem('email'),
        old_password: this.ChangePassword.value.old_password,
        new_password: this.ChangePassword.value.new_password
      }
      this.loader = true;
      this.authService.postChangePassword(payload).subscribe((res) => {
        console.log(res);
        this.loader = false;
        this.bsModalRef.hide();
        this.toastr.success("Password changed successfully.");
      }, (error) => {
        // this.toastr.error("Something went wrong.");
        this.loader = false;
        console.log(error);
      });
    }
  }

  get f() {
    return this.ChangePassword.controls;
  }
}
