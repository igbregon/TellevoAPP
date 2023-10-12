import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelccionarVehiculoPage } from './selccionar-vehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: SelccionarVehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelccionarVehiculoPageRoutingModule {}
