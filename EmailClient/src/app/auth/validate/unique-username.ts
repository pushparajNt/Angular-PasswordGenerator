import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, FormControl, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { AuthService } from "../auth.service";


@Injectable({providedIn:'root'})
export class UniqueUsername implements AsyncValidator {

    constructor(private myHttp:HttpClient,private authService:AuthService){}
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.authService.userNameAvailable(control.value).pipe(map(value=>{
                if(value.available){
                    console.log(value);
                    return null;
                }
              return null;
            }),
            catchError(err=>{
                console.log(err);
                return of({nonUniqueUsername:true})
            }))
    }
    // validate=(control:FormControl)=>{
    //     const{value}=control;
    //     return this.http.post<any>('https://api.angular-email/auth/username',{
    //        username:value})
    // }.
    
    }


