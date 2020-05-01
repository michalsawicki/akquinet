import { map } from 'rxjs/operators';

import { Posts } from './../interfaces/posts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  response;
  postsUrl = 'https://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/posts/?number=5';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Posts>(this.postsUrl);
  }

  getComments(url: string) {
    return this.http.get(url);
  }

}
