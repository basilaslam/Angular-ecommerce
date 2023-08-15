import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { MainCheckoutComponent } from './components/smart/main-checkout/main-checkout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartItemsComponent } from './components/smart/cart-items/cart-items.component';
import { CartItemCardComponent } from './components/ui/cart-item-card/cart-item-card.component';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    CheckoutComponent,
    MainCheckoutComponent,
    CartItemsComponent,
    CartItemCardComponent,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule,
  ]
})
export class CheckoutModule { }
