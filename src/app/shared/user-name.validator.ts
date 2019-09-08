import { AbstractControl, ValidatorFn } from '@angular/forms';
import { CheckNameExistsService } from '../shared/check-name-exists';

export class validateReviewerName {
 static createValidator(checkNameExistsService: CheckNameExistsService) {
    return (control: AbstractControl): {[key: string]: any} | null => {
        console.log(checkNameExistsService.checkNameExists(control.value));
        return checkNameExistsService.checkNameExists(control.value) === true ? null : { nameNotExists: true};
        };
        }
        }
