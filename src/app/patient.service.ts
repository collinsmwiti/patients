import { Injectable } from '@angular/core';

import { Patient } from './patient';
import { PATIENTS } from './mock-patients';

@Injectable()
export class PatientService {
    getPatients(): Promise<Patient[]> {
      return Promise.resolve(PATIENTS);
    }

    //Slow motion
    getPatientsSlowly(): Promise<Patient[]> {
      return new Promise(resolve => {
        //Simulate server latency with 2 second delay
        setTimeout(() => resolve(this.getPatients()), 2000);
      })
    }
}
