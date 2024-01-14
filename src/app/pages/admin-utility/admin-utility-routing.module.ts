import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUtilityPage } from './admin-utility.page';

const routes: Routes = [
  {
    path: '',
    component: AdminUtilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUtilityPageRoutingModule {}
