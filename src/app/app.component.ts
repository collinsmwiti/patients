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
  {{patient.firstName}}
  </div>
  <div>
  <label>LastName: </label>
  {{patient.lastName}}
  </div>
  <div>
  <label>DOB: </label>
  {{patient.dOB}}
  </div>
  <div>
  <label>Telephone: </label>
  {{patient.telephone}}
  </div>
  <div>
  <label>EmailAddress:</label>
  {{patient.emailAddress}}
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
