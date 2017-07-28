import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1 style="text-align: center">{{title}}</h1>

  <button class="btn1"><a routerLink="/patients">Patients</a></button>
  <router-outlet></router-outlet>
  `,
})

export class AppComponent {
  title = 'Health E-Net';
}
