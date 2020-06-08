import { Component, OnInit } from '@angular/core';
import { Result } from '../result.model';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  results: Result[] = [new Result("2020-06-05", "Common in Both", "5", "Query Text"),
  new Result("2020-06-05", "Only in Left", "5", "Query Text"),
  new Result("2020-06-05", "Only in Right", "5", "Query Text")];

  constructor() { }

  ngOnInit() {
  }

}
