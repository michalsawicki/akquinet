import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  post;
  value;
  comments;
  siteID;
  ID;
  commentsUrl;
  constructor(private http: HttpClient) { }

  setPost(value) {
    this.post = value;
    return value;
  }

  getPost() {
    this.value = this.setPost(this.post);
    console.log(this.value);
    this.siteID = this.value.site_ID;
    this.ID = this.value.ID;
    this.commentsUrl = `https://public-api.wordpress.com/rest/v1.1/sites/${this.siteID}/posts/${this.ID}/replies/`;
    this.comments = this.http.get(this.comments);
    return this.value;
  }
}
