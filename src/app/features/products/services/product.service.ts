import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AllProductsResponseModel, SingleProductsResponseModel } from '../models/apiResponseModel.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URI : string
  constructor(private _httpClient: HttpClient) {
    this.URI = environment.URI
  }


  getProduct(id: string) : Observable<SingleProductsResponseModel>{
    return this._httpClient.get<SingleProductsResponseModel>(`${this.URI}/ecommerce/products/${id}`)
  }

  getProducts():Observable<AllProductsResponseModel>{
    return this._httpClient.get<AllProductsResponseModel>(`${this.URI}/ecommerce/products?page=1&limit=10`)
  }

}
