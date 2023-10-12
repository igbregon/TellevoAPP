import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertaService } from '../alertas/alerta.service';
import { NavController } from '@ionic/angular';
import { UsuarioService } from '../almacenamiento/usuarios/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private servicioAlertas: AlertaService,
    private servicioUsuario: UsuarioService,
    private navController: NavController,
  ) { }
  // Iniciar sesión
  async signIn(correo: string, contrasena: string){
    try {
      this.servicioAlertas.showAlertNoButton("Validando Credenciales...","");
      await this.auth.signInWithEmailAndPassword(correo, contrasena);
      this.servicioUsuario.usuarioActual = (await this.servicioUsuario.getUser()).filter(usuario => usuario.correo == correo)[0];
      console.log(this.servicioUsuario.usuarioActual);
      setTimeout(() => {
        this.servicioAlertas.showAlert("Bienvenido a TeLlevoAPP.", "");
        this.router.navigateByUrl("menu-principal/" + correo);
        console.log("usuario:" + correo)
      }, 1000);
    } catch (error) {
      this.servicioAlertas.showAlert("Usuario/contraseña inválidos", "ERROR");
    }
  }

  // Cerrar sesión
  async signOut(){
    var confirmar = await this.servicioAlertas.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar");
    if (confirmar == true) {
      this.auth.signOut();
      this.navController.setDirection('back');
      this.router.navigateByUrl("inicio-sesion");
    }
  }

  // Registrarse
  async signUp(correo: string, contrasena: string){
    await this.auth.createUserWithEmailAndPassword(correo, contrasena).then((userCredential) => {
      // Registro exitoso
      this.servicioAlertas.showAlertNoButton("Registrando Cuenta...","");
      setTimeout(() => {
        this.servicioAlertas.showAlert("Cuenta creada correctamente.", "");
        this.navController.back();
        console.table(userCredential.user?.providerData);
      }, 1000);
    }).catch((error) => {
      console.error('Error al iniciar sesión:', error);
      // Manejo de errores
      const codigoError = error.code;
      switch (codigoError) {
        case "auth/email-already-in-use":
          this.servicioAlertas.showAlert("El correo ya está en uso. Intente con otro.", "ERROR");
          break;
        case "auth/missing-email":
          this.servicioAlertas.showAlert("Debe ingresar un correo. Por favor, intente nuevamente", "ERROR");
          break;
        case "auth/invalid-email":
          this.servicioAlertas.showAlert("El correo no es válido. Ingresa una direccion de correo válida.", "ERROR");
          break;
        case "auth/missing-password":
          this.servicioAlertas.showAlert("Debe ingresar una contraseña. Por favor, intente nuevamente.", "ERROR");
          break;
        case "auth/weak-password":
          this.servicioAlertas.showAlert("La contraseña es muy débil. Debe tener al menos 6 caracteres.", "ERROR");
          break;
        default:
          this.servicioAlertas.showAlert("Hubo un error al crear la cuenta. Por favor, intenta de nuevo más tarde.", "ERROR");
      }
    });
    
    /* try {
      await this.auth.createUserWithEmailAndPassword(correo, contrasena);
      this.servicioAlertas.showAlert("Usuario registrado con éxito.", "Registro");
    } catch (error) {
      this.servicioAlertas.showAlert("Error al registrar el usuario.", "ERROR");
    } */
  }
}
