"use client";

import { CommentListProps } from "@/lib/types";
import { useState } from "react";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

export default function CommentList({ commentData }: CommentListProps) {
  const [comments, setComments] = useState(commentData.comments);
  const handleDelete = (id: number) => {
    setComments((currentComments) =>
      currentComments
        .filter((comment) => comment.id !== id)
        .map((comment) => ({
          ...comment,
          replies: comment.replies.filter((reply) => reply.id !== id),
        })),
    );
  };

  const handleVote = (id: number, amount: number) => {
    setComments((currentComments) =>
      currentComments.map((comment) => {
        // Top Level
        if (comment.id === id) {
          return {
            ...comment,
            score: Math.max(0, comment.score + amount),
          };
        }
        // Reply
        if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: comment.replies.map((reply) =>
              reply.id === id
                ? { ...reply, score: Math.max(0, reply.score + amount) }
                : reply,
            ),
          };
        }
        return comment;
      }),
    );
  };

  const handleEdit = (id: number, content: string) => {
    setComments((currentComments) =>
      currentComments.map((comment) => {
        // Top level comment
        if (comment.id === id) {
          return {
            ...comment,
            content,
          };
        }
        // replay
        if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: comment.replies.map((reply) =>
              reply.id === id ? { ...reply, content } : reply,
            ),
          };
        }
        return comment;
      }),
    );
  };
  return (
    <section className="flex flex-col gap-6">
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          currentUser={commentData.currentUser}
          onVote={handleVote}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
      <CommentForm currentUser={commentData.currentUser} />
    </section>
  );
}
