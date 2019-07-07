import { TestBed } from '@angular/core/testing';

import { EscritoresService } from './escritores.service';

describe('EscritoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EscritoresService = TestBed.get(EscritoresService);
    expect(service).toBeTruthy();
  });
});
