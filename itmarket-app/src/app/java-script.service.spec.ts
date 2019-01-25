import { TestBed } from '@angular/core/testing';

import { JavaScriptService } from './java-script.service';

describe('JavaScriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JavaScriptService = TestBed.get(JavaScriptService);
    expect(service).toBeTruthy();
  });
});
