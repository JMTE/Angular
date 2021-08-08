import { HttpClient } from '@angular/common/http';
import { TypeScriptEmitter } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifsinterfaces';

@Injectable({
  providedIn: 'root'  //Permite que los servicios pueden estar definidos (nivel global) este servicio va a ser unico en el root y no voy a tener que especificarlo 
})
export class GifsService {

  private apiKey :string ="z3QHy7bISBoa8Be1uuzy9hKOfcahjRI8";

  

  private _historial :string[]=[];



  public resultados:Gif[]=[];

  get dameHistorial(){


    return [...this._historial]; //Se utiliza de este modo para romper la referencia, de la otra forma tambien funcionaria

  }

  constructor(private http:HttpClient) {

    //El constructor se ejecuta solamente una vez porque los servicios trabajan de esa manera, por esa 
    // razon es el lugar adecuado para cargar el localStorage

    if (localStorage.getItem("historial")){

      this._historial=JSON.parse(localStorage.getItem("historial")!) ;
      //Con el signo ! le decimos a angular que es muy estricto, que esa informacion si que existe y es correcta
    
    
    
    }

    if(localStorage.getItem("ultimos_gifs")){

      this.resultados=JSON.parse(localStorage.getItem("ultimos_gifs")!);
    }




  } //Importamos el modulo httpClientModule y lo inyectamos aqui en el constructor
  

  buscarGifs(valor:string){ //Con esta funcion vamos a introducir el valor introducido por parametro(que viene de la caja) en nuestro array de strings

    valor=valor.toLowerCase(); //Para que a la hora de comparar, no nos introduzca mayusculas
    if (!this._historial.includes(valor)){

      this._historial.unshift(valor); // Introducimos el valor al principio del array
      this._historial= this._historial.splice(0,10);


      //Ahora intentamos que cada vez que la pagina se refresque, no se borre el historial, 
      // para ello vamos a trabajar con el localStorage y la propiedad JSON stringify que 
      // traduce a string cualquier valor, en este caso el objeto historial. De esta manera ya lo tendremos
      // grabado en el localStorage, despues seguimos trabajando en el constructor
      localStorage.setItem("historial", JSON.stringify(this._historial));

     

    }

     //De esta manera limitamos el historial a solo 10 elementos


    // console.log(this._historial); //Lo mostramos en consola

    //Para mostrar los gifs con la api de gyphy, podriamos hacerlo mediante promesas, pero seria muy complicado
    // y siempre habria que tener cuidado con los try , para ello angular tiene una herramienta, la cual tenemos
    // que descargar desde el modulo httpClientModule e inyectarla en el constructor

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=z3QHy7bISBoa8Be1uuzy9hKOfcahjRI8&q=${ valor }&limit=10`)
    .subscribe((resp) =>{
      //Para realizar el tipado, utilizamos la informacion que nos da el Postman en data, lo llevamos a la 
      // pagina quicktype y alli lo transformamos en codigo TypeScript, despues creamos la interface gifsinterfaces
      // y ya podemos trabajar con nuestro tipado.
      console.log(resp.data);
      this.resultados=resp.data;
      localStorage.setItem("ultimos_gifs", JSON.stringify(this.resultados));
      
    })
    
    //el subscribe se ejecuta cuando tenemos la resolucion del get
  }

  

  //Recordemos que para usar el servicio tenemos que inyectarlo en la zona donde se recibe el valor de la caja de texto

}
