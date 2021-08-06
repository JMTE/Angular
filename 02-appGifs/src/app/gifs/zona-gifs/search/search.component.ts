import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  

  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>; //nodo para poder guardar el valor de la caja de texto

  //! con este signo le decimos que este elemento nunva va a ser nulo
  constructor(private gifservice:GifsService) {

    //Aqui inyectamos el servicio creado
   }
  buscar(){


    const  valor=  (this.txtBuscar.nativeElement.value); //Guardamos el valor de la caja de texto

    if (valor===""){ //Si el valor introducido es cadena vacia no hace nada
      return;
    }

    this.gifservice.buscarGifs(valor); //Añadimos a nuestro array el valor nuevo

    this.txtBuscar.nativeElement.value="";  //Borramos el texto de la caja de texto
    
    
  }

  

}
