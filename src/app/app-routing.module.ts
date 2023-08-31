import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/authentication/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [

{ path: 'features/home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
{ path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
{path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
{ path: 'profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard]},
{ path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule), canActivate: [AuthGuard] },
{ path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },
{ path: 'profile/address', loadChildren: () => import('./features/address/address.module').then(m => m.AddressModule) },
{ path: 'cart/checkout', loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule) },
{path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
