export interface Posts {
  found: number;
  posts: object;
}

interface Comments extends Posts {
  comments: object;
}
