import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { PatientModel } from 'src/app/shared/models/patient.model';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent extends BaseComponent implements OnInit {
  doctors: DoctorModel.DoctorInfo[] = [];
  patients: PatientModel.PatientInfo[] = [];

  constructor(
    private doctorService: DoctorService,
    private patientService: PatientService
  ) {
    super();
  }

  ngOnInit() {
    const me = this;
    me.getDoctors();
    me.getPatients();
  }

  onDestroy(): void {
    const me = this;
    me.getDoctors();
    me.getPatients();
  }

  getDoctors() {
    const me = this;
    me.doctorService.getDoctors().subscribe({
      next: (res) => {
        me.doctors = [...(res as any)];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getPatients() {
    const me = this;
    me.patientService.getPatients().subscribe({
      next: (res) => {
        me.patients = [...(res as any)];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
