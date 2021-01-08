import { TestBed } from '@angular/core/testing';

import { TranferDataService } from './tranfer-data.service';

describe('TranferDataService', () => {
  let service: TranferDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranferDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
