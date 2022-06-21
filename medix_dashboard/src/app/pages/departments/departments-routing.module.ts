import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentsComponent,
  },
];

export const DepartmentsRouters = RouterModule.forChild(routes);
