import { AbstractControl } from "@angular/forms";

export class CustomValidators {
  public static validateNumber(control: AbstractControl) {
  	    if (control.value.length > 4 ) {
                 return null
	    } else {
                  alert("Menor");
            return {'valid': true };
	    }
  }
} 