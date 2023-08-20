import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ShowCartComponent } from './components/show-cart/show-cart.component';


@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    OrdersComponent,
    ShowCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
