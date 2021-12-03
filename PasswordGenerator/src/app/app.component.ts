import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = '';
  checkUseLetters=false;
  checkUseNumbers=false;
  checkUseSymbols=false;
  passLength=0;
  generate()
  {
    this.title="Pushparaj";
    console.log(`Generate password with the following:
                 includes letters:${this.checkUseLetters}
                 Includes Numbers:${this.checkUseNumbers}
                 Includes Symbols:${this.checkUseSymbols}`);
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
