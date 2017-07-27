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

//array of patients
const PATIENTS: Patient[] = [
  { id: 1, firstName: 'Douglas', lastName: 'Hero', dOB: '22nd January 1990', telephone: '(+254) 700 123 456', emailAddress: 'herodougie@gmail.com'  },
  { id: 2, firstName: 'Che', lastName: 'Guevara', dOB: '11th June 1977', telephone: '(+97) 7834 234 744', emailAddress: 'cheguevara@yahoo.com' },
  { id: 3, firstName: 'Snoop', lastName: 'Dogg', dOB: '5th May 1955', telephone: '(+44) 4343 434 4544', emailAddress: 'doggsnoopy@gmail.com' },
  { id: 4, firstName: 'Even', lastName: 'Stevens', dOB: '23rd January 1995', telephone: '(+51) 3232 4333 323', emailAddress: 'steveneven@ovi.com'},
  { id: 5, firstName: 'Zeus', lastName: 'Olympus', dOB: '1st December 1989', telephone: '(+254) 734 333 555', emailAddress: 'godofthunder@gmail.com'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h2>My Patients</h2>
  <ul class="patients">
  <li *ngFor="let patient of patients">
  <!--each patient goes here-->
  <span class="badge">{{patient.id}}</span> {{patient.firstName}}, {{patient.lastName}}, {{patient.dOB}}, {{patient.telephone}}, {{patient.emailAddress}}
  </li>
  </ul>
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
  patients = PATIENTS;
  // patient: Patient = {
  //   id: 1,
  //   firstName: 'Douglas',
  //   lastName: 'Hero',
  //   dOB: '22nd January 1990',
  //   telephone: '(+254) 700 123 456',
  //   emailAddress: 'herodougie@gmail.com'
  // };
}
