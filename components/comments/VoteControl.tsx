import { VoteControlProps } from "@/lib/types";

export default function VoteControl({ score, onVote }: VoteControlProps) {
  return (
    <div className=" flex w-fit md:h-fit flex-row md:flex-col gap-4 items-center bg-gray-100 px-3 py-2 font-bold text-purple-200 rounded-lg md:gap-2">
      <button
        type="button"
        aria-label="Increase score"
        className="cursor-pointer"
        onClick={() => onVote(1)}
      >
        +
      </button>
      <span className="text-purple-600 font-bold w-6 text-center">{score}</span>
      <button
        type="button"
        aria-label="Decrease score"
        className="cursor-pointer"
        onClick={() => onVote(-1)}
      >
        -
      </button>
    </div>
  );
}
