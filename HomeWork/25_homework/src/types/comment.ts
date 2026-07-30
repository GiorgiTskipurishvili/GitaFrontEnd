export interface User {
  image: string;
  username: string;
}


export interface CommentType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replyingTo?: string;
  replies: CommentType[];
}