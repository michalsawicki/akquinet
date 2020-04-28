import { Posts } from './../interfaces/posts';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Posts>('https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/');
  }
}
