export type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

export type Reply = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo?: string;
  user: User;
};

export type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[];
};

export type CommentCardProps = {
  comment: Comment;
};

export type CommentsData = {
  currentUser: User;
  comments: Comment[];
};

export type CommentListProps = {
  commentData: CommentsData;
};

export type VoteControlProps = {
  score: number;
};
