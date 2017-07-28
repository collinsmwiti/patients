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
  // patient: Patient = {
  //   id: 1,
  //   firstName: 'Douglas',
  //   lastName: 'Hero',
  //   dOB: '22nd January 1990',
  //   telephone: '(+254) 700 123 456',
  //   emailAddress: 'herodougie@gmail.com'
  // };
}
