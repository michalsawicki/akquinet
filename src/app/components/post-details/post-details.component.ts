import { Subscription } from 'rxjs';
import { FetchDataService } from './../../services/fetch-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Pipe } from '@angular/core';

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

  ngOnInit() {
    this.getId();
    this.dataSubscribe = this.shared.data.subscribe(posts => {
      if (posts) {
        if (posts.length > this.postId) {
          this.post = posts[this.postId];
          this.content =  this.post.content;
          this.commentsSub = this.fetchData.getComments(this.post.meta.links.replies)
          .subscribe( (data: any) => this.comments = data.comments);

        } else {
          this.post = { title: 'Post does not exist' };
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
