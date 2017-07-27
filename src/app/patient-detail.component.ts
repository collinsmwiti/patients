import { Component, Input } from '@angular/core';
import { Patient } from './patient';

@Component({
  selector: 'patient-detail',
  template: `
  <!--Details of a patient-->
  <div *ngIf="patient">
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
  </div>
  `
})
export class PatientDetailComponent {
  @Input() patient: Patient;
}
