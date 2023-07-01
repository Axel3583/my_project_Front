import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private readonly API_LOGIN = 'http://localhost:8080/user/login';
  private readonly API_REGISTER = 'http://localhost:8080/user/register';

  constructor(private http: HttpClient, private router: Router) { }

  // Login methode
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.API_LOGIN, { email: username, password })
      .pipe(
        catchError(error => {
          console.error('Error during login:', error);
          throw error;
        })
      );
  }

  // Register methode
  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.API_REGISTER, { email: username, password })
      .pipe(
        catchError(error => {
          console.error('Error during registration:', error);
          throw error;
        })
      );
  }

  // SignOut
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
