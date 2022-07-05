import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppointmentService } from 'src/app/shared/services/appointment.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppointmentDeleteComponent } from './appointment-delete/appointment-delete.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentModifyComponent } from './appointment-list/appointment-modify/appointment-modify.component';
import { AppointmentRouters } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';

const declarations = [
  AppointmentComponent,
  AppointmentListComponent,
  AppointmentDeleteComponent,
  AppointmentModifyComponent,
];

const imports: any = [
  SharedModule,
  CommonModule,
  AppointmentRouters,
  NgxPaginationModule,
];

@NgModule({
  imports: [...imports],
  exports: [...declarations, ...imports],
  declarations: [...declarations],
  providers: [AppointmentService],
})
export class AppointmentModule {}
