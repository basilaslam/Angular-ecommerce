import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsCardLoadingComponent } from './list-products-card-loading.component';

describe('ListProductsCardLoadingComponent', () => {
  let component: ListProductsCardLoadingComponent;
  let fixture: ComponentFixture<ListProductsCardLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProductsCardLoadingComponent]
    });
    fixture = TestBed.createComponent(ListProductsCardLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
