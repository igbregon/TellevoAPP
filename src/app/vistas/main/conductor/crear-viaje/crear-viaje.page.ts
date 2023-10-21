import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/almacenamiento/vehiculos/vehiculo.service';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';
import { Comuna } from 'src/app/models/comuna';
import { Region } from 'src/app/models/region';
import { LocationService } from 'src/app/services/location/location.service';


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
  
    regiones:Region[]=[];
    comunas:Comuna[]=[];
    regionSeleccionado:number = 0;
    comunaSeleccionada:number = 0;

  constructor(
    private servicioAutenticacion:AutenticacionService,
    private router:Router,
    private servicioVehiculo:VehiculoService,
    private locationService:LocationService
  ) { }

  n1: number | undefined;
  n2: number | undefined;
  resultado: number | undefined;

  ngOnInit() {
    this.mostrarVehiculo();
  }

  async cargarRegion(){
    const req = await this.locationService.getRegion();
    this.regiones = req.data;
    console.log("REGION",this.regiones);
  }

  async cargarComuna(){
    const req = await this.locationService.getComuna(this.regionSeleccionado);
    this.comunas = req.data;
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
