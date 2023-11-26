import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanificarRutaPage } from './planificar-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: PlanificarRutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanificarRutaPageRoutingModule {}
