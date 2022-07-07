import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { DoctorModel } from 'src/app/shared/models/doctor.model';
import { PatientModel } from 'src/app/shared/models/patient.model';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
})
export class DashboardTableComponent extends BaseComponent implements OnInit {
  @Input() doctors: DoctorModel.DoctorInfo[] = [];
  @Input() patients: PatientModel.PatientInfo[] = [];

  constructor() {
    super();
  }

  ngOnInit() {}

  onDestroy(): void {
    const me = this;
  }

  convertLabel(str: any): string {
    let label = 'Abailable';
    if (str === false) {
      label = 'Absend';
    }
    return label;
  }
}
