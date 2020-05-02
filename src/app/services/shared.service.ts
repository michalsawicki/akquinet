import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  post;
  constructor() { }

  setPost(value) {
    this.post = value;
    return value;
  }

  getPost() {
    return this.setPost(this.post);
  }
}
