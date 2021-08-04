import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';



@Injectable() 
// Clase que se puede inyectar con el decorador injectable
export class DbzService{

    private _personajes :Personaje[]=[

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

      get personajes(){

        return [...this._personajes];
      }

    constructor(){
       
    }


    agregarPersonaje(personaje:Personaje){

        this._personajes.push(personaje);




    }




}