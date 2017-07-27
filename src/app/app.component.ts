import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <a routerLink="/patients">Patients</a>
  <router-outlet></router-outlet>
  `,
})

export class AppComponent {
  title = 'Health E-Net';
}
