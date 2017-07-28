import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'my-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],

providers: [PatientService]
})
export class PatientsComponent implements OnInit {
  title = 'Health E-Net';
  // patients = PATIENTS;
  patients: Patient[];
  selectedPatient: Patient;

  //constructor for injection
  constructor(
    private patientService: PatientService,
    private router: Router) { }

  getPatients(): void {
  this.patientService.getPatients().then(patients => this.patients = patients);
  }

  ngOnInit():void {
    this.getPatients();
  }

//select patient by clicking
  onSelect(patient: Patient): void {
    this.selectedPatient = patient;
  }

  // navigate imperatively by telling the router where to go
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPatient.id]);
  }

//   //add Patient details
//   add(firstName: string): void {
//   firstName = firstName.trim();
//   if (!firstName) { return; }
//   this.patientService.create(firstName)
//     .then(patient => {
//       this.patients.push(patient);
//       this.selectedPatient = null;
//     });
// }

}
