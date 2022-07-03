import { RouterModule, Routes } from '@angular/router';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DoctorsComponent } from './doctors.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent,
    children: [
      {
        path: 'add',
        component: DoctorAddComponent,
      },
      {
        path: '',
        component: DoctorListComponent,
      },
    ],
  },
];

export const DoctorsRouters = RouterModule.forChild(routes);
