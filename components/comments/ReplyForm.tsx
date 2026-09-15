import { ReplyFormProps } from "@/lib/types";
import Image from "next/image";
import React, { useState } from "react";

export default function ReplyForm({
  currentUser,
  replyingTo,
  onSubmit,
}: ReplyFormProps) {
  const imageName = currentUser.image.png.split("/").pop();
  const [replyContent, setReplyContent] = useState("");

  const prefix = `@${replyingTo}`;

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedContent = replyContent.trim();
    if (!trimmedContent) {
      return;
    }
    onSubmit(trimmedContent);
    setReplyContent("");
  };

  return (
    <form className="rounded-lg bg-white p-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 md:flex-row md:items-baseline">
        <Image
          src={`/images/avatars/${imageName}`}
          alt=""
          width={40}
          height={40}
          className="hidden md:block shrink-0"
        />
        <div
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-label={`Reply to ${replyingTo}`}
          className="min-h-24 w-full rounded-lg border border-grey-100 p-4 text-grey-500 outline-none wrap-break-word"
          onInput={(event) => {
            const text = event.currentTarget.textContent ?? "";
            if (text.startsWith(prefix)) {
              setReplyContent(text.slice(prefix.length));
            } else {
              setReplyContent(text);
            }
          }}
        >
          <span contentEditable={false}>{prefix}</span>
        </div>

        <div className=" flex items-center justify-between md:contents">
          <Image
            src={`/images/avatars/${imageName}`}
            alt=""
            width={40}
            height={40}
            className="shrink-0 md:hidden"
          />
          <button
            type="submit"
            className="rounded-lg bg-purple-600 px-6 py-3 font-bold text-white"
          >
            REPLY
          </button>
        </div>
      </div>
    </form>
  );
}
