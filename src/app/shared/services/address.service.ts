import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Address, AddressApiResponse } from 'src/app/features/address/models/address.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'any'
})
export class AddressService {

  constructor(private _httpClient: HttpClient) { }

  private URI = `${environment.URI}/ecommerce/addresses` as const

  getAll(): Observable<Address[]>{
    return this._httpClient.get<AddressApiResponse>(`${this.URI}`).pipe(map(data => data.data.addresses))
  }
}
