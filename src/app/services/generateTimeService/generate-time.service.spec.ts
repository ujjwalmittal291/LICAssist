import { TestBed } from '@angular/core/testing';

import { GenerateTimeService } from './generate-time.service';

describe('GenerateTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateTimeService = TestBed.get(GenerateTimeService);
    expect(service).toBeTruthy();
  });
});
