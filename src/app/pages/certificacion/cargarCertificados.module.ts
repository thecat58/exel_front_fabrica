import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificacionRoutingModule } from './certificacion-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ExelComponent } from './component/exel/exel.component';
import { PdfComponent } from './component/pdf/pdf.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    ExelComponent,
    PdfComponent

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
