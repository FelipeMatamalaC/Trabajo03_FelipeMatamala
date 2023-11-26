import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanificarRutaPageRoutingModule } from './planificar-ruta-routing.module';

import { PlanificarRutaPage } from './planificar-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanificarRutaPageRoutingModule
  ],
  declarations: [PlanificarRutaPage]
})
export class PlanificarRutaPageModule {}
