import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photoshow',
  templateUrl: './photoshow.component.html',
  styleUrls: ['./photoshow.component.css']
})
export class PhotoshowComponent implements OnInit {

photoUrl:string;  

  constructor(private photoService:PhotosService) { 
    
  }

  ngOnInit(): void {
  }

  onClick()
  {
    this.photoService.getRandomPhoto().subscribe((response)=>
    {
     console.log(response.urls.regular);
     this.photoUrl=response.urls.regular;
    });
  }
}
