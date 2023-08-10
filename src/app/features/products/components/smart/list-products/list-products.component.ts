import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private _productServices: ProductService) {}

  ngOnInit(): void {
    this._productServices.getProducts().pipe(
      map((res) => res.data.products) // Assuming res.data is an array of products
    ).subscribe((data) => {
      this.products = data;
    });
  }


  addToCart(id: string){
    this._productServices.addToCart(id)
  }
}
