import { Component } from "@angular/core";



@Component ({

        selector:"app-heroe",
        templateUrl:"heroe.component.html"

})



export class HeroeComponent{

    public nombre:string="Ironman";
    public edad:number=33;


    get nombreMayusculas(){
        return this.nombre.toUpperCase();
    }


    public obtenerNombre():string{

        return `${this.nombre} - ${this.edad}`;


    }

    public cambiarNombre():void{

        this.nombre="Spiderman";
    }

    public cambiarEdad(){

        this.edad=30;
    }



}