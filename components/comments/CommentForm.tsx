import { CommentFormProps } from "@/lib/types";
import Image from "next/image";

export default function CommentForm({ currentUser }: CommentFormProps) {
  const imageName = currentUser.image.png.split("/").pop();
  return (
    <form className="rounded-lg bg-white p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-baseline">
        <Image
          src={`/images/avatars/${imageName}`}
          alt=""
          width={40}
          height={40}
          className="hidden md:block shrink-0"
        />
        <textarea
          placeholder="Add a comment"
          aria-label="Add a Comment"
          className="min-h-24 w-full resize-none rounded-lg border border-grey-100 p-4 outline-none"
        />
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
            SEND
          </button>
        </div>
      </div>
    </form>
  );
}
