import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllAddressComponent } from './list-all-address.component';

describe('ListAllAddressComponent', () => {
  let component: ListAllAddressComponent;
  let fixture: ComponentFixture<ListAllAddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllAddressComponent]
    });
    fixture = TestBed.createComponent(ListAllAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
