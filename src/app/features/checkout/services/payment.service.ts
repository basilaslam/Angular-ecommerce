import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaypalApiResponse, PaypalResponseData } from '../models/paypal.model';
import { RazorpayApiData, RazorpayApiResponse, RazorpaySuccessResponse } from '../models/razorpay.model';
import { SuccessRazorpayData, SuccessRazorpayPayment } from '../models/paymentResponse.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

    private url = `${environment.URI}/ecommerce/orders`;

    constructor(private http: HttpClient) { }

    createPaypalOrderInstance(addressId: string): Observable<PaypalResponseData>{
      return this.http.post<PaypalApiResponse>(`${this.url}/provider/paypal`,{addressId}).pipe(map(data => data.data))
    }
    createRazorpayOrderInstance(addressId: string): Observable<RazorpayApiData>{
      return this.http.post<RazorpayApiResponse>(`${this.url}/provider/razorpay`,{addressId}).pipe(map(data => data.data))
    }

    verifyRazorpayPayment(data:RazorpaySuccessResponse):Observable<SuccessRazorpayPayment>{
      return this.http.post<SuccessRazorpayPayment>(`${this.url}/provider/razorpay/verify-payment`, data)
    }
  }
