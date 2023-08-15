import { TestBed } from '@angular/core/testing';

import { WidowService } from './widow.service';

describe('WidowService', () => {
  let service: WidowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
