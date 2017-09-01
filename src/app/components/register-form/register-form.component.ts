import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustorValidators} from "../../utils/custor-validators";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required), //wyswietla sie joe w polu
      birthDate: new FormControl('', CustorValidators.passedDateRequired)
    })
  }

  ngOnInit() {
  }

}
