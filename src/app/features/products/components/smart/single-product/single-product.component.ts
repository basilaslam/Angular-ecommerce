import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product, SubImage } from '../../../../../shared/models/product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit{
  product!: Product
  isLoading = true
  isStock = true

  images : SubImage[] = []
  constructor(private _productService: ProductService, private _Activatedroute:ActivatedRoute){}



  ngOnInit(){
    const id = this._Activatedroute.snapshot.paramMap.get('id');
    id&&this._productService.getProduct(id).subscribe((data) => {
      this.product = data.data
      this.isLoading = false
      this.images = this.product.subImages
      if(!this.product.stock){
        this.isStock =  false
      }
    })

     }


}
