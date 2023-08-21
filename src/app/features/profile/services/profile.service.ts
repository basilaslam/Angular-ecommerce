import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Profile, ProfileApiResponse } from '../modals/profileApiResponse';

@Injectable({
  providedIn: 'any'
})
export class ProfileService {

    URI = `${environment.URI}/ecommerce/profile`
  constructor(private _httpClient: HttpClient) { }



  getProfile() :Observable<ProfileApiResponse>{
    return this._httpClient.get<ProfileApiResponse>(this.URI)
  }
  updateProfile(form: any) :Observable<ProfileApiResponse>{
    return this._httpClient.patch<ProfileApiResponse>(this.URI, form)
  }
}



