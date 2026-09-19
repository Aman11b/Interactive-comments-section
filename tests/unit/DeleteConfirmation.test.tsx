import DeleteConfirmation from "@/components/comments/DeleteConfirmation";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("DeleteConfirmation", () => {
  it("renders the confirmation message and buttons", () => {
    render(<DeleteConfirmation onCancel={jest.fn()} onConfirm={jest.fn()} />);

    expect(
      screen.getByRole("heading", {
        name: "Delete Comment",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Are you sure you want to delete this comment? This will remove the comment and can't be undone.",
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "NO, CANCEL",
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: "YES, DELETE",
      }),
    ).toBeInTheDocument();
  });

  it("calls onCancel when Cancel is clicked", async () => {
    const user = userEvent.setup();
    const onCancel = jest.fn();
    render(<DeleteConfirmation onCancel={onCancel} onConfirm={jest.fn()} />);
    const cancelButton = screen.getByRole("button", {
      name: "NO, CANCEL",
    });
    await user.click(cancelButton);

    expect(onCancel).toHaveBeenCalled();
  });

  it("calls onConfirm when Delete is clicked", async () => {
    // user
    const user = userEvent.setup();
    // onConfirm mock
    const onConfirm = jest.fn();
    // render
    render(<DeleteConfirmation onCancel={jest.fn()} onConfirm={onConfirm} />);
    // find YES, DELETE
    const confirmButton = screen.getByRole("button", {
      name: "YES, DELETE",
    });
    // click
    await user.click(confirmButton);
    // assert onConfirm was called

    expect(onConfirm).toHaveBeenCalled();
  });
});
