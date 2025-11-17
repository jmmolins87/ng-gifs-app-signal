import { Component, inject, signal } from '@angular/core';
import { List } from "@componentsGifs/list/list.component";
import type { Gif } from '@interfacesGifs/gifs.interface';
import { GifService } from '@servicesGifs/gifs.service';


@Component({
  selector: 'app-search-page',
  imports: [List],
  templateUrl: './search-page.component.html',
})
export default class SearchPage {

  gifsService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch( input: HTMLInputElement ){
    const query = input.value.trim();
    if (!query) return;

    this.gifsService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });

    input.value = '';
  }
}
