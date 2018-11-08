import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule,
         MatGridListModule,
         MatInputModule,
         MatNativeDateModule } from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatNativeDateModule,
    MatToolbarModule
  ]
})
export class AngularMaterialModule {

}
