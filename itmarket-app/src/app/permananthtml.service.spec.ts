import { TestBed } from '@angular/core/testing';

import { PermananthtmlService } from './permananthtml.service';

describe('PermananthtmlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermananthtmlService = TestBed.get(PermananthtmlService);
    expect(service).toBeTruthy();
  });
});
