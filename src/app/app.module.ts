import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CarDataComponent} from "./car-data.component";
import {DrivetrainDataComponent} from "./drivetrain-data.component";

@NgModule({
  declarations: [
    AppComponent,
    CarDataComponent,
    DrivetrainDataComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
