import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentRouters } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';

const declarations = [AppointmentComponent, AppointmentListComponent];

const imports: any = [SharedModule, CommonModule, AppointmentRouters];

@NgModule({
  imports: [...imports],
  exports: [...declarations, ...imports],
  declarations: [...declarations],
  providers: [],
})
export class AppointmentModule {}
