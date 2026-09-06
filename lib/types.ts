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

export type ReplayCardProps = {
  reply: Reply;
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
  comment: Comment | Reply;
  isReply?: boolean;
  currentUser: User;
  onVote: (id: number, amount: number) => void;
  onEdit: (id: number, content: string) => void;
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
  onVote: (amount: number) => void;
};

export type CommentActionsProps = {
  isCurrentUser: boolean;
  isEditing: boolean;
  onEdit: () => void;
};

export type CommentFormProps = {
  currentUser: User;
};

export type CommentEditFromProps = {
  content: string;
  isReply: boolean;
  replayingTo?: string;
  onUpdate: (cotent: string) => void;
  onCancel: () => void;
};
