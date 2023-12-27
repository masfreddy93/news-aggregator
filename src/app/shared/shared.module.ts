import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MainTemplateComponent } from './components/main-template/main-template.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopbarComponent, SidebarComponent, MainTemplateComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  exports: [TopbarComponent, SidebarComponent, MainTemplateComponent],
})
export class SharedModule {}
