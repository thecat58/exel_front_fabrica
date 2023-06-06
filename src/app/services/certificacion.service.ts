import { Injectable } from '@angular/core';
import { certificacionModel } from '@models/certificacion.model';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class CertificacionService {

  certificacion:certificacionModel

constructor(
  private _coreService:CoreService
) { }





}
