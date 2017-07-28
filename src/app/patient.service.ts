import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Patient } from './patient';
// import { PATIENTS } from './mock-patients';

@Injectable()
export class PatientService {
  // //used mock-data
  //   getPatients(): Promise<Patient[]> {
  //     return Promise.resolve(PATIENTS);
  //   }

   //using http
   private patientsUrl = 'api/heroes'; //URL to web api

   //injecting http
   constructor(private http: Http) { }

   //get patients method
   getPatients(): Promise<Patient[]> {
     return this.http.get(this.patientsUrl)
      .toPromise()
      .then(response => response.json().data as Patient[])
      .catch(this.handleError);
   }

   //handling error
   private handleError(error: any): Promise<any> {
     console.error('An error occurred', error); //for demo purposes only
     return Promise.reject(error.messsage || error);
   }

    //Slow motion
    getPatientsSlowly(): Promise<Patient[]> {
      return new Promise(resolve => {
        //Simulate server latency with 2 second delay
        setTimeout(() => resolve(this.getPatients()), 2000);
      })
    }

    //filter patients according to their ids
    getPatient(id: number): Promise<Patient> {
      return this.getPatients().then(patients => patients.find(patient => patient.id === id));
    }
}
