import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class NotificationService {



  showError(errorMsg: string){
    console.log(errorMsg);

  }
}
