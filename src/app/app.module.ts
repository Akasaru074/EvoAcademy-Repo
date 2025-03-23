import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GnomeComponent } from './gnome/gnome.component';
import { GnomeListComponent } from './gnome-list/gnome-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GnomeComponent,
    GnomeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
