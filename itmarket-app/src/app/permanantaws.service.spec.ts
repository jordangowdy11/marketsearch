import { TestBed } from '@angular/core/testing';

import { PermanantawsService } from './permanantaws.service';

describe('PermanantawsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermanantawsService = TestBed.get(PermanantawsService);
    expect(service).toBeTruthy();
  });
});
