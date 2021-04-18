import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoWhitespaceValidator } from 'src/app/core/validator/no-whitespace.validator';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  paymentCardForm:FormGroup;
  sub:boolean = false;
  constructor(
private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.spaceremove();
  }
  spaceremove(){
  var demo = "my name is sarwan kumar"
console.log(demo.replace(/\s/g, ''))
}

  initializeForm(){
    this.paymentCardForm = this.fb.group({
      cardNumber: ['', [Validators.required]],
      cardholderName: ['', [Validators.required, Validators.minLength(1)]],
    })
  }

  get f(){
    return this.paymentCardForm.controls;
  }
  onSubmitForm(){
    this.sub = true;
    if (this.paymentCardForm.invalid) {
      return
    }
    console.log(this.paymentCardForm.value)
    // const payload: ILoginUser = this.logininfo.value;
    // this.loginUser(payload);
  }


}
