import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  //Permite que los servicios pueden estar definidos (nivel global) este servicio va a ser unico en el root y no voy a tener que especificarlo 
})
export class GifsService {

  constructor() { }

  private _historial :string[]=[];

  get dameHistorial(){


    return [...this._historial]; //Se utiliza de este modo para romper la referencia, de la otra forma tambien funcionaria

  }
  

  buscarGifs(valor:string){ //Con esta funcion vamos a introducir el valor introducido por parametro(que viene de la caja) en nuestro array de strings

    valor=valor.toLowerCase(); //Para que a la hora de comparar, no nos introduzca mayusculas
    if (!this._historial.includes(valor)){

      this._historial.unshift(valor); // Introducimos el valor al principio del array

    }

    this._historial= this._historial.splice(0,10); //De esta manera limitamos el historial a solo 10 elementos


    console.log(this._historial); //Lo mostramos en consola
    
    
  }

  //Recordemos que para usar el servicio tenemos que inyectarlo en la zona donde se recibe el valor de la caja de texto

}
