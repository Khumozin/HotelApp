import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare const M: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initModal();
    this.generateSignInForm();
  }

  initModal() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {
      preventScrolling: true
    });
  }

  generateSignInForm() {
    this.signInForm = new FormGroup({
      'Email': new FormControl(null, Validators.required),
      'Password': new FormControl(null, Validators.required)
    })
  }

  onSignIn() {
    console.log(this.signInForm.value);
  }

}
