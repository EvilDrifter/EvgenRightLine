import { TestBed } from '@angular/core/testing';

import { SectionDataService } from './section-data.service';

describe('SectionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectionDataService = TestBed.get(SectionDataService);
    expect(service).toBeTruthy();
  });
});
