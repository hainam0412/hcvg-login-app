import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: User[];
  token:string;
  name:string="";
  password:string="";

  constructor(
    private loginService: LoginService,
    private router:Router,
    private tokenService:TokenService
  ) { }

  ngOnInit(): void {
  }

  loginUser(name: string, password: string): void {
    name = name.trim();

    if(!name || !password){
      alert('Name of Password must not be blank');
      return;
    }

    const userInfo: User = new User();
    
    userInfo.username = name;
    userInfo.password = password;

    this.loginService.postUser(userInfo).subscribe((data) => {
      if(!data){
        alert('wrong username or password')       
      }else{
        this.token = data.token;
        this.tokenService.addToken(this.token);
        this.router.navigate(['/HomepageComponent']);
      }
    },(err: HttpErrorResponse)=> {
      
    })
  }

}
