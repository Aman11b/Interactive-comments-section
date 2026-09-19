import VoteControl from "@/components/comments/VoteControl";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("VoteControl", () => {
  let onVote: jest.Mock;
  beforeEach(() => {
    onVote = jest.fn();
  });

  it("renders the current score", () => {
    render(<VoteControl score={10} onVote={onVote} />);

    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("calls onVote with 1 when the increase button is clicked", async () => {
    const user = userEvent.setup();

    render(<VoteControl score={10} onVote={onVote} />);
    const increaseButton = screen.getByRole("button", {
      name: "Increase score",
    });
    await user.click(increaseButton);
    expect(onVote).toHaveBeenCalledWith(1);
  });

  it("calls onVote with -1 when the decrease button is clicked", async () => {
    const user = userEvent.setup();
    render(<VoteControl score={10} onVote={onVote} />);
    const decreaseButton = screen.getByRole("button", {
      name: "Decrease score",
    });
    await user.click(decreaseButton);
    expect(onVote).toHaveBeenCalledWith(-1);
  });
});
