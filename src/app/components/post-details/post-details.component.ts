import { ActivatedRoute } from '@angular/router';
import { Posts } from './../../interfaces/posts';
import { FetchDataService } from './../../services/fetch-data.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  info = 'details';
  post;
  posts: Posts[];
  comments;
  constructor(private fetchData: FetchDataService,
              private shared: SharedService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // this.post = this.shared.getPost();
    // console.log(this.post);
    this.route.paramMap.subscribe(params => {
      this.post = this.posts[+params.get('postId')];
    }
    );

  }

}
