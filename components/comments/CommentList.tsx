import { CommentListProps } from "@/lib/types";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

export default function CommentList({ commentData }: CommentListProps) {
  return (
    <section className="flex flex-col gap-6">
      {commentData.comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          currentUser={commentData.currentUser}
        />
      ))}
      <CommentForm currentUser={commentData.currentUser} />
    </section>
  );
}
