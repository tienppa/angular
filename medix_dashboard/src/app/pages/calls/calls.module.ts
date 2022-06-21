import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CallsRouters } from './calls-routing.module';
import { CallsComponent } from './calls.component';

const declarations = [CallsComponent];

const imports: any = [SharedModule, CommonModule, CallsRouters];

@NgModule({
  imports: [...imports],
  exports: [...declarations, ...imports],
  declarations: [...declarations],
  providers: [],
})
export class CallsModule {}
