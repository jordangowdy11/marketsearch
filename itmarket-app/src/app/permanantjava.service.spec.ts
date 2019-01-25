import { TestBed } from '@angular/core/testing';

import { PermanantjavaService } from './permanantjava.service';

describe('PermanantjavaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermanantjavaService = TestBed.get(PermanantjavaService);
    expect(service).toBeTruthy();
  });
});
