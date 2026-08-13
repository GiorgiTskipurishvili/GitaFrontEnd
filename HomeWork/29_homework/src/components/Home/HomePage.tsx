import { useEffect, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import SaveIcon from "../../assets/save.svg";
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

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [trending, setTrending] = useState<Show[]>([]);
  const [recommended, setRecommended] = useState<Show[]>([]);
  const [savedShows, setSavedShows] = useState<Show[]>([]);

  /* SAVED SHOWS */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedShows") || "[]");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSavedShows(saved);
  }, []);

  /* TRENDING */
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows?page=3")
      .then((res) => res.json())
      .then((data) => {
        setTrending(
          data.slice(0, 6).map((show: Show) => ({
            ...show,
            type: "Movie",
          })),
        );
      })
      .catch((error) => {
        console.error("Failed to fetch trending:", error);
      });
  }, []);

  /* RECOMMENDED */
  useEffect(() => {
    Promise.all([
      fetch("https://api.tvmaze.com/shows?page=4").then((res) => res.json()),
      fetch("https://api.tvmaze.com/shows?page=5").then((res) => res.json()),
    ])
      .then(([movies, tvSeries]) => {
        const taggedMovies = movies.slice(0, 4).map((show: Show) => ({
          ...show,
          type: "Movie",
        }));

        const taggedTv = tvSeries.slice(0, 4).map((show: Show) => ({
          ...show,
          type: "TV Series",
        }));

        const merged: Show[] = [];

        const max = Math.max(taggedMovies.length, taggedTv.length);

        for (let i = 0; i < max; i++) {
          if (taggedMovies[i]) {
            merged.push(taggedMovies[i]);
          }

          if (taggedTv[i]) {
            merged.push(taggedTv[i]);
          }
        }

        setRecommended(merged);
      })
      .catch((error) => {
        console.error("Failed to fetch recommended shows:", error);
      });
  }, []);

  /* SAVE / UNSAVE */
  const toggleSave = (show: Show) => {
    setSavedShows((prev) => {
      const exists = prev.some((item) => item.id === show.id);

      const updated = exists
        ? prev.filter((item) => item.id !== show.id)
        : [...prev, show];

      localStorage.setItem("savedShows", JSON.stringify(updated));

      return updated;
    });
  };

  /* CARD */
  const renderCard = (show: Show) => {
    const isSaved = savedShows.some((item) => item.id === show.id);

    const mediaIcon = show.type === "TV Series" ? TvIcon : MovieIcon;

    return (
      <article key={show.id} className="min-w-0">
        {/* IMAGE */}
        <div className="relative group">
          <img
            src={show.image?.medium || "https://via.placeholder.com/210x295"}
            alt={show.name}
            className="
              w-full
              aspect-[1.45/1]
              object-cover
              rounded-[8px]
            "
          />

          {/* SAVE */}
          <button
            onClick={() => toggleSave(show)}
            aria-label={isSaved ? "Remove from saved" : "Save"}
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
              src={isSaved ? ActiveSaveIcon : SaveIcon}
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
            <img src={mediaIcon} alt="" className="w-[10px] h-[10px]" />

            <span>{show.type}</span>
          </div>

          <span>•</span>

          <span>{getBadge(show.rating?.average ?? null)}</span>
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
        {/* SEARCH */}
        <div className="flex items-center gap-4 mb-8">
          <img src={SearchIcon} alt="search" className="w-[20px] h-[20px]" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for movies or TV series"
            className="
              flex-1
              bg-transparent
              outline-none
              text-white
              text-[15px]
              placeholder:text-[#6B7280]
              border-b
              border-transparent
              focus:border-[#5A6B92]
              pb-2
            "
          />
        </div>

        {/* TRENDING TITLE */}
        <h1
          className="
            text-white
            text-[20px]
            md:text-[22px]
            lg:text-[20px]
            font-normal
            mb-5
          "
        >
          Trending
        </h1>

        {/* TRENDING */}
        <div
          className="
            flex
            gap-4
            md:gap-5
            lg:gap-6
            overflow-x-auto
            pb-3
            scrollbar-hide
          "
        >
          {trending.map((show) => (
            <div
              key={show.id}
              className="
                flex-shrink-0
                w-[190px]
                md:w-[220px]
                lg:w-[240px]
              "
            >
              {renderCard(show)}
            </div>
          ))}
        </div>

        {/* RECOMMENDED TITLE */}
        <h1
          className="
            text-white
            text-[20px]
            md:text-[22px]
            lg:text-[20px]
            font-normal
            mt-8
            mb-5
          "
        >
          Recommended for you
        </h1>

        {/* RECOMMENDED GRID */}
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
          {recommended.map((show) => renderCard(show))}
        </div>
      </section>
    </main>
  );
}
