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
  postData;
  content;
  comments;

  dataSub$: Subscription;
  commentsSub$: Subscription;

  constructor(
    private fetchData: FetchDataService,
    private shared: SharedService,
    private route: ActivatedRoute,
  ) { }


  // gets data from shared service from data variable
  ngOnInit() {
    this.getId();
    this.getData();
  }

  getData(): void {
    this.dataSub$ = this.shared.data.subscribe(posts => {
      if (posts) {
        // retrieve posts from recieved object and checks if posts exist in object
        if (posts.length > this.postId + 1) { // if exists sets post id, content and comments to variable
          this.postData = posts[this.postId];
          this.content =  this.postData.content;
          this.getComments();
        } else {
          this.postData = { title: 'Post does not exist' };
        }
      }
    });
  }

  getComments() {
    this.commentsSub$ = this.fetchData.getComments(this.postData.meta.links.replies)
      .subscribe( (data: any) => this.comments = data.comments);
  }

  getId(): void {
    this.postId = +this.route.snapshot.paramMap.get('postId') - 1;
  }

  ngOnDestroy() {
    this.dataSub$.unsubscribe();
    this.commentsSub$.unsubscribe();
  }

}
