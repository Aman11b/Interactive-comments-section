import { CommentCardProps } from "@/lib/types";
import Image from "next/image";
import VoteControl from "./VoteControl";
import CommentActions from "./CommentActions";

export default function CommentCard({
  comment,
  isReply = false,
  currentUser,
}: CommentCardProps) {
  const imageName = comment.user.image.png.split("/").pop();
  const isCurrentUser = comment.user.username === currentUser.username;
  return (
    <>
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
              <div className="flex items-center gap-2">
                <p className="font-bold text-grey-800">
                  {comment.user.username}
                </p>
                {isCurrentUser && (
                  <span className=" bg-purple-600 px-1.5 text-xs font-bold text-white">
                    you
                  </span>
                )}
              </div>
              <span className="text-grey-500">{comment.createdAt}</span>
              <div className="ml-auto hidden md:flex">
                <CommentActions isCurrentUser={isCurrentUser} />
              </div>
            </header>

            <p className="mt-4 text-grey-500 wrap-break-word">
              {isReply && "replyingTo" in comment && (
                <span className="font-bold text-purple-600">
                  @{comment.replyingTo}
                </span>
              )}
              {comment.content}
            </p>
            <div className="mt-4 flex items-center justify-between md:hidden">
              <VoteControl score={comment.score} />
              <div className=" ml-auto">
                <CommentActions isCurrentUser={isCurrentUser} />
              </div>
            </div>
          </div>
        </div>
      </article>
      {"replies" in comment && !isReply && comment.replies.length > 0 && (
        <div className="ml-4 border-l-2 border-grey-100 pl-6 md:ml-11 md:pl-6 ">
          <div className="flex flex-col gap-6">
            {comment.replies.map((reply) => (
              <CommentCard
                key={reply.id}
                comment={reply}
                isReply
                currentUser={currentUser}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
