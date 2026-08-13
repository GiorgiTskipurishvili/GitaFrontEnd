import { useEffect, useState } from "react";

import ActiveSaveIcon from "../../assets/ActiveSave.svg";
import MovieIcon from "../../assets/movie.svg";
import TvIcon from "../../assets/tv.svg";

interface Show {
  id: number;
  name: string;
  type: string;
  premiered: string | null;
  image: {
    medium: string | null;
    original: string | null;
  } | null;
  rating: {
    average: number | null;
  };
}

function getBadge(rating: number | null) {
  if (rating === null) return "E";
  if (rating >= 7.5) return "18+";
  if (rating >= 6) return "PG";
  return "E";
}

function getYear(premiered: string | null) {
  return premiered ? premiered.split("-")[0] : "N/A";
}

export default function SavePage() {
  const [savedShows, setSavedShows] = useState<Show[]>([]);

  /* LOAD SAVED SHOWS */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedShows") || "[]");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSavedShows(saved);
  }, []);

  const handleRemove = (showId: number) => {
    const updatedShows = savedShows.filter((show) => show.id !== showId);

    setSavedShows(updatedShows);

    localStorage.setItem("savedShows", JSON.stringify(updatedShows));
  };

  return (
    <main className="min-h-screen bg-[#10141F] text-white lg:pl-[96px]">
      <section
        className="
          px-5 py-6
          sm:px-8
          md:px-6 md:py-7
          lg:px-[50px] lg:py-[45px]
        "
      >
        <h1
          className="
            text-white
            text-[20px]
            md:text-[22px]
            lg:text-[20px]
            font-normal
            mb-6
          "
        >
          Saved
        </h1>

        {savedShows.length === 0 ? (
          <p className="text-[#8B93A7] text-sm">
            You haven't saved anything yet.
          </p>
        ) : (
          <div
            className="
              grid
              grid-cols-2
              gap-x-4
              gap-y-6

              md:grid-cols-3
              md:gap-x-4
              md:gap-y-6

              lg:grid-cols-4
              lg:gap-x-[23px]
              lg:gap-y-5
            "
          >
            {savedShows.map((show) => {
              const mediaType = show.type === "Movie" ? "Movie" : "TV Series";

              const mediaIcon = mediaType === "Movie" ? MovieIcon : TvIcon;

              const badge = getBadge(show.rating?.average ?? null);

              return (
                <article key={show.id} className="min-w-0">
                  {/* IMAGE */}
                  <div className="relative group">
                    <img
                      src={
                        show.image?.medium ||
                        "https://via.placeholder.com/210x295"
                      }
                      alt={show.name}
                      className="
                        w-full
                        aspect-[1.45/1]
                        object-cover
                        rounded-[8px]
                      "
                    />

                    {/* REMOVE BUTTON */}
                    <button
                      onClick={() => handleRemove(show.id)}
                      aria-label="Remove from saved"
                      className="
                        absolute
                        top-2
                        right-2
                        w-8
                        h-8
                        rounded-full
                        bg-[#161D2F]/80
                        flex
                        items-center
                        justify-center
                        transition
                        hover:bg-[#161D2F]
                      "
                    >
                      <img
                        src={ActiveSaveIcon}
                        alt=""
                        className="w-[12px] h-[12px]"
                      />
                    </button>
                  </div>

                  {/* META */}
                  <div
                    className="
                      flex
                      items-center
                      gap-1.5
                      mt-2

                      text-[#8B93A7]
                      text-[9px]

                      md:text-[10px]
                      lg:text-[9px]
                    "
                  >
                    <span>{getYear(show.premiered)}</span>

                    <span>•</span>

                    <div className="flex items-center gap-1">
                      <img
                        src={mediaIcon}
                        alt=""
                        className="w-[10px] h-[10px]"
                      />

                      <span>{mediaType}</span>
                    </div>

                    <span>•</span>

                    <span>{badge}</span>
                  </div>

                  {/* TITLE */}
                  <h2
                    className="
                      text-white
                      text-[12px]
                      md:text-[13px]
                      lg:text-[11px]
                      font-medium
                      mt-1
                      truncate
                    "
                  >
                    {show.name}
                  </h2>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
