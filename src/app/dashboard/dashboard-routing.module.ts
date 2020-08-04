import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { DashboardGuard } from './dashboard.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    canActivate: [DashboardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
