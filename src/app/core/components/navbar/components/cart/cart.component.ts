import { Component, OnInit, effect, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CartService } from 'src/app/shared/services/cart.service';
import { CartState } from 'src/app/shared/store/cart/cart.reducer';
import { selectCartTotal } from 'src/app/shared/store/cart/cart.selectors';
import { CartData } from '../../../../../shared/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  cartTotal = 0


  constructor(private _cartService: CartService){
    effect(()=>{
      this.cartTotal = this._cartService.cartTotal()

    })
  }

}
