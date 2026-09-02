import { VoteControlProps } from "@/lib/types";

export default function VoteControl({ score }: VoteControlProps) {
  return (
    <div className=" flex w-fit md:h-fit flex-row md:flex-col gap-4 items-center bg-gray-100 px-3 py-2 font-bold text-grey-500 rounded-lg md:gap-2">
      <button type="button" aria-label="Increase score">
        +
      </button>
      <span className="text-purple-600 font-bold">{score}</span>
      <button type="button" aria-label="Decrease score">
        -
      </button>
    </div>
  );
}
