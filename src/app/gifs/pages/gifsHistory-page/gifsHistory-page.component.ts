import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '@servicesGifs/gifs.service';
import { List } from "@componentsGifs/list/list.component";

@Component({
  selector: 'gifs-history',
  imports: [List],
  templateUrl: './gifsHistory-page.component.html'
})
export default class GifsHistory {

  gifsService = inject(GifService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map( params => params['query']))
  );

  gifsByKey = computed(() => this.gifsService.getHistoryGifs(this.query()));
}
