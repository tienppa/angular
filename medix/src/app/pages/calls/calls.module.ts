import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CallNavComponent } from './call-nav/call-nav.component';
import { CallProfileComponent } from './call-profile/call-profile.component';
import { CallsRouters } from './calls-routing.module';
import { CallsComponent } from './calls.component';

const declarations = [CallsComponent, CallNavComponent, CallProfileComponent];

const imports: any = [SharedModule, CommonModule, CallsRouters];

@NgModule({
  imports: [...imports],
  exports: [...declarations, ...imports],
  declarations: [...declarations],
  providers: [],
})
export class CallsModule {}
