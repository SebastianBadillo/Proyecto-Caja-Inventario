import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: '**', redirectTo: '' },
];
export const HomeRoutes = RouterModule.forChild(routes);
