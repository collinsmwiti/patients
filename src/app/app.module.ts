import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { PatientDetailComponent } from './patient-detail.component';
import { PatientsComponent } from './patients.component';
import { PatientService } from './patient.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientDetailComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot([
  {
    path: 'patients',
    component: PatientsComponent
  }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
