import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCollectionCardComponent } from './top-collection-card.component';

describe('TopCollectionCardComponent', () => {
  let component: TopCollectionCardComponent;
  let fixture: ComponentFixture<TopCollectionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopCollectionCardComponent]
    });
    fixture = TestBed.createComponent(TopCollectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
