import { Subscription } from 'rxjs';
import { FetchDataService } from './../../services/fetch-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  title = 'details';
  postId;
  dataSubscribe: Subscription;
  commentsSub: Subscription;
  post;
  content;
  comments$;
  comments;

  constructor(
    private fetchData: FetchDataService,
    private shared: SharedService,
    private route: ActivatedRoute,
  ) { }


  // gets data from shared service from data variable
  ngOnInit() {
    this.getId(); // get id of post
    this.dataSubscribe = this.shared.data.subscribe(posts => {
      if (posts) {
        // retrieve posts from recieved object and checks if posts exist in object
        if (posts.length > this.postId) { // if exists sets post id, content and comments to variable
          this.post = posts[this.postId];
          this.content =  this.post.content;
          this.commentsSub = this.fetchData.getComments(this.post.meta.links.replies)
          // comments are taken from returned object API url and is passed to getComments method
          // in fetch-data service to get response from http
          .subscribe( (data: any) => this.comments = data.comments);

        } else {
          this.post = { title: 'Post does not exist' };
          // if there is no post return response in html post-detail component
        }
      }
    });
  }

  getId(): void {
    this.postId = +this.route.snapshot.paramMap.get('postId');
  }

  ngOnDestroy() {
    this.dataSubscribe.unsubscribe();
    this.commentsSub.unsubscribe();
  }

}
