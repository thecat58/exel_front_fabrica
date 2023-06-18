import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificacionRoutingModule } from './certificacion-routing.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ExelComponent } from './component/exel/exel.component';
<<<<<<< HEAD
import { Pdf2Component } from './component/certi2/pdf2.component';
import { PdfComponent } from './component/certi1/pdf.component';

=======
import { PdfComponent } from './component/pdf/pdf.component';
>>>>>>> e4a517d654709780fccdf0b7c7f93bbc12313512


@NgModule({
  declarations: [
    PrincipalComponent,
    ExelComponent,
<<<<<<< HEAD
    Pdf2Component,
    PdfComponent,
   
=======
    PdfComponent
>>>>>>> e4a517d654709780fccdf0b7c7f93bbc12313512

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
