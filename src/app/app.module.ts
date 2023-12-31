import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeIt);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'it-IT' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
