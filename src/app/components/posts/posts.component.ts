import { FetchDataService } from './../../services/fetch-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title = 'Akquinet';
  posts: any;
  data;
  comments: any;
  comment;
  meta;
  url;
  postId;


  constructor(private fetchData: FetchDataService) { }

  ngOnInit() {
    this.posts = this.fetchData.getData().subscribe(result => {
      this.data = result.posts;
      // console.log(this.data);
      for(const replies of this.data) {
        this.url = replies.meta.links.replies;
        this.fetchData.getComments(this.url).subscribe(val => {
          this.comments = val;
          console.log(this.comments.comments);
        })
      }
    });
}
}
