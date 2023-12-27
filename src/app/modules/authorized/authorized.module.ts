import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedRoutingModule } from './authorized-routing.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DashboardPage],
  imports: [CommonModule, AuthorizedRoutingModule, SharedModule],
})
export class AuthorizedModule {}
