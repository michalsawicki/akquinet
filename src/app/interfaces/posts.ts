export interface Post {
  ID: number;
  URL: string;
  content: string;
  meta: { links: string }
}

interface Comments extends Post {
  comments: object;
}

export interface HttpData {
  posts: Post[];
}
