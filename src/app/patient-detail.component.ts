import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
//switchmap
import 'rxjs/add/operator/switchMap';

import { PatientService } from './patient.service';
import { Patient } from './patient';

@Component({
  selector: 'patient-detail',
   templateUrl: './patient-detail.component.html',
   styleUrls: [ './patient-detail.component.css' ]
})
export class PatientDetailComponent implements OnInit {
  @Input() patient: Patient;

//injecting
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  //ngOnInit lifecycle hook
  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.patientService.getPatient(+params.get('id')))
    .subscribe(patient => this.patient = patient);
  }

  //navigating back
  goBack(): void {
  this.location.back();
}

// //save method
// save(): void {
//   this.patientService.update(this.patient)
//     .then(() => this.goBack());
// }
}
