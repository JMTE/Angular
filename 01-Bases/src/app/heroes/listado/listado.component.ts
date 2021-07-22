import { Component} from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { VirtualAction } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent { 

  heroes:string[]=["Spiderman","Hulk","Batman","Ironman","Joker","Thor"];

  heroesBorrados:string[]=[];

  bandera:boolean=false

  public borrarHeroe(){



     const heroeBorrado=this.heroes.shift() ||""; 
     // Esto es debido a que shift devuelve un string o undefined, por lo tanto a la hora de 
    //  declarar el heroes Borrados habria que declararlo como any y eso no es muy conveniente,
    //  por esa razon se pone que si es undefined devuelva un string Vacio

    

    
    this.heroesBorrados.push(heroeBorrado);
    
    this.bandera=true;
   

  }

  
}


