import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressesComponent } from './addresses.component';
import { AddressCardComponent } from './components/ui/address-card/address-card.component';


@NgModule({
  declarations: [
    AddressesComponent,
    AddressCardComponent
  ],
  imports: [
    CommonModule,
    AddressesRoutingModule
  ]
})
export class AddressesModule { }
