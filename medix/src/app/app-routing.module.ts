import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'doctors',
    loadChildren: () =>
      import('./pages/doctors/doctors.module').then((md) => md.DoctorsModule),
  },
  {
    path: 'appointment',
    loadChildren: () =>
      import('./pages/appointment/appointment.module').then(
        (md) => md.AppointmentModule
      ),
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./pages/departments/departments.module').then(
        (md) => md.DepartmentsModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (md) => md.DashboardModule
      ),
  },
  // {
  //   path: 'calls',
  //   loadChildren: () =>
  //     import('./pages/calls/calls.module').then((md) => md.CallsModule),
  // },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
