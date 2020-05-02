import { FetchDataService } from './../../services/fetch-data.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  data: any;
  comments: any;
  url: string;
  value: any;


  constructor(private fetchData: FetchDataService,
              private shared: SharedService) { }

  ngOnInit() {
    this.posts = this.fetchData.getData().subscribe(result => {
      this.data = result.posts;
      for (const replies of this.data) {
        this.url = replies.meta.links.replies;
        this.fetchData.getComments(this.url).subscribe(value => {
          this.comments = value;
        });
      }
    });
}

postData(value) {
  this.value = value;
  this.shared.setPost(value);
}
}
