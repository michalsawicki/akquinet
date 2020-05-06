import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  p = 1;
  data$: BehaviorSubject<any>;

  constructor(
    private shared: SharedService
    ) {}

  ngOnInit() {
    this.data$ = this.shared.data;
  }

  postData(value) {
    this.shared.setPost(value);
  }
}
