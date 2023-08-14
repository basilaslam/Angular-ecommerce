import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../../services/address.service';
import { Address } from '../../../models/address.model';

@Component({
  selector: 'app-list-all-address',
  templateUrl: './list-all-address.component.html',
  styleUrls: ['./list-all-address.component.css']
})
export class ListAllAddressComponent implements OnInit{
  addresses : Address[] = []

  constructor(private _addressService: AddressService) {

  }


  ngOnInit(){
    this._addressService.getAll().subscribe((data)=>{
      this.addresses = data.data.addresses
    })
  }


  deleteAddress(id: string){
    this._addressService.deleteAddress(id).subscribe((data)=>{
      this.addresses = data
      console.log(this.addresses)
    })
  }

}
