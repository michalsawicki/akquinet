# Akquinet

Author: Michał Sawicki
Created: Apr/May '20

Application for recieving posts from public wordpress API.
User can browse post list by title and navigate through pagination and go to each post where specified details is included with list of comments for each post.

## Installation 

Application runs on development server.
To use this app clone respository to Your computer using
```
git clone git@github.com:michalsawicki/akquinet.git
```
and run
```
npm install
```

## Project structure

```
--app
|---- components
        |-- back-to-top
        |-- post-details
        |-- posts
|---- interfaces
        |-- posts.ts
|---- services
        |-- fetch-data.service.ts
        |-- shared.service.ts
```

### Components
```back-to-top``` component holds logic for scrolling to top of the page. In case viewed post has lots of content or list of comments is long(or both) helps to navigate to top of the page 

```post-details``` component represents component with 1 post opened on click event. Componenets get value of this post from method in shared.service.ts and holds its' value not to trigger get method every time and holds data linked to specific post with query params. 

```posts``` component represent the list of all recieved posts and it's being displayed in table.
Fetch-data service gets object of posts from ```getData()```. ```Shared.service.ts```  converts to object of posts and is used as a connector to communication between components. Method ```postData()``` is triggered on click event and passes clicked object to method ```setPost()``` in shared.service.ts.

```posts.ts``` interface types of data that object passes (as statically typed). 


### Libraries and external sources
```
Bootstrap 4
rxjs
ngx-pagination 
```

##### Features
* Loading spinner for end-user to be aware that data is being processed and application runs  [Bootstrap built-in component]
* Pagination set default to 10 posts per page) [ngx-pagination module]
