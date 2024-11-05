type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Post = PostType[];

export type { PostType, Post };
