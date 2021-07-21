import { Component } from '@angular/core';

@Component({

  selector: "app-root",
  templateUrl: "app.component.html"
  
  
})
export class AppComponent {
  public title:string = 'Contador App';

  public numero:number=10;

    public base:number=5
   public acumular(valor:number){
   this.numero+=valor;
  }

  

}
