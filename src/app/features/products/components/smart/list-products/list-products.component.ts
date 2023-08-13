import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private _productServices: ProductService, private _cartService:CartService) {}

  ngOnInit(): void {
    this._productServices.getProducts().pipe(
      map((res) => res.data.products)
    ).subscribe((data) => {
      this.products = data;
    });
  }


  addToCart(id: string){

    this._cartService.addToCart(id)
  }
}
