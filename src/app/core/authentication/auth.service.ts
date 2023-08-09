import { Injectable } from '@angular/core';
import { LoginModel, RegisterModel } from './models/auth.model';
import {HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginApiResponse, RegisterApiResponse, LoggedInUser } from './models/api.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private _httpClient: HttpClient, private _router: Router){}

  register(user: RegisterModel): Observable<RegisterApiResponse> {
    user.role = 'USER'
    return this._httpClient.post<RegisterApiResponse>(`${environment.URI}/users/register`, user)

  }

  login(user:LoginModel): Observable<LoginApiResponse>{
    return this._httpClient.post<LoginApiResponse>(`${environment.URI}/users/login`, user)
  }

  // Simulate user logout
  logout(): void {
    this.isAuthenticated = false;
  }

  getUser():  Observable<LoggedInUser>{
      return this._httpClient.get<LoggedInUser>(`${environment.URI}/users/current-user`)
  }


  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  signOutUser(){
    this._httpClient.post(`${environment.URI}/users/logout`,null,  { responseType: 'text' }).subscribe(()=>{
      localStorage.setItem('authToken', '')
      localStorage.setItem('refreashToken', '')
      localStorage.setItem('_user', '')
      this._router.navigate(['/'])
    })
  }


  // Check if the user is authenticated
  isAuthenticatedUser(): boolean {
    const access = localStorage.getItem('authToken')

    if(access) return true
    return false
  }
}
