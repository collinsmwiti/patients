import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'my-patients',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h2>My Patients</h2>
  <ul class="patients">
  <!--To select a patient in order to see their details-->
  <li *ngFor="let patient of patients" (click)="onSelect(patient)" [class.selected]="patient=== selectedPatient">
  <!--each patient goes here-->
  <span class="badge">{{patient.id}}</span> {{patient.firstName}}, {{patient.lastName}}, {{patient.dOB}}, {{patient.telephone}}, {{patient.emailAddress}}
  </li>
  </ul>
  <patient-detail [patient]="selectedPatient"></patient-detail>
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
`],
providers: [PatientService]
})
export class PatientsComponent implements OnInit {
  title = 'Health E-Net';
  // patients = PATIENTS;
  patients: Patient[];
  selectedPatient: Patient;
  constructor(private patientService: PatientService) { }

  getPatients(): void {
  this.patientService.getPatients().then(patients => this.patients = patients);
  }

  ngOnInit():void {
    this.getPatients();
  }

  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }
  // patient: Patient = {
  //   id: 1,
  //   firstName: 'Douglas',
  //   lastName: 'Hero',
  //   dOB: '22nd January 1990',
  //   telephone: '(+254) 700 123 456',
  //   emailAddress: 'herodougie@gmail.com'
  // };
}
