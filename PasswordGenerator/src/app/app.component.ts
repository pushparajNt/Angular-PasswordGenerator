import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password='';
  checkUseLetters=false;
  checkUseNumbers=false;
  checkUseSymbols=false;
  passLength=0;
  generate()
  {
    let validChars='';
    let chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let numbers='0123456789';
    let specialChars="!#$%&'()*+,-./:;<=>?@[\]^_{|}~";
    console.log(`Generate password with the following:
                 includes letters:${this.checkUseLetters}
                 Includes Numbers:${this.checkUseNumbers}
                 Includes Symbols:${this.checkUseSymbols}`);
   if(this.checkUseLetters)
   {
     validChars+=chars;
   }
   if(this.checkUseNumbers)
   {
     validChars+=numbers;
   }
   if(this.checkUseSymbols)
   {
     validChars+=specialChars;
   }

   let generatePassword='';
   for(let i=0;i<this.passLength;i++)
   {
     generatePassword += validChars. charAt(Math. floor(Math. random() * validChars. length));
   }

     this.password=generatePassword;          
  }

  onChangePassLength(value:string)
  {
   
    if(!isNaN(Number(value)))
    {
        this.passLength=Number(value);
        console.log(this.passLength);
        console.log(typeof(this.passLength));
    }

  }

  useLetters()
  {
    this.checkUseLetters=!this.checkUseLetters;
  }
  useNumbers()
  {
    this.checkUseNumbers=!this.checkUseNumbers;
  }
  useSymbols()
  {
    this.checkUseSymbols=!this.checkUseSymbols;
  }
}
