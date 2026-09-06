import { CommentEditFromProps } from "@/lib/types";
import { useState } from "react";

export default function CommentEditFrom({
  content,
  isReply,
  replayingTo,
  onCancel,
  onUpdate,
}: CommentEditFromProps) {
  const [editContent, setEditContent] = useState(content);
  const prefix = isReply && replayingTo ? `@${replayingTo} ` : "";
  const handleUpdate = () => {
    const trimmedContent = editContent.trim();
    if (!trimmedContent) {
      return;
    }
    onUpdate(trimmedContent);
  };
  return (
    <div className="mt-4">
      <div className="w-full rounded-lg border border-purple-600 bg-white p-4">
        <div
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-label="Edit Comment"
          className="min-h-24 text-grey-500 outline-none wrap-break-word"
          onInput={(event) => {
            const text = event.currentTarget.textContent ?? "";
            if (prefix && text.startsWith(prefix)) {
              setEditContent(text.slice(prefix.length));
            } else {
              setEditContent(text);
            }
          }}
        >
          {isReply && replayingTo && (
            <span contentEditable={false} className="font-bold text-purple-600">
              {prefix}
            </span>
          )}
          {content}
        </div>
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="cursor-pointer rounded-lg bg-grey-100 px-5 py-3 font-bold text-grey-500"
        >
          CANCEL
        </button>
        <button
          type="button"
          onClick={handleUpdate}
          className="cursor-pointer rounded-lg bg-purple-600 px-5 py-3 font-bold text-white"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
}
