import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CareerService } from '../career-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class TitleSelectComponent implements OnInit {
  options: string[] = ['Registered Nurse', 'Elementary Teacher'];
  filteredOptions: Observable<string[]>;

  searchForm = this.formBuilder.group({
    title: [''],
    startingDate: [''],
    endingDate: ['']
  });
  constructor(private careerService: CareerService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.filteredOptions = this.searchForm.controls.title.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    console.log(this.searchForm);
  }
}
