import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/almacenamiento/vehiculos/vehiculo.service';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-lista-viajes',
  templateUrl: './lista-viajes.page.html',
  styleUrls: ['./lista-viajes.page.scss'],
})
export class ListaViajesPage implements OnInit {

  vehiculos:Vehiculo[] = [];

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private servicioVehiculo:VehiculoService,
    private servicioAutenticacion:AutenticacionService,
  ) { }

  ngOnInit() {
    this.listaDeViajes();
  }

  volverAlMenu(){
    this.servicioAutenticacion.backToMenu();
  }

  viajeSeleccionado(patente: string){
    this.router.navigateByUrl("detalle-viaje/" + patente);
    console.log("patente del vehículo:" + patente);
  }

  listaDeViajes(){
    this.servicioVehiculo.arrayVehicle().then(vehiculos => { 
      if(vehiculos != null){
        this.vehiculos = vehiculos;
      console.log("Lista de viajes", vehiculos);
      }
    });
  }

  seleccionarViaje(patente:string){
    this.router.navigateByUrl("detalle-viajes/" + patente);
    console.log("patente del vehículo: " + patente);
  }
}
