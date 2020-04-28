import { FetchDataService } from './services/fetch-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Akquinet';
  posts$;

  constructor(private fetchData: FetchDataService) {}

  ngOnInit() {
    this.posts$ = this.fetchData.getData().subscribe(val => console.log(val.posts));
  }
}
