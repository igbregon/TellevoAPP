import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/services/almacenamiento/vehiculos/vehiculo.service';

@Component({
  selector: 'app-detalle-viajes',
  templateUrl: './detalle-viajes.page.html',
  styleUrls: ['./detalle-viajes.page.scss'],
})
export class DetalleViajesPage implements OnInit {

  vehiculo: Vehiculo = {
    marca: '',
    modelo: '',
    anno: 0,
    patente: '',
    img: '',
    usuariocorreo: '',
  }

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private navController:NavController,
    private servicioVehiculo:VehiculoService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.activatedRoute.params.subscribe(params => {
      this.vehiculo.patente = params['patente'];
      this.servicioVehiculo.getVehicleByPatente(this.vehiculo.patente).then(vehiculo => {
        if (vehiculo != null) {
          this.vehiculo = vehiculo;
          console.log("Vehículo: ", this.vehiculo);
        }
      });
    });
  }
    

  volverListaViajes(){
    this.navController.setDirection('back');
    this.router.navigateByUrl("lista-viajes");
  }

}
