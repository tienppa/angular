import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentComponent,
  },
];
export const AppointmentRouters = RouterModule.forChild(routes);
