import { Component } from '@angular/core';

//class Patient
export class Patient {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>{{patient.name}} details!</h2>
  `
})
export class AppComponent {
  title = 'Health E-Net';
  patient: Patient = {
    id: 1,
    name: 'Douglas'
  };
}
