import { Injectable, NgZone } from '@angular/core';

import { tap, map, catchError } from 'rxjs/operators'


import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { LoginForm } from './login-form.interface';
import { Router } from '@angular/router';
import { users } from '../../models/users';



// const base_url = environment.base_url;

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url_api = 'http://localhost:3000/api/login'




  constructor( private http:HttpClient, private router: Router,
    private ngZone: NgZone) {
  }

  public user: users = new users;


  url = 'http://localhost:3000/api/newuser';

  public auth2: any;

  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${this.url_api}/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {

        const {_id ,name, lastname, email,
          password, role  } = resp.usLog;

        this.user = new users(  _id,
          name, lastname, email, '', role
        );



        localStorage.setItem('token', resp.token)
    }),
    map( resp => true),
    catchError( error  => of(false) )
    );

  }


  login( formData: LoginForm ): Observable<any> {
    console.log(formData);
    return this.http.post(this.url_api, formData)
          .pipe(
            tap( (resp: any) => {
              localStorage.setItem('token', resp.token)
            } )
          )
  }

  

  logout() {
    localStorage.removeItem('token');
    this.auth2.signOut().then( () => {

      this.ngZone.run(() => {
        this.router.navigateByUrl('/sesion');

      } )
    });
  }


  Newregister( user : users ): Observable<any>{
    return this.http.post(this.url, user);
  }


}
