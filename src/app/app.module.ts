import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { TitleSelectComponent } from './body/form/form-select.component';
import { TableComponent } from './body/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleSelectComponent,
    HeaderComponent,
    BodyComponent,
    TableComponent
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
