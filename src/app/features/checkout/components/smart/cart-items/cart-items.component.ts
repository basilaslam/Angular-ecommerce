import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartData, CartItem } from 'src/app/shared/models/cart.model';
import { CartService } from 'src/app/shared/services/cart.service';


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent{
  @Input() cart!: CartData
  @Input() cartItems!: CartItem[]
  @Output() checkoutEvent = new EventEmitter()



checkoutCart(){
  this.checkoutEvent.emit()
}

}
