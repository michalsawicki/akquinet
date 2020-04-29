
import { Posts } from './../interfaces/posts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  apiUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number=5';
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<Posts>(this.apiUrl);
  }
}
