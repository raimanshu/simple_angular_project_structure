import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { EMAIL_REGEX } from '../shared/regexes';

/* export function ValidateEmail(control: AbstractControl): { [key: string]: Boolean } | null {

  // let regularExp = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;  
  let regularExp = EMAIL_REGEX;

  if (control.value !== undefined && !regularExp.test(control.value)) {
    return { "isValidEmail": true };
  }
  return null;
}
 */

export const ValidateEmail: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  let regularExp = EMAIL_REGEX;
  let cValue = control.value;
  cValue = (cValue || '').toString().trim();
  if (!cValue)
    return { required: true };

  return regularExp.test(cValue) ? null : {
    invalidEmail: true 
  };
    
  /* if (cValue !== undefined && !regularExp.test(cValue)) {
    return { invalidEmail : true };
  }
  return null; */

};



/* import { FormControl } from '@angular/forms';

function validateEmail(c: FormControl) {
  let EMAIL_REGEXP = ...

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
} */