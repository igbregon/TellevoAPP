import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  @Input() dataModal: Usuario[]= [];

  constructor(
    private modalController:ModalController,
  ) { }

  ngOnInit() {
    console.log("Información modal", this.dataModal);
  }

  cerrarModal(){
    this.modalController.dismiss();
  }

}
