import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatchPassword } from './validate/match-password';
import { UniqueUsername } from './validate/unique-username';
import { AuthService } from './auth.service';
import { InputComponent } from '../shared/input/input.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  exports:[
    SignInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
