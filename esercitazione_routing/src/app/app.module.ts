import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupereroiComponent } from './supereroi/supereroi.component';
import { SupercattiviComponent } from './supercattivi/supercattivi.component';

@NgModule({
  declarations: [
    AppComponent,
    SupereroiComponent,
    SupercattiviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
