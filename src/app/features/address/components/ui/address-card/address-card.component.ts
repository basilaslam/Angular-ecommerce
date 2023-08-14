import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Address } from '../../../models/address.model';
import { User } from 'src/app/core/authentication/models/api.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit{
  @Input() address!: Address
  @Output() deleteAddressEvent = new EventEmitter<string>(); // New output event
  user: User = JSON.parse(localStorage.getItem('_user') as string)
  ngOnInit(){
    console.log('Address card component initialized', this.address);
  }


  deleteAddress(){
    this.deleteAddressEvent.emit(this.address._id); // Emit the address to be deleted

  }
}
