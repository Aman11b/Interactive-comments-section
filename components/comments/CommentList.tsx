import { CommentListProps } from "@/lib/types";
import CommentCard from "./CommentCard";

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
    </section>
  );
}
