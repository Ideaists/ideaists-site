import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { $ } from 'protractor';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  form: FormGroup;
  
    constructor(
      private _fb: FormBuilder,
      private _afAuth: AngularFireAuth,
      private _afDb: AngularFireDatabase,
    ) {
      this.buildForm();
    }
  
    buildForm() {
      this.form = this._fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        message: ['', Validators.required]
      });
    }
  
    onFormSubmit() {
      const {name, email, phone, message} = this.form.value;
      const date = Date();
      const html = `
        <div>From: ${name}</div>
        <div>Email: <a href="mailto:${email}">${email}</a></div>
        <div>Date: ${date}</div>
        <div>Message: ${message}</div>
      `;
  
      let formRequest = { name, email, message, date, html };
  
      this._afDb.list('/messages').push(formRequest);
      this.form.reset();
    }
  }

function newFunction() {
    ` var edgeOffset = 42 // px
zenscroll.setup(defaultDuration, edgeOffset)`;
}



