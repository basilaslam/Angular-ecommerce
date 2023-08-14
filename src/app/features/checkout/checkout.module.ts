import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { MainCheckoutComponent } from './components/smart/main-checkout/main-checkout.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    MainCheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
