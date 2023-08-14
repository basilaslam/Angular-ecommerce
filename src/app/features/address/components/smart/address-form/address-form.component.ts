import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and FormGroup
import { AddressService } from '../../../services/address.service';
import { Address } from '../../../models/address.model';


@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  addressForm!: FormGroup; // Declare a FormGroup
  id!: string
  @Input() mode!: 'add' | 'edit'
  constructor(
    private _activatedroute: ActivatedRoute,
    private _addressService: AddressService,
    private _formBuilder: FormBuilder, // Inject FormBuilder
    private _router: Router // Inject Router
  ) {}



  ngOnInit(): void {
    console.log(this.mode);

    if(this.mode == 'edit'){

      const id = this._activatedroute.snapshot.paramMap.get('id');
      id&&(this.id = id)


      id && this._addressService.getAddress(id).subscribe(data => {
        this.addressForm.patchValue(data.data); // Populate the form with data
      });
    }


    // Initialize the form using FormBuilder
    this.addressForm = this._formBuilder.group({
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pincode: ['', Validators.required]
      // Add more fields as needed
    });
  }

  updateAddress() {
    if (this.addressForm.valid) {
      const updatedAddress: Address = this.addressForm.value;
      // Perform the update logic
      console.log(updatedAddress);

      this._addressService.updateAddress(this.id, updatedAddress).subscribe(() => {
              this._router.navigate(['/user/address/list-all']);
      });
    }
  }

  handleSubmit(){
    console.log(this.mode);

    if(this.mode == 'add'){
      this.createAddress()
    }else if(this.mode == 'edit'){
      this.updateAddress()
    }
  }

  createAddress(){
    if (this.addressForm.valid) {
      const newAddress: Address = this.addressForm.value;
      // Perform the update logic
      console.log(newAddress);
      this._addressService.createAddress(newAddress).subscribe(() => {
              this._router.navigate(['/user/address/list-all']);
      });
    }
  }
}
