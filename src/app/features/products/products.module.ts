import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListProductsComponent } from './components/smart/list-products/list-products.component';
import { SingleProductComponent } from './components/smart/single-product/single-product.component';
import { ProductListCardComponent } from './components/ui/product-list-card/product-list-card.component';
import { LoadingComponent } from './components/ui/loading/loading.component';
import { ListProductsCardLoadingComponent } from './components/ui/list-products-card-loading/list-products-card-loading.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ListProductsComponent,
    SingleProductComponent,
    ProductListCardComponent,
    LoadingComponent,
    ListProductsCardLoadingComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
