import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';


@Component({
  selector: 'app-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrls: ['./product-list-card.component.css']
})
export class ProductListCardComponent {
  @Input() product!: Product
  @Output() addToCartEvent = new EventEmitter<string>()



  addToCart(id: string){
    this.addToCartEvent.emit(id)
  }
}
