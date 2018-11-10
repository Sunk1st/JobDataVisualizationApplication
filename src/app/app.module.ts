import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';
import { TitleSelectComponent } from './body/title-select/title-select.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { DateSelectComponent } from './body/date-select/date.select.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleSelectComponent,
    HeaderComponent,
    BodyComponent,
    DateSelectComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
