import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info = InfoPage;
  favoritos=FavoritosPage;
  fav=[];
  casas=[
    {id: 0, 
    titulo:"Residencia en venta en ciudad del sol", 
    precio: "13,200,000",
    imagen: "../assets/casa1.jpg",
    contacto: "contacto4@gmail.com",
    telefono: "3323539474",
    descripcion: "Hermosa recidencia de lujo en inmejorable ubicación",
    vendedor: "René Sánchez" 
    },
    {id: 1, 
    
      titulo:"Residencia en francisco Villa", 
      precio: "$2,600,000",
      imagen: "../assets/casa2.jpg",
      contacto: "contacto3@gmail.com",
      telefono: "3323539474",
      descripcion: "Hermosa recidencia de lujo en inmejorable ubicación",
      vendedor: "René Sánchez" 
      },
    
    {id: 2, 
    
        titulo:"Residencia en Providencia", 
        precio: "$6,300,000",
        imagen: "../assets/casa3.jpg",
        contacto: "contacto2@gmail.com",
        telefono: "3323539474",
        descripcion: "Hermosa recidencia de lujo en inmejorable ubicación",
        vendedor: "René Sánchez Moreno"
    },
    {id: 3, 
    
      titulo:"Residencia en jardines del bosque", 
      precio: "$9,800,000",
      imagen: "../assets/casa4.jpg",
      contacto: "contacto@gmail.com",
      telefono: "3323539474",
      descripcion: "Hermosa recidencia de lujo en inmejorable ubicación",
      vendedor: "René Sánchez"
      },
   
  
  ];
  
   
  
    constructor(public navCtrl: NavController) {
  
    }
    clickinfo(c){
      this.navCtrl.push(this.info, {casa: c, favoritos:this.fav});
    
    }
    clickagregar()
    {
       this.navCtrl.push(this.favoritos, {favoritos: this.fav})
    }
  }
  