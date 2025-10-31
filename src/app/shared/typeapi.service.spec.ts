import { TestBed } from '@angular/core/testing';

import { TypeapiService } from './typeapi.service';

describe('TypeapiService', () => {
  let service: TypeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
