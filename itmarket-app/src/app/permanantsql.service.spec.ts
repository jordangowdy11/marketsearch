import { TestBed } from '@angular/core/testing';

import { PermanantsqlService } from './permanantsql.service';

describe('PermanantsqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermanantsqlService = TestBed.get(PermanantsqlService);
    expect(service).toBeTruthy();
  });
});
