import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  term='';
  constructor() { }

  ngOnInit(): void {
  }

  OnInput(value:string)
  {
    this.term=value;
    console.log(this.term);
  }
  OnFormSubmit(event:any)
  {
    console.log(event);
    event.preventDefault();

  }
}
