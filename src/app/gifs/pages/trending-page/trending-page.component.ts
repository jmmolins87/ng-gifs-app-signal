import { Component, inject, signal } from '@angular/core';
import { List } from '@componentsGifs/list/list.component';
// import { GifsUrls } from '@dbGifs/gifs.db';
import { GifService } from '@servicesGifs/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [List],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPage {

  // gifs = signal<string[]>(GifsUrls);

  gifsService = inject(GifService);
}
