import { DeleteConfirmationProps } from "@/lib/types";

export default function DeleteConfirmation({
  onCancel,
  onConfirm,
}: DeleteConfirmationProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md sm:max-w-sm rounded-lg bg-white p-6 sm:p-7">
        <h2 className="text-lg sm:text-lg font-bold text-grey-800">
          Delete Comment
        </h2>
        <p className="mt-4 text-grey-500 text-sm leading-6 sm:text-base">
          Are you sure you want to delete this comment? This will remove the
          comment and can&apos;t be undone.
        </p>
        <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-between gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="w-full cursor-pointer rounded-lg bg-grey-100 px-5 py-3 text-sm font-bold text-grey-500 sm:w-auto sm:text-base"
          >
            NO, CANCEL
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="w-full cursor-pointer rounded-lg bg-pink-400 px-5 py-3 text-sm font-bold text-white sm:w-auto sm:text-base"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
