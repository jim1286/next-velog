export interface Post {
  postId: string;
  title: string;
  subTitle: string;
  contents: string;
  url: string;
  publicStatus: true;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  userId: string;
}
