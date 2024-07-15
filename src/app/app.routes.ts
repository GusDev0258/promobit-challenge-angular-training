import {Routes} from '@angular/router';
import {HomeComponent} from './features/views/home/home.component';
import {DetailsComponent} from "./features/views/details/details.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./features/views/details/details.component').then((m) => m.DetailsComponent)
  },
];
