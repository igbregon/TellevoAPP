import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Usuario } from 'src/app/models/usuario';

const storageUsuario = "usuarioData";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuario: Usuario[] = [];
  public usuarioActual: Usuario = {
    nombre: '',
    apellido: '',
    correo: '',
  }
  
  constructor() { }

  async getItem(llave:string):Promise<string | null>{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }

  async setItem(llave:string, valor:string){
    await Preferences.set({key:llave,value:valor});
  }
  //Obtener usuario del local storage
  async getUser(){
    const storageData = await this.getItem(storageUsuario);
    if (storageData == null) {
      return [];
    }
    this.usuario = JSON.parse(storageData);
    if (this.usuario) {
      return this.usuario;
    }else{
      return [];
    }
  }
  //Agregar usuario al local storage
  async addUser(user:Usuario[]){
    const usuarios = await this.getUser();
    for (const i of usuarios) {
      if (i) {
        user.push(i);
      }
    }
    this.setItem(storageUsuario,JSON.stringify(user));
    console.log(user);
  }

  //Obtener usuario por correo
  async getUserByEmail(correo:string){
    const usuarios = await this.getUser();
    return usuarios.find(usuario => usuario.correo === correo);
  }

/*   //Obtener id de usuario
  async getNewUserId(){
    const usuarios = await this.getUser();
    return usuarios.length + 1;
  } */

}
