import CommentCard from "@/components/comments/CommentCard";
import { render, screen } from "@testing-library/react";

const comment = {
  id: 1,
  content: "This is a test comment",
  createdAt: "1 month ago",
  score: 10,
  user: {
    username: "amy",
    image: {
      png: "/images/avatars/image-amyrobson.png",
      webp: "/images/avatars/image-amyrobson.webp",
    },
  },
  replies: [],
};

const currentUser = {
  username: "maxblagun",
  image: {
    png: "/images/avatars/image-maxblagun.png",
    webp: "/images/avatars/image-maxblagun.webp",
  },
};

const currentUserComment = {
  ...comment,
  user: {
    ...comment.user,
    username: currentUser.username,
  },
};

describe("CommentCard", () => {
  it("renders the comment information", () => {
    render(
      <CommentCard
        comment={comment}
        currentUser={currentUser}
        replyingTo={null}
        onVote={jest.fn()}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
        onReply={jest.fn()}
        onReplySubmit={jest.fn()}
      />,
    );

    expect(screen.getByText("amy")).toBeInTheDocument();
    expect(screen.getByText("This is a test comment")).toBeInTheDocument();
    expect(screen.getByText("1 month ago")).toBeInTheDocument();
  });

  it("shows the current user indicator", () => {
    render(
      <CommentCard
        comment={currentUserComment}
        currentUser={currentUser}
        replyingTo={null}
        onVote={jest.fn()}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
        onReply={jest.fn()}
        onReplySubmit={jest.fn()}
      />,
    );
    expect(screen.getByText("you")).toBeInTheDocument();
  });
});
