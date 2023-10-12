import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelccionarVehiculoPageRoutingModule } from './selccionar-vehiculo-routing.module';

import { SelccionarVehiculoPage } from './selccionar-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelccionarVehiculoPageRoutingModule
  ],
  declarations: [SelccionarVehiculoPage]
})
export class SelccionarVehiculoPageModule {}
