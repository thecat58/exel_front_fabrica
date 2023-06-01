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


public traerCertificado(){
  return this. _coreService.get<certificacionModel[]>('certicado')
}

crear(certificacion:certificacionModel){
  certificacion.identificacion=certificacion.identificacion;
  certificacion.concepto=certificacion.concepto;
  certificacion.tipoNomina=certificacion.tipoNomina;
  certificacion.fechaAcumula=certificacion.fechaAcumula;
  certificacion.fechaInicio=certificacion.fechaInicio;
  certificacion.fechaFin=certificacion.fechaFin;
  certificacion.valorTotal=certificacion.valorTotal;
  certificacion.valorReal=certificacion.valorReal;
  certificacion.nombres=certificacion.nombres;
  certificacion.apellidos=certificacion.apellidos;
  certificacion.nombreCompletos=certificacion.nombreCompletos;
  certificacion.descripcionCentroTrabajo=certificacion.descripcionCentroTrabajo;
  certificacion.descripciónCentroCosto=certificacion.descripciónClaseNómina;
  certificacion.descripciónClaseNómina=certificacion.descripciónClaseNómina;
  certificacion.nombrecargo=certificacion.nombrecargo;

  return this. _coreService.post<certificacionModel>('certificacion', certificacion);
}


}
