import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from '@componentsGifs/side-menu/side-menu';

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashboard-page.component.html',
})
export default class DashboardPage { }
