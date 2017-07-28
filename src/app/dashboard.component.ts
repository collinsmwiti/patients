import { Component, OnInit } from '@angular/core';

import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
  selector: 'my-dashboard',
  templateUrl:'./dashboard.component.html',
})

export class DashboardComponent implements OnInit{
  patients: Patient[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getPatients().then(patients => this.patients = patients.slice(1, 5));
  }
 }
