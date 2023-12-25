import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isOpen: boolean = false;

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }
}
