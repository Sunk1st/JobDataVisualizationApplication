import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-title-select',
  templateUrl: './title-select.component.html',
  styleUrls: ['./title-select.component.css']
})
export class TitleSelectComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Registered Nurse', 'Elementary Teacher'];
  filteredOptions: Observable<string[]>;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'career',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/jobIcon.svg'));
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
