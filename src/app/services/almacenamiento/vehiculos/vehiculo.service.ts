import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Vehiculo } from 'src/app/models/vehiculo';
import { AlertaService } from '../../alertas/alerta.service';
import { NavController } from '@ionic/angular';

const storageVehiculo = "vehiculoData";

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(
    private servicioAlertas: AlertaService,
    private navController: NavController,
  ) { }

  async getItem(llave:string):Promise<string | null>{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }

  async setItem(llave:string, valor:string){
    await Preferences.set({key:llave,value:valor});
  }

  //Obtener vehiculo del local storage
  async getVehicle(){
    const storageData = await this.getItem(storageVehiculo);
    if (storageData == null) {
      return [];
    }
    const data:Vehiculo[] = JSON.parse(storageData);
    if (data) {
      return data;
    }else{
      return [];
    }
  }

  async arrayVehicle(){
    const vehiculos = await this.getVehicle();
    return vehiculos;
  }

  //Agregar vehiculo al local storage
  async addVehicle(vehicle:Vehiculo[]){
    const vehicles = await this.getVehicle();
    for (const i of vehicles) {
      if (i) {
        vehicle.push(i);
      }
    }
    this.setItem(storageVehiculo,JSON.stringify(vehicle));
    console.log(vehicle);
  }

  //Obtener vehiculo por correo
  async getVehicleByEmail(correo:string){
    const vehicles = await this.getVehicle();
    return vehicles.find(vehicle => vehicle.usuariocorreo === correo);
  }

  //Obtener vehiculo por patente
  async getVehicleByPatente(patente:string){
    const vehicles = await this.getVehicle();
    return vehicles.find(vehicle => vehicle.patente === patente);
  }

  //Registrar vehiculo
  async registerVehicle(vehicle:Vehiculo){
    try {
      this.servicioAlertas.showAlertNoButton("Cargando...", "");
      await this.addVehicle([vehicle]);
      setTimeout(() => {
        this.servicioAlertas.showAlert("Vehiculo Registrado.", "");
        this.navController.back();
      }, 500);
    } catch (error) {
      this.servicioAlertas.showAlert("Ocurrió un problema al registrar el vehículo.", "ERROR");
    }
  }

}
