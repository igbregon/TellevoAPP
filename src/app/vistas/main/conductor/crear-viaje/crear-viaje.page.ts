import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/almacenamiento/vehiculos/vehiculo.service';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  vehiculo: Vehiculo = {
    marca: '',
    modelo: '',
    anno: 0,
    patente: '',
    img: '',
    usuariocorreo: '',
  }

  constructor(
    private servicioAutenticacion:AutenticacionService,
    private router:Router,
    private servicioVehiculo:VehiculoService,
  ) { }

  n1: number | undefined;
  n2: number | undefined;
  resultado: number | undefined;

  ngOnInit() {
    this.mostrarVehiculo();
  }

  volverAlMenu(){
    this.servicioAutenticacion.backToMenu();
  }

  registrarVehiculo(){
    this.router.navigateByUrl("registrar-vehiculo");
  }

  seleccionarVehiculo(){
    this.router.navigateByUrl("selccionar-vehiculo");
  }

  async mostrarVehiculo(){
/*     await this.servicioAutenticacion.getSelectedVehicle().then(vehiculo => {
      if (vehiculo != null) {
        this.vehiculo = vehiculo;
        console.log("Vehiculo actual: ", this.vehiculo);
      }
    }); */
    const vehiculoActual = await this.servicioAutenticacion.getSelectedVehicle();
    if (vehiculoActual != null) {
      this.vehiculo = vehiculoActual;
      console.log("Vehiculo actual: ", this.vehiculo);
    }
  }

  calcularMultiplicacion(){
    if(this.n1 !== undefined && this.n2 !== undefined){
      this.resultado = this.n1 * this.n2;
    }
  }
}
