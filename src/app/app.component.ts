
import { FetchDataService } from './services/fetch-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Akquinet';
  posts: any;
  data;
  comments: any;
  comment;
  meta;
  url;


  constructor(private fetchData: FetchDataService) { }

  ngOnInit() {
    this.posts = this.fetchData.getData().subscribe(result => {
      this.data = result.posts;
      console.log(this.data);
      for(const resplies of this.data) {
        this.url = resplies.meta.links.replies;
        this.fetchData.getComments(this.url).subscribe(val => {
          this.comments = val;
          console.log(this.comments.comments);
        })
      }
    });
}

}
