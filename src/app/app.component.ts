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
  <h1>{{title}}</h1>
  <h2>My Patients</h2>
  <ul class="patients">
  <li *ngFor="let patient of patients" (click)="onSelect(patient)" [class.selected]="patient=== selectedPatient">
  <!--each patient goes here-->
  <span class="badge">{{patient.id}}</span> {{patient.firstName}}, {{patient.lastName}}, {{patient.dOB}}, {{patient.telephone}}, {{patient.emailAddress}}
  </li>
  </ul>
  <div *ngIf="selectedPatient">
  <h2>{{selectedPatient.firstName}} details!</h2>
  <div>
  <label>id: </label>
  {{selectedPatient.id}}
  </div>
  <div>
  <label>FirstName: </label>
  <input [(ngModel)]="selectedPatient.firstName" placeholder="FirstName">
  </div>
  <div>
  <label>LastName: </label>
  <input [(ngModel)]="selectedPatient.lastName" placeholder="LastName">
  </div>
  <div>
  <label>DOB: </label>
  <input [(ngModel)]="selectedPatient.dOB" placeholder="DOB">
  </div>
  <div>
  <label>Telephone: </label>
  <input [(ngModel)]="selectedPatient.telephone" placeholder="Telephone">
  </div>
  <div>
  <label>EmailAddress:</label>
  <input [(ngModel)]="selectedPatient.emailAddress" placeholder="EmailAddress">
  </div>
  </div>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .patients {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 40em;
  }
  .patients li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .patients li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .patients li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .patients .text {
    position: relative;
    top: -3px;
  }
  .patients .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent {
  title = 'Health E-Net';
  patients = PATIENTS;
  selectedPatient: Patient;
  // patient: Patient = {
  //   id: 1,
  //   firstName: 'Douglas',
  //   lastName: 'Hero',
  //   dOB: '22nd January 1990',
  //   telephone: '(+254) 700 123 456',
  //   emailAddress: 'herodougie@gmail.com'
  // };
}
