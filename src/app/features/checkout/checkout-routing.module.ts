import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { MainCheckoutComponent } from './components/smart/main-checkout/main-checkout.component';

const routes: Routes = [{ path: '', component: CheckoutComponent, children: [
  {path: '', component: MainCheckoutComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
