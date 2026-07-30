import { useState } from "react";
import type { CommentType, User } from "../types/comment";
import Score from "./Score";

interface Props {
  comment: CommentType;
  currentUser: User;
  deleteComment: (id: number) => void;
  updateComment: (id: number, content: string) => void;
  addReply: (id: number, content: string, replyingTo: string) => void;
  updateScore: (id: number, delta: number) => void;
}

export default function Comment({
  comment,
  currentUser,
  deleteComment,
  updateComment,
  addReply,
  updateScore,
}: Props) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(comment.content);

  const [replyOpen, setReplyOpen] = useState(false);
  const [replyText, setReplyText] = useState("");

  const isOwner = comment.user.username === currentUser.username;
  const mention = `@${comment.user.username} `;

  const handleUpdate = () => {
    if (!editText.trim()) return;
    updateComment(comment.id, editText);
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditText(comment.content);
    setEditing(false);
  };

  const openReply = () => {
    setReplyText(mention);
    setReplyOpen(true);
  };

  const handleReply = () => {
    // Strip the leading @mention only if it's still there and untouched —
    // if the person edited or deleted it, keep whatever they typed as-is.
    const content = replyText.startsWith(mention)
      ? replyText.slice(mention.length)
      : replyText;

    if (!content.trim()) return;

    addReply(comment.id, content, comment.user.username);
    setReplyText("");
    setReplyOpen(false);
  };

  return (
    <div className="space-y-5">
      {/* COMMENT CARD */}
      <div className="flex flex-col gap-4 rounded-xl bg-white p-4 sm:flex-row sm:gap-5 sm:p-6">
        <div className="order-2 sm:order-1">
          <Score
            score={comment.score}
            onUpvote={() => updateScore(comment.id, 1)}
            onDownvote={() => updateScore(comment.id, -1)}
          />
        </div>

        <div className="order-1 flex-1 sm:order-2">
          {/* HEADER */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={comment.user.image}
                alt={comment.user.username}
                className="h-8 w-8 rounded-full sm:h-10 sm:w-10"
              />

              <h3 className="font-bold text-slate-800">{comment.user.username}</h3>

              {isOwner && (
                <span className="rounded bg-indigo-600 px-2 py-1 text-xs text-white">you</span>
              )}

              <span className="text-sm text-gray-500">{comment.createdAt}</span>
            </div>

            {/* ACTIONS */}
            {isOwner ? (
              <div className="flex gap-4">
                <button
                  onClick={() => deleteComment(comment.id)}
                  className="flex items-center gap-1 font-bold text-red-500"
                >
                  Delete
                </button>

                <button
                  onClick={() => setEditing(true)}
                  className="flex items-center gap-1 font-bold text-indigo-600"
                >
                  Edit
                </button>
              </div>
            ) : (
              <button
                onClick={() => (replyOpen ? setReplyOpen(false) : openReply())}
                className="flex items-center gap-1 font-bold text-indigo-600"
              >
                Reply
              </button>
            )}
          </div>

          {/* CONTENT / EDIT */}
          {editing ? (
            <div className="mt-5">
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                autoFocus
                rows={3}
                className="w-full rounded-lg border p-3 focus:border-indigo-600 focus:outline-none"
              />

              <div className="mt-3 flex justify-end gap-3">
                <button
                  onClick={handleCancelEdit}
                  className="rounded-lg px-5 py-2 font-bold text-gray-500"
                >
                  CANCEL
                </button>
                <button
                  onClick={handleUpdate}
                  className="rounded-lg bg-indigo-600 px-5 py-2 font-bold text-white"
                >
                  UPDATE
                </button>
              </div>
            </div>
          ) : (
            <p className="mt-4 leading-7 text-gray-600">
              {comment.replyingTo && (
                <span className="font-bold text-indigo-600">@{comment.replyingTo} </span>
              )}
              {comment.content}
            </p>
          )}
        </div>
      </div>

      {/* REPLY FORM */}
      {replyOpen && (
        <div className="ml-6 rounded-xl bg-white p-5 sm:ml-12">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            rows={3}
            autoFocus
            onFocus={(e) => {
              const len = e.target.value.length;
              e.target.setSelectionRange(len, len);
            }}
            className="w-full rounded-lg border p-3 focus:border-indigo-600 focus:outline-none"
          />

          <div className="mt-3 flex justify-end">
            <button
              onClick={handleReply}
              className="rounded-lg bg-indigo-600 px-5 py-2 font-bold text-white"
            >
              REPLY
            </button>
          </div>
        </div>
      )}

      {/* CHILD REPLIES */}
      {(comment.replies?.length ?? 0) > 0 && (
        <div className="ml-6 space-y-5 border-l-2 border-gray-200 pl-6 sm:ml-12 sm:pl-12">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              currentUser={currentUser}
              deleteComment={deleteComment}
              updateComment={updateComment}
              addReply={addReply}
              updateScore={updateScore}
            />
          ))}
        </div>
      )}
    </div>
  );
}