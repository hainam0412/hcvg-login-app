import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private apiUrl = 'https://hvcg-tm.herokuapp.com/security/login';

  /**
   * POST METHOD
   */
  postUser(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}`, JSON.stringify(user), httpOptions).pipe(
      tap(),
      catchError(err => of(console.log(err)))
    )
  }

  /**
   * Get Token
   */
  


  constructor(
    private http: HttpClient,
    
  ) { }

}
