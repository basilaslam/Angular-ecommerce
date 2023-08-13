import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvatarComponent } from './components/navbar/components/avatar/avatar.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CartComponent } from './components/navbar/components/cart/cart.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [NavbarComponent, FooterComponent],
  providers: [Router, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }]
})
export class CoreModule { }
