import { TestBed } from '@angular/core/testing';

import { SocktioService } from './socktio.service';

describe('SocktioService', () => {
  let service: SocktioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocktioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
