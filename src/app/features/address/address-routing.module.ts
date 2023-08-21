import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address.component';
import { ListAllAddressComponent } from './components/smart/list-all-address/list-all-address.component';
import { EditAddressComponent } from './components/smart/edit-address/edit-address.component';
import { AddAddressComponent } from './components/smart/add-address/add-address.component';

// Define the routes for the AddressModule
const routes: Routes = [
  {
    // Main component for the address module
    path: '', // Empty path, because this is the default component for the module
    component: AddressComponent,
    children: [
      {
        // Child routes for the AddressComponent
        path: '', // Empty path, which will redirect to list-all
        redirectTo: 'list-all', // Redirect to the list-all component
        pathMatch: 'full', // Redirect only when the path is exactly empty
      },
      {
        // Route for listing all addresses
        path: 'list-all',
        component: ListAllAddressComponent,
      },
      {
        // Route for editing an address
        path: 'edit/:id', // Example: /address/edit/123
        component: EditAddressComponent,
      },
      {
        // Route for adding a new address
        path: 'add',
        component: AddAddressComponent,
      },
      {
        // Catch-all route, redirects to list-all for unknown paths
        path: '**',
        redirectTo: 'list-all',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Import RouterModule with the defined routes
  exports: [RouterModule], // Export RouterModule for use in the AddressModule
})
export class AddressRoutingModule {}
