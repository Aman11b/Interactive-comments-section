import { CommentCardProps } from "@/lib/types";
import Image from "next/image";
import VoteControl from "./VoteControl";

export default function CommentCard({ comment }: CommentCardProps) {
  const imageName = comment.user.image.png.split("/").pop();
  return (
    <article className=" bg-white p-6 rounded-lg w-full">
      <div className="flex flex-col md:flex-row gap-4 md:gap-5">
        <div className="hidden md:block">
          <VoteControl score={comment.score} />
        </div>
        <div className="flex-1 order-1 md:order-2 min-w-0">
          <header className="flex items-center gap-4">
            <Image
              src={`/images/avatars/${imageName}`}
              alt={`${comment.user.username}'s Avatar`}
              width={40}
              height={40}
              className="shrink-0"
            />
            <p className="font-bold text-grey-800">{comment.user.username}</p>
            <span className="text-grey-500">{comment.createdAt}</span>
            <button
              type="button"
              className="ml-auto font-bold text-purple-600 hidden md:block"
            >
              Reply
            </button>
          </header>

          <p className="mt-4 text-grey-500 wrap-break-word">
            {comment.content}
          </p>
          <div className="mt-4 flex items-center justify-between md:hidden">
            <VoteControl score={comment.score} />
            <button
              type="button"
              className="sm:block font-bold text-purple-600"
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
