import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { User, Token } from '@shared/models/user';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<Token>;
  public currentUser: Observable<Token>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.currentUserSubject  = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Token {
    return this.currentUserSubject.value;
  }

  login(identifier: string, password: string): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}/auth/local`, { identifier, password })
      .pipe(map(token => {
        // Guarda el token en el navegador
        localStorage.setItem('token', JSON.stringify(token));
        // Inserta el valor de user en el Observable
        this.currentUserSubject.next(token);
        //this.startRefreshTokenTimer();
        return token;
      }));
  }

  logout(): void {
    //this.http.post<Token>(`${environment.apiUrl}/auth/revoke-token`, {}).subscribe();
    //this.stopRefreshTokenTimer();
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  refreshToken(): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}/auth/refresh-token`, {})
      .pipe(map((token) => {
        this.currentUserSubject.next(token);
        this.startRefreshTokenTimer();
        return token;
      }));
  }

  // helper methods

  private refreshTokenTimeout;

  private startRefreshTokenTimer() {
      // parse json object from base64 encoded jwt token
      const jwtToken = JSON.parse(atob(this.currentUserValue.jwt.split('.')[1]));
      console.log(jwtToken);
      // iat: fecha de creación del token
      // exp: fecha de caducidad del token

      // set a timeout to refresh the token a minute before it expires
      const expires = new Date(jwtToken.exp * 1000);
      const timeout = expires.getTime() - Date.now() - (60 * 1000);
      this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  private stopRefreshTokenTimer() {
      clearTimeout(this.refreshTokenTimeout);
  }
}
