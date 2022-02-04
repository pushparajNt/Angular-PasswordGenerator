import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../validate/match-password';
import { UniqueUsername } from '../validate/unique-username';
import * as Promise from "bluebird";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  authForm=new FormGroup({
    username : new FormControl('',[
     Validators.required,
     Validators.minLength(3),
     Validators.maxLength(20),
     Validators.pattern(/^[a-z0-9]+$/)      
    ],[this.UniqueUsername.validate]),
    password : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      this.matchPassword.validate    
     ]),
    passwordConfirmation : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20) ,
      this.matchPassword.validate
     ]) 
  });

  constructor(private matchPassword:MatchPassword,
    private UniqueUsername:UniqueUsername) { }

  ngOnInit(): void {
  }

}
