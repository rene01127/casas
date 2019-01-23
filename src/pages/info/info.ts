import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
/*titulo;
precio;
contacto;
telefono;
vendedor;
descripcion;*/
casa;
fav=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.casa =(this.navParams.get('casa'));
    this.fav =(this.navParams.get('favoritos'));
   /* console.log(this.navParams.get('titulo'));
  this.precio = this.navParams.get('precio');
  this.titulo = this.navParams.get('titulo');
  this.contacto = this.navParams.get('contacto');
  this.telefono = this.navParams.get('telefono');
  this.vendedor = this.navParams.get('vendedor');
  this.descripcion = this.navParams.get('descripcion');*/
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  clickshow(casa)
  {
    this.fav.push(this.casa);
    this.navCtrl.pop();
  }

}
