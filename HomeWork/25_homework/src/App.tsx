import { useEffect, useRef, useState } from "react";
import data from "./data.json";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import DeleteModal from "./components/DeleteModal";
import type { CommentType } from "./types/comment";

function App() {
  const [comments, setComments] = useState<CommentType[]>(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      return JSON.parse(savedComments);
    }
    return data.comments;
  });

  const [deleteId, setDeleteId] = useState<number | null>(null);
  const currentUser = data.currentUser;

  // Monotonically increasing id generator so two comments/replies added in
  // quick succession never collide (Date.now() alone can repeat).
  const idCounter = useRef(0);
  const nextId = () => {
    idCounter.current += 1;
    return Date.now() * 1000 + idCounter.current;
  };

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // ---------------------------
  // Add new top-level comment
  // ---------------------------
  const addComment = (content: string) => {
    const newComment: CommentType = {
      id: nextId(),
      content,
      createdAt: "just now",
      score: 0,
      user: currentUser,
      replies: [],
    };
    setComments((prev) => [...prev, newComment]);
  };

  // ---------------------------
  // Add a reply, recorded as replying to a specific comment's author
  // ---------------------------
  const addReply = (parentId: number, content: string, replyingTo: string) => {
    const newReply: CommentType = {
      id: nextId(),
      content,
      createdAt: "just now",
      score: 0,
      user: currentUser,
      replyingTo,
      replies: [],
    };

    const add = (items: CommentType[]): CommentType[] => {
      return items.map((item) => {
        if (item.id === parentId) {
          return { ...item, replies: [...(item.replies ?? []), newReply] };
        }
        return { ...item, replies: add(item.replies ?? []) };
      });
    };

    setComments((prev) => add(prev));
  };

  // ---------------------------
  // Update comment content
  // ---------------------------
  const updateComment = (id: number, content: string) => {
    const update = (items: CommentType[]): CommentType[] => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, content };
        }
        return { ...item, replies: update(item.replies ?? []) };
      });
    };
    setComments((prev) => update(prev));
  };

  // ---------------------------
  // Change a comment's score (up/down vote)
  // ---------------------------
  const updateScore = (id: number, delta: number) => {
    const update = (items: CommentType[]): CommentType[] => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, score: item.score + delta };
        }
        return { ...item, replies: update(item.replies ?? []) };
      });
    };
    setComments((prev) => update(prev));
  };

  // ---------------------------
  // Ask for delete confirmation (single, app-level modal)
  // ---------------------------
  const requestDelete = (id: number) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    const remove = (items: CommentType[]): CommentType[] => {
      return items
        .filter((item) => item.id !== deleteId)
        .map((item) => ({ ...item, replies: remove(item.replies ?? []) }));
    };
    setComments((prev) => remove(prev));
    setDeleteId(null);
  };

  return (
    <main className="min-h-screen bg-[#f5f6fa] py-10">
      <div className="mx-auto max-w-3xl space-y-6 px-4">

        <CommentList
          comments={comments}
          currentUser={currentUser}
          deleteComment={requestDelete}
          updateComment={updateComment}
          addReply={addReply}
          updateScore={updateScore}
        />

        <CommentForm currentUser={currentUser} addComment={addComment} />
      </div>

      {deleteId !== null && (
        <DeleteModal onCancel={() => setDeleteId(null)} onConfirm={confirmDelete} />
      )}
    </main>
  );
}

export default App;
