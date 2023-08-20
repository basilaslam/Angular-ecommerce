import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'any'
})
export class NotificationService {

constructor(private _toast: HotToastService){}

  showError(errorMsg: string){
    this._toast.error(errorMsg)
  }
}
