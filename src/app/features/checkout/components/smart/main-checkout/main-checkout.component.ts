import { Component, OnInit } from '@angular/core';

import { AddressService } from '../../../../../shared/services/address.service';
import { Address } from 'src/app/features/address/models/address.model';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';
import { CartData } from 'src/app/shared/models/cart.model';
import { PaymentService } from '../../../services/payment.service';
import { WindowService } from '../../../../../shared/services/widow.service'
import { RazorpayApiData, RazorpaySuccessResponse } from '../../../models/razorpay.model';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/core/authentication/models/api.model';

@Component({
  selector: 'app-main-checkout',
  templateUrl: './main-checkout.component.html',
  styleUrls: ['./main-checkout.component.css']
})
export class MainCheckoutComponent implements OnInit{
  cart!: CartData
  addresses!: Address[]
  selectedAddresses: { [key: string]: boolean } = {};
  showSuccess!: boolean;
  user: User = JSON.parse(localStorage.getItem('_user') as string)

constructor(
  private _address: AddressService,
  private _router: Router,
  private _cartService: CartService,
  private _paymentService: PaymentService,
  private _winRef: WindowService,
  ){}
  ngOnInit(): void {
    this._cartService.getCart().subscribe(data => {
      if(data.data.items.length <= 0){
        this.redirectToProducts()
      }
    this.cart = data.data

    })

    this._address.getAll().subscribe(data => {
      this.addresses = data
      this.initializeSelectedAddresses();
    })
  }


  initializeSelectedAddresses() {
    for (const address of this.addresses) {
      this.selectedAddresses[address._id] = false;
    }
  }

  deleteAddress(id: string){
    this._router.navigate(['/user/address/list-all'])
  }


  selectAddress(address: Address) {
    this.initializeSelectedAddresses()
    this.selectedAddresses[address._id] = !this.selectedAddresses[address._id];
    console.log('selected..');
  }

  private findSelectedAddress(): string | undefined {
    for (const addressId in this.selectedAddresses) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.selectedAddresses.hasOwnProperty(addressId) && this.selectedAddresses[addressId]) {
        return addressId; // Return the addressId where the value is true
      }
    }
    return undefined; // Return undefined if no selected address found
  }

  checkoutCart(){
    const selectedAddressId = this.findSelectedAddress();
    if (!selectedAddressId) {
      console.log('no address selected');
      return
  }






    // this._paymentService.createPaypalOrderInstance(selectedAddressId).subscribe((data => console.log(data)))
    this._paymentService.createRazorpayOrderInstance(selectedAddressId).subscribe((data => {

    this.initPayRazorpay(data)

    }

))
  }


  initPayRazorpay(data: RazorpayApiData) {

    const responsHandler = (data: RazorpaySuccessResponse) => {
      this._paymentService.verifyRazorpayPayment(data).subscribe(data => {
        if(data.success){
          this.redirectToProducts()
        }
      })
      }


  const options = {
    "key": environment.RAZORPAY_Id, // Enter the Key ID generated from the Dashboard
    "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Float Store", //your business name
    "description": "Complete payment to place your order",
    "image": "https://floatui.com/_next/static/media/logo-dark.b0d0c4d1.svg",
    "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": responsHandler,
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": this.user.username, //your customer's name
        "email": this.user.email,
        "phone":"9446001964"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
    };

      // Add other options as needed
    const rzp1 = new this._winRef.nativeWindow.Razorpay(options);
    rzp1.on('payment.success', (response: any) => {
      // Handle success
      console.log('Payment successful', response);
    });
    rzp1.on('payment.error', (response: any) => {
      // Handle error
      console.log('Payment error', response);
    });

    rzp1.open();

  }


  redirectToProducts(){
    this._router.navigate(["/products/list-all"])
  }


}
