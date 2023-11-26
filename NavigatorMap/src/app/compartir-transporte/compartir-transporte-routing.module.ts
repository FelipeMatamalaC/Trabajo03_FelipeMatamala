import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompartirTransportePage } from './compartir-transporte.page';

const routes: Routes = [
  {
    path: '',
    component: CompartirTransportePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompartirTransportePageRoutingModule {}
