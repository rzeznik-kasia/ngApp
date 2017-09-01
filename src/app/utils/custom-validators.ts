import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustorValidators {
  static passedDateRequired(contorl:AbstractControl): ValidationErrors {
    return {
      passedDateRequired: true
    }
  };
}
