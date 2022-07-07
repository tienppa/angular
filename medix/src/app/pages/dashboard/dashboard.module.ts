import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { PatientService } from 'src/app/shared/services/patient.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardBoxComponent } from './dashboard-box/dashboard-box.component';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component';
import { DashboardRouters } from './dashboard-routing.module';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';
import { DashboardComponent } from './dashboard.component';

const declarations = [
  DashboardComponent,
  DashboardBoxComponent,
  DashboardTableComponent,
  DashboardChartComponent,
];

const imports: any = [SharedModule, CommonModule, DashboardRouters];

@NgModule({
  imports: [...imports],
  exports: [...declarations, ...imports],
  declarations: [...declarations],
  providers: [DoctorService, PatientService],
})
export class DashboardModule {}
