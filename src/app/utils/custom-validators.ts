import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidators {
  static passedDateRequired(control:AbstractControl): ValidationErrors {
    if(Date.parse(control.value) > Date.now()) { //porownujemy date z kontrolki z data aktualna
      return;
    }

    return {
      passedDateRequired: true //jeseli validator zwraca obiekt znaczy ze jest blad, jak zwraca null to bledu nie ma
    }
  };
}
