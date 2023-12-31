import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authToken: string | null = null;
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuthenticatedUser()) {
      this.authService.getTokenObservable().subscribe((authToken) => {
        this.authToken = authToken;
      });


      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authToken}`,
        },
      });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}
