import { Component } from '@angular/core';
import { SideMenuOptions } from './side-menu-options/side-menu-options.component';
import { SideMenuHeader } from './side-menu-header/side-menu-header.component';

@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: './side-menu.html',
})
export class SideMenu { }
