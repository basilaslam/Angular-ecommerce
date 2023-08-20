import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressCardComponent } from './components/ui/address-card/address-card.component';
import { WindowService } from './services/widow.service';



@NgModule({
  declarations: [
    AddressCardComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddressCardComponent
  ],
  providers: [WindowService]

})
export class SharedModule { }
