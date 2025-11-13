import { Component, input } from '@angular/core';
import { ListItem } from "./list-item/list-item.component";
import type { Gif } from '@interfacesGifs/gifs.interface';

@Component({
  selector: 'gifs-list',
  imports: [ListItem],
  templateUrl: './list.component.html',
})
export class List {

  gifs = input.required<Gif[]>();
}
