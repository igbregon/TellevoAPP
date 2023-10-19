import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertaService } from 'src/app/services/alertas/alerta.service';
import { UsuarioService } from 'src/app/services/almacenamiento/usuarios/usuario.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {

  correo: string = "";

  constructor(
    private router: Router,
    private navController: NavController,
    private servicioAlertas: AlertaService,
    private usuarioService: UsuarioService,
    private auth: AngularFireAuth,
  ) { }

  ngOnInit() {
  }

  volverInicioSesion(){
    this.navController.setDirection('back');
    this.router.navigateByUrl("inicio-sesion");
  }

  async enviarCorreoDeRecuperacion(){
    if (this.correo == "") {
      this.servicioAlertas.showAlert("Ingrese su correo electrónico.", "ERROR");
      return;
    }

    const correoUsuario = await this.usuarioService.getUserByEmail(this.correo);

    if (correoUsuario == null) {
      this.servicioAlertas.showAlert("El correo ingresado no está registrado.", "ERROR");
      return;
    }
    if (correoUsuario != null) {
/*       this.auth.sendPasswordResetEmail(this.correo)
      this.servicioAlertas.showAlert("Se ha enviado un correo electrónico para recuperar su contraseña.", "ÉXITO");
      return; */
      try {
        await this.auth.sendPasswordResetEmail(this.correo);
        this.servicioAlertas.showAlert("Se ha enviado un correo electrónico para recuperar su contraseña.", "ÉXITO");
        setTimeout(() => {
          this.navController.setDirection('back');
          this.router.navigateByUrl("inicio-sesion");
        }, 1000);
      } catch (error) {
        this.servicioAlertas.showAlert("Ha ocurrido un error al enviar el correo electrónico.", "ERROR");
      }
    }
  }

}
