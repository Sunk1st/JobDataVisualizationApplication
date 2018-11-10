import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule,
         MatGridListModule,
         MatInputModule,
         MatNativeDateModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatToolbarModule
  ]
})
export class AngularMaterialModule {

}
