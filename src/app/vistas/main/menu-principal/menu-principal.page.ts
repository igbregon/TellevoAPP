import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/almacenamiento/usuarios/usuario.service';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {
  private animation!: Animation;
  usuario: Usuario = {
    nombre: '',
    apellido: '',
    correo: '',
  }


  constructor(
    private activatedRoute:ActivatedRoute,
    private servicioUsuario:UsuarioService,
    private servicioAutenticacion:AutenticacionService,
    private router:Router,
    private animationCtrl: AnimationController,
  ) { }

  ngOnInit() {
    this.infoUsuario();
  }

  ionViewDidEnter(){
  }

  
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll(".cardTwo"))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }

  async infoUsuario(){
    const usuarioActual = await this.servicioAutenticacion.userLogged();
    if (usuarioActual!= null) {
      this.usuario = usuarioActual;
      console.log("Usuario actual: ",this.usuario);
    }
  }

  async inicioSesion(){
    this.servicioAutenticacion.signOut();
  }

  listaViajes(){
    this.router.navigateByUrl("lista-viajes");
  }

  crearViaje(){
    this.router.navigateByUrl("crear-viaje");
  }

}
