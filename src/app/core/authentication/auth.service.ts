/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { LoginModel, RegisterModel } from './models/auth.model';
import { LoginApiResponse, RegisterApiResponse, LoggedInUser, User } from './models/api.model';
import { SubSink } from 'subsink';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  subs = new SubSink()

  private userSubject = new BehaviorSubject<User | null>(null)
  private tokenSubject = new BehaviorSubject<string | null>(null)
  constructor(
    private _httpClient: HttpClient,
    private _router: Router,

    ){
      this.initAuthStatus()
    }



  initAuthStatus(){
    const user = localStorage.getItem('_user')
    if(user){
      this.tokenSubject.next(this.getAuthToken())
      this.userSubject.next(JSON.parse( user))
    }
  }

  register(user: RegisterModel): Observable<RegisterApiResponse> {
    user.role = 'USER'
   return this._httpClient.post<RegisterApiResponse>(`${environment.URI}/users/register`, user)
  }

  login(user:LoginModel): Observable<LoginApiResponse>{
    return this._httpClient.post<LoginApiResponse>(`${environment.URI}/users/login`, user)
  }


  saveData({data}: LoginApiResponse){
    localStorage.setItem('_user', JSON.stringify(data.user))
    this.userSubject.next(data.user)
    localStorage.setItem('authToken', data.accessToken)
    this.tokenSubject.next(data.accessToken)
    localStorage.setItem('refreashToken', data.refreshToken)
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

      this.tokenSubject.next(null)
      this.tokenSubject.next(null)
      this._router.navigate(['/'])
    })
  }


  // Check if the user is authenticated
  isAuthenticatedUser(): Observable<boolean> {
    return this.getTokenObservable().pipe(
      map((authToken) => !!authToken)
    );
  }

  getAuthInfo(){
    const auth = localStorage.getItem('authToken')
   if(auth){
      return true
    }else{
      return false
    }
  }


  getUserObservable(): Observable<User | null> {
    return this.userSubject.asObservable()
  }
  getTokenObservable(): Observable<string | null> {
    return this.tokenSubject.asObservable()
  }


}
