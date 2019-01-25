import { TestBed } from '@angular/core/testing';

import { PythonService } from './python.service';

describe('PythonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PythonService = TestBed.get(PythonService);
    expect(service).toBeTruthy();
  });
});
