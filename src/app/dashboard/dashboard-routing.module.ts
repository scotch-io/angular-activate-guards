import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';
import { AdminGuard } from '../auth/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
    canActivateChild: [AdminGuard],
    children: [
      {
        path: 'super-duper',
        component: SuperDuperComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
