import { BehaviorSubject } from 'rxjs';
import { FetchDataService } from './fetch-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  post;
  posts$;
  data: BehaviorSubject<any> = new BehaviorSubject(null); // holds the value that needs to be shared with other components
  url;
  comments;
  postId;


  constructor(private fetchData: FetchDataService) {
    this.posts$ = this.fetchData.getData().subscribe(result => {
      this.data.next(result.posts);
      // gets http response result and converts to object with posts from API
    });
  }

  setPost(value) {
    this.post = value;
    // gets value of clicked post and sets it to post variable
  }

  getPost() {
    return this.post;
    // retrieves object of post from setPost to handover to components
  }
}
