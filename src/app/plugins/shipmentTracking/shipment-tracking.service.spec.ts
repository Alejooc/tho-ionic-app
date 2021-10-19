import { TestBed } from '@angular/core/testing';

import { ShipmentTrackingService } from './shipment-tracking.service';

describe('ShipmentTrackingService', () => {
  let service: ShipmentTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
