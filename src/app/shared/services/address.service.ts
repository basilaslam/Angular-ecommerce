import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressApiResponse } from 'src/app/features/address/models/address.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class AddressService {

  constructor(private _httpClient: HttpClient) { }

  private URI = `${environment.URI}/ecommerce/addresses` as const

  getAll(): Observable<AddressApiResponse>{
    return this._httpClient.get<AddressApiResponse>(`${this.URI}`);
  }
}
