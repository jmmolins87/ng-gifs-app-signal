import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import type { MenuOption } from '@interfacesGifs/menu-option.interface';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptions {

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs populares',
      route: '/dashboard/trending'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscando',
      subLabel: 'Buscar Gids',
      route: '/dashboard/search'
    }
  ]
}
