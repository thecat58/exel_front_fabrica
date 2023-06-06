import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { CertificacionService } from '@services/certificacion.service'

@Component({
  selector: 'app-exel',
  templateUrl: './exel.component.html',
  styleUrls: ['./exel.component.scss']
})
export class ExelComponent {

  file: File;
  data: any[];


  fileData: string | undefined;
  fileType: string | undefined;
  selectedFile: File | undefined;

  constructor(private certificacionService: CertificacionService) {}

  selccionar_exel(event: any) {
    this.selectedFile = event.target.files[0];
  }

  importarCertificado() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.fileData = reader.result as string;
        this.fileType = this.selectedFile.type;
        this.certificacionService.importarCertificado(this.fileData, this.fileType, this.selectedFile.type)
          .subscribe(
            response => {
              // Maneja la respuesta del servicio
            },
            error => {
              // Maneja los errores
            }
          );
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}



