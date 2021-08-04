import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes :Personaje[]=[

    {
      nombre:"Goku",
      poder:15000
    },
    {
      nombre:"Vegeta",
      poder:12000
    },
    {
      nombre:"Piccolo",
      poder:8000
    }

  ];

  nuevo:Personaje={

    nombre:"Maestro Roshi",
    poder:1000
  }

  agregarNuevoPersonaje(argumento:Personaje){

    this.personajes.push(argumento);

  }
  

  


  

  

  cambiarNombre(event:any){
    console.log(event.target.value);
    
  }

  cambiarPoder(event:any){

    console.log(event.target.value);
    
  }
}
