import { CommentActionsProps } from "@/lib/types";
import Image from "next/image";
import DeleteIcon from "../../public/images/icon-delete.svg";
import EditIcon from "../../public/images/icon-edit.svg";
import ReplyIcon from "../../public/images/icon-reply.svg";

export default function CommentActions({ isCurrentUser }: CommentActionsProps) {
  return isCurrentUser ? (
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="flex items-center gap-2 font-bold text-pink-400"
      >
        <Image src={DeleteIcon} alt="" width={14} height={16} />
        Delete
      </button>
      <button
        type="button"
        className="flex items-center gap-2 font-bold text-purple-600"
      >
        <Image src={EditIcon} alt="" width={14} height={16} />
        Edit
      </button>
    </div>
  ) : (
    <button
      type="button"
      className="flex font-bold items-center gap-2 text-purple-600 "
    >
      <Image src={ReplyIcon} alt="" width={14} height={16} />
      Reply
    </button>
  );
}
