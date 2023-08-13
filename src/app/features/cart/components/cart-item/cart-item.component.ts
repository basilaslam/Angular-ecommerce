import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item!: CartItem | undefined;


}
