import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { Vehiculo } from 'src/app/models/vehiculo';
import { AlertaService } from 'src/app/services/alertas/alerta.service';
import { VehiculoService } from 'src/app/services/almacenamiento/vehiculos/vehiculo.service';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-registrar-vehiculo',
  templateUrl: './registrar-vehiculo.page.html',
  styleUrls: ['./registrar-vehiculo.page.scss'],
})
export class RegistrarVehiculoPage implements OnInit {

  usuario: Usuario = {
    nombre: '',
    apellido: '',
    correo: '',
  }
  vehiculo: Vehiculo = {
    marca: '',
    modelo: '',
    anno: 0,
    patente: '',
    img: '',
    usuariocorreo: '',
  }

  constructor(
    private navController: NavController,
    private servicioAutenticacion:AutenticacionService,
    private servicioAlertas: AlertaService,
    private vehiculoService: VehiculoService,
  ) { }

  ngOnInit() {
    this.infoUsuario();
  }

  volverCrearViaje(){
    this.navController.back();
  }

  async infoUsuario(){
    const usuarioActual = await this.servicioAutenticacion.userLogged();
    if (usuarioActual!= null) {
      this.usuario = usuarioActual;
      console.log("Usuario actual: ",this.usuario);
    }
  }

  async registrarVehiculo(){
    if (this.vehiculo.marca === "") {
      this.servicioAlertas.showAlert("Debe ingresar una marca.", "ERROR");
      return;
    }
    if (this.vehiculo.modelo === "") {
      this.servicioAlertas.showAlert("Debe ingresar un modelo.", "ERROR");
      return;
    }
    if (this.vehiculo.anno === 0) {
      this.servicioAlertas.showAlert("Debe ingresar un año", "ERROR");
      return;
    }
    if (this.vehiculo.patente === "") {
      this.servicioAlertas.showAlert("Debe ingresar una patente.", "ERROR");
      return;
    }
    if (this.vehiculo.img === "") {
      this.servicioAlertas.showAlert("Debe ingresar una imagen.", "ERROR");
      return;
    }
    this.vehiculo.usuariocorreo = this.usuario.correo;
    await this.vehiculoService.registerVehicle(this.vehiculo);
  }

}
