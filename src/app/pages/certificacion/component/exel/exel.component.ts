import { Component, OnInit } from '@angular/core';
import { CertificacionService } from '@services/certificacion.service';
import { UINotificationService } from '@services/uinotification.service';

@Component({
  selector: 'app-exel',
  templateUrl: './exel.component.html',
  styleUrls: ['./exel.component.scss']
})
export class ExelComponent implements OnInit {
  progreso: number = 0;
  cargandoArchivo= false;
   errorOccurred = true;
  uploadingFile: boolean;
  fileToUpload: null;

  constructor(
    private _uiNotificationService: UINotificationService,
    private _importarExcel: CertificacionService
  ) {}

  ngOnInit() {}
  validateFile(file: File): boolean {
    // Aquí puedes agregar tu lógica de validación personalizada
    // Devuelve true si el archivo es válido y debe cargarse, o false si no se debe cargar
    if (file.size > 10 * 1024 * 1024) {
      this._uiNotificationService.error("El tamaño del archivo excede el límite permitido (10MB).");
      return false;
    }

    // Puedes agregar más validaciones según tus requisitos

    return true;
  }

  importarDocumentosMora(event) {
    event.preventDefault();
    this.uploadingFile = true;
    this.errorOccurred = false;
    
    const archivo = event.target.documento.files[0];

    const reader = new FileReader();

    reader.onloadstart = () => {
      this.progreso = 0;
    };

    reader.onprogress = (event) => {
      if (event.lengthComputable) {
        this.progreso = Math.round((event.loaded / event.total) * 50);
      }
    };

    reader.onloadend = () => {
      this._importarExcel.importarExcel(archivo).subscribe(
        response => {
          console.log(response);
          this._uiNotificationService.success("Ok! importación completada");
          this.uploadingFile = false;
        },
        error => {
          console.log(error);
          this._uiNotificationService.error("No se puede hacer la carga del archivo ya que hay un registro duplicado");
          this.errorOccurred = true;
          this.uploadingFile = false;
        }
      );
    };

    reader.readAsDataURL(archivo);
  }
  refreshPage() {
    location.reload();
  }

}
