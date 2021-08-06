import { Component} from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
  
})
export class SidebarComponent {
  
  

  constructor(private gifservice:GifsService) { } //Se inyecta el servicio para poder tener sus metodos

  get historial():string[]{ //Con esta funcion vamos a devolver del servicio el metodo dameHistorial, le ponemos que es un array de string para que veamos que es eso lo que devuelve
    
    return this.gifservice.dameHistorial;
  }

}
