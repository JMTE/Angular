import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent  {

  get resultados(){

    return this.GifsService.resultados;
  }

  constructor(private GifsService:GifsService) { }

  

}
