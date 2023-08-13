import { Component, effect } from '@angular/core';
import {  CartData, CartItem } from 'src/app/shared/models/cart.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  data: CartData | null = null
  items: CartItem[]  | undefined;
  isEmpty = true
  constructor(private _cartService: CartService){
    effect(()=>{
      this.data = this._cartService.cart()
      this.items = this.data?.items
    })
  }

  clearCart(){
    this._cartService.clearCart()
  }

  removeItem(id: string){
   this._cartService.removeItem(id).subscribe((data)=>{
    if(data.success){
      this._cartService.refreashCart()
    }
   })
  }


  decreaseQuantity(id: string, quantity: number){
    this._cartService.updateQuantity(id, quantity-1)
  }

  increaseQuantity(id: string, quantity: number){
    console.log('countIncresed', id);
    this._cartService.updateQuantity(id, quantity+1)

  }

  }


