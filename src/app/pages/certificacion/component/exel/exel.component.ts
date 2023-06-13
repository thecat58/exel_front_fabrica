import { Component } from '@angular/core';
import { CertificacionService } from '@services/certificacion.service'
import { UINotificationService } from '@services/uinotification.service';


@Component({
  selector: 'app-exel',
  templateUrl: './exel.component.html',
  styleUrls: ['./exel.component.scss']
})
export class ExelComponent {
  progreso: number = 0;
  cargandoArchivo = false;

  constructor(
    private _uiNotificationService: UINotificationService,
    private _importarExcel: CertificacionService,
       
   ) {}


   importarDocumetosMora(event) {
    event.preventDefault();
    this.cargandoArchivo = true;
    const archivo = event.target.documento.files[0];
    this._importarExcel.importarExcel(archivo).subscribe(
      response => {
        console.log(response);
        this._uiNotificationService.success("Ok! importación completada, ejecute el procedimiento");
        this.cargandoArchivo = false;

      },
      error => {
        console.log(error);
        this._uiNotificationService.error("Upps! Ocurrio un error");
        this.cargandoArchivo = false;
      }
    );
  }

 



}
