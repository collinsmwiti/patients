import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1 style="text-align: center">{{title}}</h1>
  <nav>
  <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
  <a routerLink="/patients" routerLinkActive="active">Patients</a>
  </nav>
  <router-outlet></router-outlet>
  `,
})

export class AppComponent {
  title = 'Health E-Net';
}
