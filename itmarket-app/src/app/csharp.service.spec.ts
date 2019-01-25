import { TestBed } from '@angular/core/testing';

import { CSharpService } from './csharp.service';

describe('CSharpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CSharpService = TestBed.get(CSharpService);
    expect(service).toBeTruthy();
  });
});
