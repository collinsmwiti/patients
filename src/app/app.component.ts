import { Component } from '@angular/core';

//class Patient
export class Patient {
  id: number;
  firstName: string;
  lastName: string;
  dOB: string;
  telephone: string;
  emailAddress: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>{{patient.firstName}} details!</h2>
  <div>
  <label>id: </label>
  {{patient.id}}
  </div>
  <div>
  <label>FirstName: </label>
  <input [(ngModel)]="patient.firstName" placeholder="FirstName">
  </div>
  <div>
  <label>LastName: </label>
  <input [(ngModel)]="patient.lastName" placeholder="LastName">
  </div>
  <div>
  <label>DOB: </label>
  <input [(ngModel)]="patient.dOB" placeholder="DOB">
  </div>
  <div>
  <label>Telephone: </label>
  <input [(ngModel)]="patient.telephone" placeholder="Telephone">
  </div>
  <div>
  <label>EmailAddress:</label>
  <input [(ngModel)]="patient.emailAddress" placeholder="EmailAddress">
  </div>
  `
})
export class AppComponent {
  title = 'Health E-Net';
  patient: Patient = {
    id: 1,
    firstName: 'Douglas',
    lastName: 'Hero',
    dOB: '22nd January 1990',
    telephone: '(+254) 700 123 456',
    emailAddress: 'herodougie@gmail.com'
  };
}
