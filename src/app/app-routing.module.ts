import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/authentication/auth.guard';

const routes: Routes = [{ path: 'features/home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
{ path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
{path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]},
{ path: 'user/profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule), canActivate: [AuthGuard]},
{ path: 'products', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule), canActivate: [AuthGuard] },
{ path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
