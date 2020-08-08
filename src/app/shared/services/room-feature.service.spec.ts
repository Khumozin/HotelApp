import { TestBed } from '@angular/core/testing';

import { RoomFeatureService } from './room-feature.service';

describe('RoomFeatureService', () => {
  let service: RoomFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
