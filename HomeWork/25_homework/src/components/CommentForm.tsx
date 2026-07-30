import { useState } from "react";
import type { User } from "../types/comment";

interface Props {
  currentUser: User;
  addComment: (text: string) => void;
}

export default function CommentForm({ currentUser, addComment }: Props) {
  const [text, setText] = useState("");

  function submit() {
    if (!text.trim()) return;
    addComment(text);
    setText("");
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-4 sm:flex-row sm:items-start sm:gap-5 sm:p-5">
      <img
        src={currentUser.image}
        alt={currentUser.username}
        className="order-2 h-10 w-10 rounded-full sm:order-1"
      />

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="order-1 w-full flex-1 rounded border p-3 focus:border-indigo-600 focus:outline-none sm:order-2"
        placeholder="Add a comment..."
        rows={3}
      />

      <button
        onClick={submit}
        className="order-3 rounded bg-indigo-600 px-6 py-2 font-bold text-white sm:self-start"
      >
        SEND
      </button>
    </div>
  );
}
