import { RouterModule, Routes } from '@angular/router';
import { CallsComponent } from './calls.component';

const routes: Routes = [
  {
    path: '',
    component: CallsComponent,
  },
];

export const CallsRouters = RouterModule.forChild(routes);
