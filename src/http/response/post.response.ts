export interface GetPostAllResponse {
  postId: number;
  title: string;
  subTitle: string;
  contents: string;
  url: string;
  publicStatus: true;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  userId: number;
}
