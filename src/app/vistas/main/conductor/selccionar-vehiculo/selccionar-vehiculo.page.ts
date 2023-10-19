import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { Vehiculo } from 'src/app/models/vehiculo';
import { AlertaService } from 'src/app/services/alertas/alerta.service';
import { VehiculoService } from 'src/app/services/almacenamiento/vehiculos/vehiculo.service';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-selccionar-vehiculo',
  templateUrl: './selccionar-vehiculo.page.html',
  styleUrls: ['./selccionar-vehiculo.page.scss'],
})
export class SelccionarVehiculoPage implements OnInit {

  vehiculos: Vehiculo[] = [];
/*   vehiculoSeleccionado: Vehiculo = {
    marca: '',
    modelo: '',
    anno: 0,
    patente: '',
    img: '',
    usuariocorreo: '',
  } */

  constructor(
    private servicioAutenticacion: AutenticacionService,
    private navController: NavController,
    private servicioVehiculo: VehiculoService,
    private servicioAlertas: AlertaService,
  ) { }

  ngOnInit() {
    this.vehiculosDelUsuario();
  }

  async vehiculosDelUsuario(){
    const vehiculosDelUsuario = await this.servicioAutenticacion.getUserVehicles();
    if (vehiculosDelUsuario != null) {
      this.vehiculos = vehiculosDelUsuario;
      console.log("Vehiculos del usuario: ",this.vehiculos);
    }
  }

  volverListaViajes(){
    this.navController.back();
  }

  async seleccionarVehiculo(patente: string){
    const vehiculo = this.vehiculos.filter(vehiculo => vehiculo.patente == patente)[0];
    await this.servicioAutenticacion.setSelectedVehicle(vehiculo);
    setTimeout(() => {
      this.servicioAlertas.showAlert("Vehiculo seleccionado", "");
      this.navController.back();
    }, 100);
    console.log("Vehiculo actual: ", vehiculo);
  }

}
