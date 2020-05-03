import { Observable } from 'rxjs';
import { Posts } from './../interfaces/posts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  postsUrl = 'https://public-api.wordpress.com/rest/v1/sites/en.blog.wordpress.com/posts/?number=1';
  constructor(private http: HttpClient) { }

  getData(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.postsUrl);
  }

  getComments(url: string) {
    return this.http.get(url);
  }


}
