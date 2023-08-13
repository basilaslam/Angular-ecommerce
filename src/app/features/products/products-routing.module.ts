import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ListProductsComponent } from './components/smart/list-products/list-products.component';
import { SingleProductComponent } from './components/smart/single-product/single-product.component';

const routes: Routes = [{ path: '', component: ProductsComponent, children: [
  {path:'list-all', component: ListProductsComponent},
  {path:'product/:id', component: SingleProductComponent},
  {path: '', redirectTo: '/products/list-all', pathMatch: 'full'},
  { path: '**', redirectTo: '/products/list-all' }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
