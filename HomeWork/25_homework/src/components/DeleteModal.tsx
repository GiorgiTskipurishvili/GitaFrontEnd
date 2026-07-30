interface Props {
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({ onCancel, onConfirm }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-6">
        <h1 className="text-xl font-bold text-slate-800">Delete comment</h1>

        <p className="mt-4 text-gray-500">
          Are you sure you want to delete this comment? This will remove the comment and can&apos;t
          be undone.
        </p>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="rounded-lg bg-gray-600 px-5 py-3 font-bold text-white"
          >
            NO, CANCEL
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-500 px-5 py-3 font-bold text-white"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
