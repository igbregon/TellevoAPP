import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {

  correo:string = "";
  contrasena:string = "";

  constructor(
    private router:Router,
    private servicioAutenticacion:AutenticacionService,
  ) { }

  ngOnInit() {
  }

  inicioSesion(){
    this.servicioAutenticacion.signIn(this.correo,this.contrasena);
  }

  recuperarContrasena(){
    this.router.navigateByUrl("recuperar-contrasena");
  }

  registro(){
    this.router.navigateByUrl("registro");
  }


}