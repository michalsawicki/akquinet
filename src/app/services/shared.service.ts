import { BehaviorSubject } from 'rxjs';
import { FetchDataService } from './fetch-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  post;
  posts$;
  data: BehaviorSubject<any> = new BehaviorSubject(null);
  url;
  comments;
  constructor(private fetchData: FetchDataService) {

    this.posts$ = this.fetchData.getData().subscribe(result => {
      this.data.next(result.posts);
    });
  }

  setPost(value) {
    this.post = value;
  }

  getPost() {
    return this.post;
  }
}
