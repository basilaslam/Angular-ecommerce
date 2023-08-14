import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { Address, AddressApiResponse, SignleAddressApiResponse } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private _httpClient: HttpClient) {
  }

  private URI = `${environment.URI}/ecommerce/addresses` as const

  getAll(): Observable<AddressApiResponse>{
    return this._httpClient.get<AddressApiResponse>(`${this.URI}`);
  }

  getAddress(id: string): Observable<SignleAddressApiResponse>{
    return this._httpClient.get<SignleAddressApiResponse>(`${this.URI}/${id}`)
  }

  updateAddress(id: string, address: Address): Observable<SignleAddressApiResponse>{
    return this._httpClient.patch<SignleAddressApiResponse>(`${this.URI}/${id}`, address)
  }

  deleteAddress(id: string): Observable<Address[]>{
    return this._httpClient.delete<AddressApiResponse>(`${this.URI}/${id}`).pipe(map(data => data.data.addresses))
  }

  createAddress( address: Address): Observable<Address>{
    console.log(address, 'adfsdf');

    return this._httpClient.post<SignleAddressApiResponse>(this.URI, address).pipe(map(data => data.data))
  }
}
