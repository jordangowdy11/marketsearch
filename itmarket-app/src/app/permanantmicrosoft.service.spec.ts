import { TestBed } from '@angular/core/testing';

import { PermanantmicrosoftService } from './permanantmicrosoft.service';

describe('PermanantmicrosoftService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermanantmicrosoftService = TestBed.get(PermanantmicrosoftService);
    expect(service).toBeTruthy();
  });
});
