import { Injectable } from '@angular/core';
import { CoreService } from './core.service'



@Injectable({
  providedIn: 'root'
})
export class CertificacionService {
  http: any;

constructor(
  private _coreService:CoreService,
 ) { }

  importarExcel(archivo: File) {
    const formData = new FormData();
    formData.append('documento', archivo);
    return this._coreService.post('nomina', formData);
  }

}


