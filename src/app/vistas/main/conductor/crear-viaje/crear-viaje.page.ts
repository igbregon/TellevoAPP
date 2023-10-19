import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {

  constructor(
    private servicioAutenticacion:AutenticacionService,
    private router:Router,
  ) { }

  n1: number | undefined;
  n2: number | undefined;
  resultado: number | undefined;

  ngOnInit() {
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

  calcularMultiplicacion(){
    if(this.n1 !== undefined && this.n2 !== undefined){
      this.resultado = this.n1 * this.n2;
    }
  }
}
