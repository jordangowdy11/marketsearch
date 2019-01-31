import { TestBed } from '@angular/core/testing';

import { ContractDataService } from './contract-data.service';

describe('ContractDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractDataService = TestBed.get(ContractDataService);
    expect(service).toBeTruthy();
  });
});
