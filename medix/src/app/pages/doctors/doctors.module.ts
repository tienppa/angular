import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorModifyComponent } from './doctor-list/doctor-modify/doctor-modify.component';
import { DoctorsRouters } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { NgxPaginationModule } from 'ngx-pagination';

const declarations = [
  DoctorsComponent,
  DoctorListComponent,
  DoctorAddComponent,
  DoctorModifyComponent,
];

const imports: any = [
  SharedModule,
  CommonModule,
  DoctorsRouters,
  NgxPaginationModule,
];

@NgModule({
  imports: [...imports],
  exports: [...declarations, ...imports],
  declarations: [...declarations],
  providers: [DoctorService],
})
export class DoctorsModule {}
