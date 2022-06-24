import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DepartmentChartComponent } from './department-chart/department-chart.component';
import { DepartmentTableComponent } from './department-table/department-table.component';
import { DepartmentsRouters } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';

const declarations = [
  DepartmentsComponent,
  DepartmentChartComponent,
  DepartmentTableComponent,
];

const imports: any = [SharedModule, CommonModule, DepartmentsRouters];

@NgModule({
  imports: [...imports],
  exports: [...declarations, ...imports],
  declarations: [...declarations],
  providers: [],
})
export class DepartmentsModule {}
