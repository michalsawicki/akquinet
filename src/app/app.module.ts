import { SharedService } from 'src/app/services/shared.service';
import { RouterModule } from '@angular/router';
import { FetchDataService } from './services/fetch-data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsComponent } from './components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: PostsComponent },
      { path: 'posts/:postId', component: PostDetailsComponent }
    ]),
    HttpClientModule
  ],
  providers: [FetchDataService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
