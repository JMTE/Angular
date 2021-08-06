import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonaGifsComponent } from './zona-gifs/zona-gifs.component';
import { SearchComponent } from './zona-gifs/search/search.component';
import { ContentComponent } from './zona-gifs/content/content.component';



@NgModule({
  declarations: [
    ZonaGifsComponent,
    SearchComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ZonaGifsComponent
  ]
})
export class GifsModule { }
