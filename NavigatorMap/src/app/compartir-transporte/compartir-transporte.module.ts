import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompartirTransportePageRoutingModule } from './compartir-transporte-routing.module';

import { CompartirTransportePage } from './compartir-transporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompartirTransportePageRoutingModule
  ],
  declarations: [CompartirTransportePage]
})
export class CompartirTransportePageModule {}
