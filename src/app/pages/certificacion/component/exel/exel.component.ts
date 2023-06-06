import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-exel',
  templateUrl: './exel.component.html',
  styleUrls: ['./exel.component.scss']
})
export class ExelComponent {

  file: File;
  data: any[];

  selccionar_exel(event: any) {
    this.file = event.target.files[0];
  }

  leer_archivo() {
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      this.data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    };
    reader.readAsArrayBuffer(this.file);
  }

}

