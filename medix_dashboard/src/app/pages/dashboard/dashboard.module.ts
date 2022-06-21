import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRouters } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

const declarations = [DashboardComponent];

const imports: any = [SharedModule, CommonModule, DashboardRouters];

@NgModule({
  imports: [...imports],
  exports: [...declarations, ...imports],
  declarations: [...declarations],
  providers: [],
})
export class DashboardModule {}
