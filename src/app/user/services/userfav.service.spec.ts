/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserfavService } from './userfav.service';

describe('Service: Userfav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserfavService]
    });
  });

  it('should ...', inject([UserfavService], (service: UserfavService) => {
    expect(service).toBeTruthy();
  }));
});
