import CommentActions from "@/components/comments/CommentActions";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";

describe("CommentActions", () => {
  it("renders Delete and Edit Button for ther current User", () => {
    render(
      <CommentActions
        isCurrentUser={true}
        isEditing={false}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
        onReply={jest.fn()}
      />,
    );

    expect(
      screen.getByRole("button", {
        name: "Delete",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "Edit",
      }),
    ).toBeInTheDocument();
  });

  it("render Reply button for Another user", () => {
    render(
      <CommentActions
        isCurrentUser={false}
        isEditing={false}
        onEdit={jest.fn()}
        onDelete={jest.fn()}
        onReply={jest.fn()}
      />,
    );

    expect(screen.getByRole("button", { name: "Reply" })).toBeInTheDocument();

    expect(
      screen.queryByRole("button", {
        name: "Delete",
      }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("button", {
        name: "Edit",
      }),
    ).not.toBeInTheDocument();
  });

  it("disables Delete and Edit buttons while editing", () => {
    render(
      <CommentActions
        isCurrentUser={true}
        isEditing={true}
        onDelete={jest.fn()}
        onEdit={jest.fn()}
        onReply={jest.fn()}
      />,
    );

    expect(
      screen.getByRole("button", {
        name: "Delete",
      }),
    ).toBeDisabled();

    expect(
      screen.getByRole("button", {
        name: "Edit",
      }),
    ).toBeDisabled();
  });

  it("calls onDelete when Delete is Clicked", async () => {
    const user = userEvent.setup();
    const onDelete = jest.fn();
    render(
      <CommentActions
        isCurrentUser={true}
        isEditing={false}
        onDelete={onDelete}
        onEdit={jest.fn()}
        onReply={jest.fn()}
      />,
    );

    const deleteButton = screen.getByRole("button", {
      name: "Delete",
    });

    await user.click(deleteButton);

    expect(onDelete).toHaveBeenCalled();
  });

  it("calls onEdit when edit is Clicked", async () => {
    const user = userEvent.setup();
    const onEdit = jest.fn();
    render(
      <CommentActions
        isCurrentUser={true}
        isEditing={false}
        onDelete={jest.fn()}
        onEdit={onEdit}
        onReply={jest.fn()}
      />,
    );

    const editButton = screen.getByRole("button", {
      name: "Edit",
    });

    await user.click(editButton);

    expect(onEdit).toHaveBeenCalled();
  });

  it("calls onReply when Reply is clicked", async () => {
    const user = userEvent.setup();
    const onReply = jest.fn();
    render(
      <CommentActions
        isCurrentUser={false}
        isEditing={false}
        onDelete={jest.fn()}
        onEdit={jest.fn()}
        onReply={onReply}
      />,
    );

    const replyButton = screen.getByRole("button", {
      name: "Reply",
    });

    await user.click(replyButton);

    expect(onReply).toHaveBeenCalled();
  });
});
