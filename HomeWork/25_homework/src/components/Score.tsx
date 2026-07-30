interface ScoreProps {
  score: number;
  onUpvote: () => void;
  onDownvote: () => void;
}

export default function Score({ score, onUpvote, onDownvote }: ScoreProps) {
  return (
    <div className="flex h-fit shrink-0 flex-row items-center gap-3 rounded-lg bg-slate-100 px-2 py-1 sm:flex-col sm:gap-1 sm:px-3 sm:py-3">
      <button
        onClick={onUpvote}
        aria-label="Upvote"
        className="text-indigo-300 transition-colors hover:text-indigo-600"
      >
        +
      </button>
      <span className="font-bold text-indigo-600">{score}</span>
      <button
        onClick={onDownvote}
        aria-label="Downvote"
        className="text-indigo-300 transition-colors hover:text-indigo-600"
      >
        -
      </button>
    </div>
  );
}
