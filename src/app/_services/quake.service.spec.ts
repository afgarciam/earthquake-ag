import { TestBed, inject } from '@angular/core/testing';

import { QuakeService } from './quake.service';

describe('QuakeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuakeService]
    });
  });

  it('should be created', inject([QuakeService], (service: QuakeService) => {
    expect(service).toBeTruthy();
  }));
});
