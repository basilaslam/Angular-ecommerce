import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/ui/hero/hero.component';
import { BrandsComponent } from './components/ui/brands/brands.component';
import { TopCollectionsComponent } from './components/smart/top-collections/top-collections.component';
import { SaleBannerComponent } from './components/ui/sale-banner/sale-banner.component';
import { NewsletterBannerComponent } from './components/ui/newsletter-banner/newsletter-banner.component';
import { TopCollectionCardComponent } from './components/ui/top-collection-card/top-collection-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    BrandsComponent,
    TopCollectionsComponent,
    SaleBannerComponent,
    NewsletterBannerComponent,
    TopCollectionCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
