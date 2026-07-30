import type { CommentType, User } from "../types/comment";
import Comment from "./Comment";

interface Props {
  comments: CommentType[];
  currentUser: User;
  deleteComment: (id: number) => void;
  updateComment: (id: number, content: string) => void;
  addReply: (id: number, content: string, replyingTo: string) => void;
  updateScore: (id: number, delta: number) => void;
}

export default function CommentList({
  comments,
  currentUser,
  deleteComment,
  updateComment,
  addReply,
  updateScore,
}: Props) {
  return (
    <div className="space-y-5">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          currentUser={currentUser}
          deleteComment={deleteComment}
          updateComment={updateComment}
          addReply={addReply}
          updateScore={updateScore}
        />
      ))}
    </div>
  );
}
