import { Component, OnInit } from '@angular/core';
import * as deepEqual from 'deep-equal';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CheckNameExistsService } from '../app/shared/check-name-exists';
import {validateReviewerName} from '../app/shared/user-name.validator';

@ Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  a = {a:1, b:'abhi', 0:true, 1:false, arr:['ram', 'abhi']};
  b = {a:1, b:'abhi', 0:true, 1:false, arr:['ram', 'abhi']};

  title = deepEqual(this .a, this .b);
  myForm: FormGroup;
  usersObject: any;

  constructor(private fb: FormBuilder, private httpClient: HttpClient,
    private checkName: CheckNameExistsService) {  }

  ngOnInit() {

    this .myForm = this .fb.group({
      firstName : ['', [Validators.required, Validators.minLength(3), ]],
      // validateReviewerName.createValidator(this .checkName)
      lastName: ['', Validators.required],
      myName: ['', Validators.required],
        houseNo: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        sName: ['', Validators.required]
    });
  }

  loadData() {
    this .myForm.patchValue({firstName: "Abhiram", lastName: "Pasumarthy",
    myName: "Abhiram Pasumarthy", houseNo: "105", city: "Hyderabad", state: "Telangana"});
  }

}
