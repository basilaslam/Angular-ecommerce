import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/authentication/auth.guard';

const routes: Routes = [{ path: 'features/home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
{ path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
{path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
