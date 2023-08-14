import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { AddressCardComponent } from './components/ui/address-card/address-card.component';
import { AddressFormComponent } from './components/smart/address-form/address-form.component';
import { ListAllAddressComponent } from './components/smart/list-all-address/list-all-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAddressComponent } from './components/smart/add-address/add-address.component';
import { EditAddressComponent } from './components/smart/edit-address/edit-address.component';


@NgModule({
  declarations: [
    AddressComponent,
    AddressCardComponent,
    AddressFormComponent,
    ListAllAddressComponent,
    AddAddressComponent,
    EditAddressComponent,
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddressModule { }
