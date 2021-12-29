import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {


  data=[
    {name:'Pushparaj',age:27,job:'Software Developer'},
    {name:'Elayarasu',age:27,job:'Chemical Engineer'},
    {name:'Govindaraj',age:27,job:'Businessman'},
    {name:'Vasundara',age:27,job:'Tester'},
    {name:'Rinciya',age:27,job:'Software Developer'}
  ];

  headers=[
    {key:'name',label:'Name'},
    {key:'age',label:'Age'},
    {key:'job',label:'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
