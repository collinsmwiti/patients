import { Component, OnInit } from '@angular/core';
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
