import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorModifyComponent } from './doctor-modify/doctor-modify.component';
import { DoctorsRouters } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';

const declarations = [
  DoctorsComponent,
  DoctorListComponent,
  DoctorModifyComponent,
];

const imports: any = [SharedModule, CommonModule, DoctorsRouters];

@NgModule({
  imports: [...imports],
  exports: [...declarations, ...imports],
  declarations: [...declarations],
  providers: [],
})
export class DoctorsModule {}
