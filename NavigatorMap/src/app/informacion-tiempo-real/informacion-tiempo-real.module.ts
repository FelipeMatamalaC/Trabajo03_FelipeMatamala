import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionTiempoRealPageRoutingModule } from './informacion-tiempo-real-routing.module';

import { InformacionTiempoRealPage } from './informacion-tiempo-real.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionTiempoRealPageRoutingModule
  ],
  declarations: [InformacionTiempoRealPage]
})
export class InformacionTiempoRealPageModule {}
