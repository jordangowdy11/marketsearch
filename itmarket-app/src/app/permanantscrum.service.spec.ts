import { TestBed } from '@angular/core/testing';

import { PermanantscrumService } from './permanantscrum.service';

describe('PermanantscrumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermanantscrumService = TestBed.get(PermanantscrumService);
    expect(service).toBeTruthy();
  });
});
