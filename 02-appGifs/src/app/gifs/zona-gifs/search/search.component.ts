import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  constructor() { }

  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;

  //! con este signo le decimos que este elemento nunva va a ser nulo

  buscar(){


    const  valor=  (this.txtBuscar.nativeElement.value);

    console.log(valor);

    this.txtBuscar.nativeElement.value="";
    
    
  }

  

}
