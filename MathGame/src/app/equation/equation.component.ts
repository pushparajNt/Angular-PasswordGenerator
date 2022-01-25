import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from '../math-validators';
import { delay, filter } from 'rxjs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

 secondsPersolution=0;
  mathForm=new FormGroup({
    a:new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl(''),
  },
  [
    MathValidators.addition
  ])

  constructor() { }

  ngOnInit(): void {


    const startTime=new Date();
    let numberSolved=0;
    this.mathForm.statusChanges.
    pipe(
    delay(100)
    ).subscribe((value)=>{
      console.log(value);

      this.secondsPersolution=(new Date().getTime()-startTime.getTime())/1000;

      if(value==='INVALID')
      {
        return;
      }
     
      this.mathForm.setValue({
        a:this.randomNumber(),
        b:this.randomNumber(),
        answer: ''
      });

    });
  }

randomNumber()
{
  return Math.floor(Math.random() * 10) ;
}

get a()
{
  return this.mathForm.value.a;
}
get b()
{
 return this.mathForm.value.b;  
}

}
