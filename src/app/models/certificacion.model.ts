
export interface certificacionModel {
    id?:number;
    identificacion:number;
    concepto:string;
    tipoNomina:string;
    fechaAcumula:Date;
    fechaInicio:Date;
    fechaFin:Date;
    valorTotal:number;
    valorReal:number;
    nombres:string;
    apellidos:string;
    nombreCompletos:string;
    descripcionCentroTrabajo:string;
    descripciónCentroCosto:string;
    descripciónClaseNómina:string;
    nombrecargo?:string;
}
