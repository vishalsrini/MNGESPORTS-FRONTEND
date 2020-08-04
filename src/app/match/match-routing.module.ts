import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchPage } from './match.page';
import { DashboardGuard } from '../dashboard/dashboard.guard';

const routes: Routes = [
  {
    path: '',
    component: MatchPage,
    canActivate: [DashboardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchPageRoutingModule {}
