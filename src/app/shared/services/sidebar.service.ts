import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isOpen: boolean = window.innerWidth > 768;

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }
}
