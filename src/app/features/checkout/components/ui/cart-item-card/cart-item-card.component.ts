import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-cart-item-card',
  templateUrl: './cart-item-card.component.html',
  styleUrls: ['./cart-item-card.component.css']
})
export class CartItemCardComponent {

  @Input() item!: CartItem



}
