import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificacionRoutingModule } from './certificacion-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ExelComponent } from './component/exel/exel.component';
import { Pdf2Component } from './component/certi2/pdf2.component';
import { PdfComponent } from './component/certi1/pdf.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    ExelComponent,
    Pdf2Component,
    PdfComponent,
   

  ],
  imports: [
    CommonModule,
    CertificacionRoutingModule
  ],
  exports: [
    ExelComponent    
  ],
})
export class cargarCertificados { }
