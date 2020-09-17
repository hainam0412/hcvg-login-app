import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { TokenService } from '../token.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  token:string;
  constructor(
    private tokenService:TokenService,
  ) { }

  ngOnInit(): void {
    this.getToken();
  }

  getToken():void{
    this.token = this.tokenService.token;
  }
  

}
