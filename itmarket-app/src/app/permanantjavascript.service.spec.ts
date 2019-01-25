import { TestBed } from '@angular/core/testing';

import { PermanantjavascriptService } from './permanantjavascript.service';

describe('PermanantjavascriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermanantjavascriptService = TestBed.get(PermanantjavascriptService);
    expect(service).toBeTruthy();
  });
});
