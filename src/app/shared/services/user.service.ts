import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }

  getProfile(){
    return this._httpClient.get(`${environment.URI}/ecommerce/profile`);
  }
}
