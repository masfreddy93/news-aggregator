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
import { NewsCardComponent } from './components/news-card/news-card.component';
import { NewsFiltersComponent } from './components/news-filters/news-filters.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmationDialog } from './dialogs/confirmation/confirmation.dialog';

@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    MainTemplateComponent,
    NewsCardComponent,
    NewsFiltersComponent,
    ConfirmationDialog,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    TopbarComponent,
    SidebarComponent,
    MainTemplateComponent,
    NewsCardComponent,
    NewsFiltersComponent,
    ConfirmationDialog,
  ],
})
export class SharedModule {}
