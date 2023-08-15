import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Address } from '../../../../features/address/models/address.model';
import { User } from 'src/app/core/authentication/models/api.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit{
  @Input() address!: Address
  @Input() selected!: boolean
  @ViewChild('selectionTag', { static: true }) divToSelect!: ElementRef<HTMLDivElement>;
  @Output() deleteAddressEvent = new EventEmitter<string>();

  user: User = JSON.parse(localStorage.getItem('_user') as string)
  constructor(private _router: Router){}
  ngOnInit(){
    console.log('Address card component initialized', this.address);
  }


  deleteAddress(){
    this.deleteAddressEvent.emit(this.address._id); // Emit the address to be deleted
  }

  editAddress(){
    this._router.navigate([ `/user/address/edit/${this.address._id}`
  ])
  }


  select(selectionDiv: HTMLDivElement){

    if(selectionDiv.classList)
    selectionDiv.classList.toggle('hidden')
  }
}
