import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Address } from '../../../../features/address/models/address.model';
import { User } from 'src/app/core/authentication/models/api.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css'],
})
export class AddressCardComponent  {
  @Input() address!: Address;
  @Input() selected!: boolean;
  @ViewChild('selectionTag', { static: true })
  divToSelect!: ElementRef<HTMLDivElement>;
  @Output() deleteAddressEvent = new EventEmitter<string>();

  user: User = JSON.parse(localStorage.getItem('_user') as string);
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  deleteAddress() {
    this.deleteAddressEvent.emit(this.address._id); // Emit the address to be deleted
  }

  editAddress() {
    this._router.navigate(['/profile/address/edit',this.address._id]);
  }

  select(selectionDiv: HTMLDivElement) {
    if (selectionDiv.classList) selectionDiv.classList.toggle('hidden');
  }
}
