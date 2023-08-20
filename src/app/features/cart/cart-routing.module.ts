import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { ShowCartComponent } from './components/show-cart/show-cart.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [{ path: '', component: CartComponent, children:[
  {path: '', component: ShowCartComponent},
  {path: 'orders', component: OrdersComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
