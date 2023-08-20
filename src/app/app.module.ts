import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxPayPalModule } from 'ngx-paypal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';
import { HotToastModule } from '@ngneat/hot-toast';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    EffectsModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgxPayPalModule,
    HotToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
