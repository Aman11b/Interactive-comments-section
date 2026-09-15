"use client";

import { CommentListProps } from "@/lib/types";
import { useState } from "react";
import CommentCard from "./CommentCard";

export default function CommentList({ commentData }: CommentListProps) {
  const [comments, setComments] = useState(commentData.comments);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

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

  const handleReplySubmit = (commentId: number, content: string) => {
    const parentComment = comments.find((comment) => comment.id === commentId);

    if (!parentComment) {
      return;
    }
    const newReply = {
      id: Date.now(),
      content,
      createdAt: "just now",
      score: 0,
      replyingTo: parentComment.user.username,
      user: commentData.currentUser,
    };

    setComments((currentComments) =>
      currentComments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [...comment.replies, newReply],
            }
          : comment,
      ),
    );

    setReplyingTo(null);
  };

  return (
    <section className="flex flex-col gap-6">
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment}
          currentUser={commentData.currentUser}
          replyingTo={replyingTo}
          onVote={handleVote}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onReply={(id) => setReplyingTo(id)}
          onReplySubmit={handleReplySubmit}
        />
      ))}
    </section>
  );
}
