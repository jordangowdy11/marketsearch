import { TestBed } from '@angular/core/testing';

import { PermanantdevopsService } from './permanantdevops.service';

describe('PermanantdevopsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermanantdevopsService = TestBed.get(PermanantdevopsService);
    expect(service).toBeTruthy();
  });
});
