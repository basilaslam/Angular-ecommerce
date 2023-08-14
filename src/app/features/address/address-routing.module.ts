import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address.component';
import { ListAllAddressComponent } from './components/smart/list-all-address/list-all-address.component';
import { EditAddressComponent } from './components/smart/edit-address/edit-address.component';
import { AddAddressComponent } from './components/smart/add-address/add-address.component';

const routes: Routes = [{ path: '', component: AddressComponent, children: [
  {path: '', redirectTo: 'address/list-all', pathMatch: 'full'},
  {path: 'list-all', component: ListAllAddressComponent },
  {path: 'edit/:id', component: EditAddressComponent},
  {path: 'add', component: AddAddressComponent},
  {path: '**', redirectTo: 'address/list-all'},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
