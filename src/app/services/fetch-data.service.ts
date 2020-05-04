import { HttpData} from './../interfaces/posts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<HttpData>(environment.postsUrl);
  }

  getComments(url: string) {
    return this.http.get(url);
  }


}
