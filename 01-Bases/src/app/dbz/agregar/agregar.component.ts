import { Component, EventEmitter, Input, Output} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() personajesAgregar:Personaje[]=[]

  @Input() nuevo2:Personaje={

    nombre:"",
    poder:0
  };

 


  

  

  
  @Output() onNuevoPersonaje: EventEmitter <Personaje> =new EventEmitter();


  agregar(){

    if (this.nuevo2.nombre.trim().length===0){
      return;
    }else{
      console.log(this.nuevo2);
      
    }
   

    this.onNuevoPersonaje.emit(this.nuevo2)

    

    this.nuevo2={

      nombre:"",
      poder:0
    }
    
    
  }

}
