import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse{
  urls :{
    regular:string
  }
}


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient:HttpClient) { }

  getRandomPhoto()
  {

    return this.httpClient.get<UnsplashResponse>('https://api.unsplash.com/photos/random',{
    headers : {
      Authorization: 'Client-ID JO0Z4vvic3Fofb9GlDKY5J-7Z_Gl7nHBEuAUoa-q2uE'
    }})
  }
}
