import { TestBed } from '@angular/core/testing';

import { PackageapiService } from './packageapi.service';

describe('PackageapiService', () => {
  let service: PackageapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
