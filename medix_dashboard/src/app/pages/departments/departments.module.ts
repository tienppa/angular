import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartmentsRouters } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';

const declarations = [DepartmentsComponent];

const imports: any = [SharedModule, CommonModule, DepartmentsRouters];

@NgModule({
  imports: [...imports],
  exports: [...declarations, ...imports],
  declarations: [...declarations],
  providers: [],
})
export class DepartmentsModule {}
