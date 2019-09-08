import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@ Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @ Input() parentFormGroup : FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
