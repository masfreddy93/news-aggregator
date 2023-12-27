import { Component } from '@angular/core';
import { IMainMenuVoice } from '../../interfaces/i-main-menu-voice.interface';
import { MAIN_MENU_CONFIG } from 'src/app/core/config/main-menu.config';
import { SidebarService } from '../../services/sidebar.service';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(
    protected sidebarService: SidebarService,
    protected responsiveService: ResponsiveService
  ) {}

  MAIN_MENU: IMainMenuVoice[] = MAIN_MENU_CONFIG;
}
