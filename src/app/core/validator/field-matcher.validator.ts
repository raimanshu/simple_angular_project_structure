import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export class MatchFieldValidator {
  // custom validator to check that two fields match
  static mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  static passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
    const passwordConfirm = c.get('password');
    const confirmControl = c.get('confirmPassword');

    if (passwordConfirm.pristine || confirmControl.pristine) {
      return null;
    }

    if (passwordConfirm.value === confirmControl.value) {
      return null;
    }
    return { match: true };
  }
}
