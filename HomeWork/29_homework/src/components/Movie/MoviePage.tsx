// import { useEffect, useState } from "react";
// import SearchIcon from "../../assets/search.svg";
// import SaveIcon from "../../assets/save.svg";
// import ActiveSaveIcon from "../../assets/ActiveSave.svg";
// import MovieIcon from "../../assets/movie.svg";

// interface Show {
//   id: number;
//   name: string;
//   type: string;
//   premiered: string | null;
//   image: { medium: string | null; original: string | null } | null;
//   rating: { average: number | null };
// }

// function getBadge(rating: number | null) {
//   if (rating === null) return "E";
//   if (rating >= 7.5) return "18+";
//   if (rating >= 6) return "PG";
//   return "E";
// }

// function getYear(premiered: string | null) {
//   return premiered ? premiered.split("-")[0] : "N/A";
// }

// export default function MoviePage() {
//   const [search, setSearch] = useState("");
//   const [shows, setShows] = useState<Show[]>([]);
//   const [savedShows, setSavedShows] = useState<Show[]>([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("savedShows") || "[]");
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     setSavedShows(saved);
//   }, []);

//   // დეფოლტ სია — page=0, რომ TvPage-ს არ დაემთხვეს
//   useEffect(() => {
//     if (search) return;
//     fetch("https://api.tvmaze.com/shows?page=0")
//       .then((res) => res.json())
//       .then((data) =>
//         setShows(data.slice(0, 12).map((s: Show) => ({ ...s, type: "Movie" })))
//       );
//   }, [search]);

//   // საძიებო სია
//   useEffect(() => {
//     if (!search) return;
//     fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
//       .then((res) => res.json())
//       .then((data) =>
//         setShows(
//           data.map((item: { show: Show }) => ({ ...item.show, type: "Movie" }))
//         )
//       );
//   }, [search]);

//   const toggleSave = (show: Show) => {
//     setSavedShows((prev) => {
//       const exists = prev.some((s) => s.id === show.id);
//       const updated = exists
//         ? prev.filter((s) => s.id !== show.id)
//         : [...prev, show];

//       localStorage.setItem("savedShows", JSON.stringify(updated));
//       return updated;
//     });
//   };

//   return (
//     <section className="bg-[#161D2F] min-h-screen p-8">
//       <div className="w-[300px] h-[40px] flex items-center gap-4">
//         <img src={SearchIcon} alt="search" />
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search for movies"
//           className="w-full bg-transparent text-[16px] font-normal text-white placeholder:text-gray-400 outline-none"
//         />
//       </div>

//       <h1 className="text-white text-2xl font-semibold mt-8">
//         {search ? `Found ${shows.length} results for '${search}'` : "Movies"}
//       </h1>

//       <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-[15px]">
//         {shows.map((show) => {
//           const isSaved = savedShows.some((s) => s.id === show.id);

//           return (
//             <div key={show.id}>
//               <div className="relative">
//                 <img
//                   src={show.image?.medium || "https://via.placeholder.com/210x295"}
//                   alt={show.name}
//                   className="rounded-lg"
//                 />
//                 <button
//                   onClick={() => toggleSave(show)}
//                   className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center"
//                 >
//                   <img className="w-[11px] h-[11px]" src={isSaved ? ActiveSaveIcon : SaveIcon} alt="save" />
//                 </button>
//               </div>

//               <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
//                 <span>{getYear(show.premiered)}</span>
//                 <span>·</span>
//                 <img src={MovieIcon} alt="movie" className="w-4 h-4" />
//                 <span>Movie</span>
//                 <span>·</span>
//                 <span>{getBadge(show.rating.average)}</span>
//               </div>

//               <h2 className="text-white font-semibold mt-1">{show.name}</h2>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import SaveIcon from "../../assets/save.svg";
import ActiveSaveIcon from "../../assets/ActiveSave.svg";
import MovieIcon from "../../assets/movie.svg";

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

export default function MoviePage() {
  const [search, setSearch] = useState("");
  const [shows, setShows] = useState<Show[]>([]);
  const [savedShows, setSavedShows] = useState<Show[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedShows") || "[]");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSavedShows(saved);
  }, []);

  /* DEFAULT MOVIES */
  useEffect(() => {
    if (search.trim()) return;

    fetch("https://api.tvmaze.com/shows?page=0")
      .then((res) => res.json())
      .then((data) => {
        setShows(
          data.slice(0, 15).map((show: Show) => ({
            ...show,
            type: "Movie",
          })),
        );
      })
      .catch((error) => {
        console.error("Failed to fetch movies:", error);
      });
  }, [search]);

  /* SEARCH */
  useEffect(() => {
    if (!search.trim()) return;

    const timeout = setTimeout(() => {
      fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(search)}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setShows(
            data.map((item: { show: Show }) => ({
              ...item.show,
              type: "Movie",
            })),
          );
        })
        .catch((error) => {
          console.error("Search failed:", error);
        });
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);

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
        <div className="flex items-center gap-4 mb-7 md:mb-8 lg:mb-7">
          <img src={SearchIcon} alt="search" className="w-[20px] h-[20px]" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for movies"
            className="
              flex-1
              bg-transparent
              outline-none
              text-white
              text-[15px]
              placeholder:text-[#6B7280]
              border-b border-transparent
              focus:border-[#5A6B92]
              pb-2
            "
          />
        </div>

        {/* TITLE */}
        <h1
          className="
            text-white
            text-[20px]
            md:text-[22px]
            lg:text-[20px]
            font-normal
            mb-5
            md:mb-6
          "
        >
          {search.trim()
            ? `Found ${shows.length} results for '${search}'`
            : "Movies"}
        </h1>

        {/* MOVIES GRID */}
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
          {shows.map((show) => {
            const isSaved = savedShows.some((item) => item.id === show.id);

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

                  {/* SAVE BUTTON */}
                  <button
                    onClick={() => toggleSave(show)}
                    aria-label={isSaved ? "Remove from saved" : "Save movie"}
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

                  <img src={MovieIcon} alt="" className="w-[10px] h-[10px]" />

                  <span>Movie</span>

                  <span>•</span>

                  <span>{getBadge(show.rating?.average)}</span>
                </div>

                {/* NAME */}
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
      </section>
    </main>
  );
}
