import { FetchDataService } from './../../services/fetch-data.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  title = 'details';
  post;
  constructor(private fetchData: FetchDataService,
              private shared: SharedService) { }

  ngOnInit(){
    this.post = this.shared.getPost();
  }

}
