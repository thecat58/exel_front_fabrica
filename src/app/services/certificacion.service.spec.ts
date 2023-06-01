/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CertificacionService } from './certificacion.service';

describe('Service: Certificacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CertificacionService]
    });
  });

  it('should ...', inject([CertificacionService], (service: CertificacionService) => {
    expect(service).toBeTruthy();
  }));
});
