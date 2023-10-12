import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { AlertaService } from 'src/app/services/alertas/alerta.service';
import { UsuarioService } from 'src/app/services/almacenamiento/usuarios/usuario.service';
import { AutenticacionService } from 'src/app/services/autenticacion/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

    //Interface de usuario
    usuario: Usuario = {
      nombre: '',
      apellido: '',
      correo: '',
    }
    //Necesario para la creación de usuario en firebase
    contrasena: string = "";
    confirmarContrasena: string = "";


  constructor(
    private navController: NavController,
    private servicioAlertas:AlertaService,
    private servicioUsuario: UsuarioService,
    private servicioAutenticacion:AutenticacionService,
  ) { }

  ngOnInit() {
    this.verUsuarios();
  }

  async verUsuarios(){
    const usuarios = await this.servicioUsuario.getUser();
    console.log(usuarios);
  }

  inicioSesion(){
    this.navController.back();
  }

  async registroUsuario(){
    //Validación de campos
    if (this.usuario.nombre == "" || this.usuario.apellido == "" || this.usuario.correo == "" || this.contrasena == "" || this.confirmarContrasena == "") {
      this.servicioAlertas.showAlert("Todos los campos son obligatorios.", "ERROR");
      return;
    }

    if (this.contrasena.length < 6) {
      this.servicioAlertas.showAlert("La contraseña debe tener al menos 6 caracteres.", "ERROR");
      return;
    } 

    if (this.contrasena != this.confirmarContrasena) {
      this.servicioAlertas.showAlert("Las contraseñas no coinciden.", "ERROR");
      return;
    }

    //Servicio de autenticación de firebase
    await this.servicioAutenticacion.signUp(this.usuario.correo,this.contrasena);

    //Servicio de almacenamiento de usuarios en local storage
    this.servicioUsuario.addUser([this.usuario]);
    console.log(this.usuario);
  }
}
