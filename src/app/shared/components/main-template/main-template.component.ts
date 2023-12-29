/*
This template is the main template to use in different pages (login, tasks etc..). The purpose of this template is the UI/UX coherence between different parts of the PWA (especially to have the same loading graphic)
*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss'],
})
export class MainTemplateComponent {
  @Input() isLoading: boolean = false;
  @Input() hasErrors: boolean = false;

  reloadPage(): void {
    window.location.reload();
  }
}
