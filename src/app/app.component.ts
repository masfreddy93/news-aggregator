import { Component, HostListener, OnInit } from '@angular/core';
import { ResponsiveService } from './shared/services/responsive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _responsiveService: ResponsiveService) {}

  //solution founded online to listen the device's change of innerWidth (https://stackoverflow.com/questions/35527456/angular-window-resize-event)
  @HostListener('window:resize', ['$event'])
  checkIsMobile(): void {
    this._responsiveService.isMobile = window.innerWidth < 768;
  }

  ngOnInit(): void {
    this.checkIsMobile();
  }
}
