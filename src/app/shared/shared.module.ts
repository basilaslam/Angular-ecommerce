import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressCardComponent } from './components/ui/address-card/address-card.component';
import { WindowService } from './services/widow.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AddressCardComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [AddressCardComponent],
  providers: [WindowService],
})
export class SharedModule {}
