import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IconaMeteoComponent } from './icona-meteo/icona-meteo.component';

@NgModule({
  declarations: [
    AppComponent,
    IconaMeteoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
