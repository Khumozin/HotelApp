import { TestBed } from '@angular/core/testing';

import { HotelFeatureService } from './hotel-feature.service';

describe('HotelFeatureService', () => {
  let service: HotelFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
