import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MdProgressSpinnerModule,
          MdCheckboxModule,
          MdButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { OutputComponent } from './output/output.component';
import { MoneyService } from './services/money.service';
import { GlobalVarsService } from './services/global-vars.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    OutputComponent
  ],
  imports: [
    MdProgressSpinnerModule,
    FormsModule,
    MdButtonModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GlobalVarsService,
    MoneyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
