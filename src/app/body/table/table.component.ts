import { Component, OnInit } from '@angular/core';
import { CareerService } from '../career-service.service';
import { Report } from './../report.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  test: Report[] = [
    { blsEmploymentMay2018: 1, blsEmploymentPerThousandMay2018: 1, blsMeanWageMay2018: 1,
      day: 1, glassdoorJobs: 1, glassdoorSalary: 1, glassdoorSalarySamples: 1,
      indeedJobs: 1, indeedSalary: 1, indeedSalarySamples: 1, title: 'Dev', metro: 'NYC',
      month: 12, year: 2011},
    { blsEmploymentMay2018: 1, blsEmploymentPerThousandMay2018: 1, blsMeanWageMay2018: 1,
      day: 1, glassdoorJobs: 1, glassdoorSalary: 1, glassdoorSalarySamples: 1,
      indeedJobs: 1, indeedSalary: 1, indeedSalarySamples: 1, title: 'Dev', metro: 'NYC',
      month: 12, year: 2011},
    { blsEmploymentMay2018: 1, blsEmploymentPerThousandMay2018: 1, blsMeanWageMay2018: 1,
      day: 1, glassdoorJobs: 1, glassdoorSalary: 1, glassdoorSalarySamples: 1,
      indeedJobs: 1, indeedSalary: 1, indeedSalarySamples: 1, title: 'Dev', metro: 'NYC',
      month: 12, year: 2011},
  ];

  displayedColumns: string[] = ['blsEmploymentMay2018', 'blsEmploymentPerThousandMay2018',
  'blsMeanWageMay2018', 'day', 'glassdoorJobs', 'glassdoorSalary', 'glassdoorSalarySamples',
  'indeedJobs', 'indeedSalary', 'indeedSalarySamples', 'title', 'metro', 'month', 'year'];

  constructor(private careerService: CareerService) { }

  ngOnInit() {
  }

}
