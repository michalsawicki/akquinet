import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  p: any= [];
  posts: any;
  data;
  data$;
  dataSubscription: Subscription;
  comments: any;
  url: string;
  value: any;


  constructor(
    private shared: SharedService
    ) {}

  ngOnInit() {
    this.dataSubscription = this.shared.data.subscribe((data) => {
      this.data = data;
    });
    this.data$ = this.shared.data;
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  postData(value) {
    this.value = value;
    this.shared.setPost(value);
  }
}
