import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product, SubImage } from '../../../../../shared/models/product.model';
import { SubSink } from 'subsink';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit, OnDestroy{
  subs = new SubSink()

  product!: Product
  isLoading = true
  isStock = true
  images : SubImage[] = []
  constructor(private _productService: ProductService, private _Activatedroute:ActivatedRoute, private _cartService: CartService){}



  ngOnInit(){
    const id = this._Activatedroute.snapshot.paramMap.get('id');
    id&&this.subs.add(this._productService.getProduct(id).subscribe((data) => {
      this.product = data.data
      this.images = this.product.subImages

      setTimeout(()=>{
              this.isLoading = false

      },1000)
      if(!this.product.stock){
        this.isStock =  false
      }

    }))
     }



     addToCart(){
      this._cartService.addToCart(this.product._id)
    }

     ngOnDestroy(): void {
         this.subs.unsubscribe()
     }


}

