import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';


  export function plateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
    const regexPlate = /^(([a-zA-Z]{3}\d{4})|([a-zA-Z]{3}\d[a-zA-Z]\d{2}))$/;
      const plate = regexPlate.test(control.value);
      return plate ? of(null) : of({invalidPlate: true});
    };
  }
