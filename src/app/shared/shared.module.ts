import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [TopbarComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  exports: [TopbarComponent],
})
export class SharedModule {}
