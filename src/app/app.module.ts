import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, MatGridListModule, MatInputModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleSelectComponent } from './body/title-select/title-select.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleSelectComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    BrowserAnimationsModule, BrowserModule, FormsModule, MatAutocompleteModule,
    MatFormFieldModule, MatGridListModule, MatInputModule, MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
