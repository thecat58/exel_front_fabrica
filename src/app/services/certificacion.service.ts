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

public archivo(){
  return this._coreService.get
}

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this._coreService
  }
  importarCertificado(fileData: string, fileName: string, fileType: string) {
    // Construye el objeto JSON con la cadena codificada en Base64 y otros datos adicionales
    const jsonData = {
      fileData: fileData,
      fileName: fileName,
      fileType: fileType
    };

    // Realiza una solicitud POST al servicio enviando el objeto JSON
    return this._coreService.post('certificacion', jsonData);
  }
  

}


