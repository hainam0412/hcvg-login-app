import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token:string = '';

  addToken(token:string):void{
    this.token = token;
  } 

  constructor() { }
}
