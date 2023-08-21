import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CartApiResponse, CartData } from '../models/cart.model';
import {  Observable } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private URI = environment.URI


  constructor(private _httpClient: HttpClient, private _toast: HotToastService) {
    this.fetchCartData();
  }
  public cart = signal<CartData | null>(null)
  public cartTotal = signal<number>(0)

  private fetchCartData() {
    this._httpClient.get<CartApiResponse>(`${this.URI}/ecommerce/cart`).subscribe(
      (data) => {
        this.cart.set(data.data)
        this.cartTotal.set(data.data.items.length)
      },
      (error) => {
        console.error('An error occurred while fetching cart data:', error);
      }
    );
  }

  getCart(): Observable<CartApiResponse>{
    return this._httpClient.get<CartApiResponse>(`${this.URI}/ecommerce/cart`)
  }

  updateQuantity(id: string, quantity: number){
    this._httpClient.post<CartApiResponse>(`${this.URI}/ecommerce/cart/item/${id}`, { quantity }).subscribe((data)=>{
      this.cart.set(data.data)
     })
  }


  addToCart(id: string){

    const isExist = this.cart()?.items.find(item => item.product._id == id)

    if(!isExist){
      this._httpClient.post<CartApiResponse>(`${this.URI}/ecommerce/cart/item/${id}`, { quantity: 1}).subscribe((data)=>{
        this._toast.success('🛒 item added to cart',{duration: 1000 })
        this.cart.set(data.data)
        this.cartTotal.update( val => val + 1)
       })
    }else{
      this._toast.error('🛒 item aleady exist in cart',{duration: 1000 })
    }

  }

  removeItem(id: string): Observable<CartApiResponse>{
      return this._httpClient.delete<CartApiResponse>(`${this.URI}/ecommerce/cart/item/${id}`)
  }


  clearCart() {
    this._httpClient.delete<CartApiResponse>(`${this.URI}/ecommerce/cart/clear`).subscribe((data)=>{
      if(data.success){
        this.fetchCartData()
      }
    })
  }


  refreashCart(){
     this.fetchCartData();
  }



}
