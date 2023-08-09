import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterBannerComponent } from './newsletter-banner.component';

describe('NewsletterBannerComponent', () => {
  let component: NewsletterBannerComponent;
  let fixture: ComponentFixture<NewsletterBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsletterBannerComponent]
    });
    fixture = TestBed.createComponent(NewsletterBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
