import { TestBed } from '@angular/core/testing';

import { JavaService } from './java.service';

describe('JavaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JavaService = TestBed.get(JavaService);
    expect(service).toBeTruthy();
  });
});
