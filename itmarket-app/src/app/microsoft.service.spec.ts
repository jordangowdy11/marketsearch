import { TestBed } from '@angular/core/testing';

import { MicrosoftService } from './microsoft.service';

describe('MicrosoftService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MicrosoftService = TestBed.get(MicrosoftService);
    expect(service).toBeTruthy();
  });
});
