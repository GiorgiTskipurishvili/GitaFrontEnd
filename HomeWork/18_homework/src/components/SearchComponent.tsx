// import "./Search.css"
// import SearchLogo from "../assets/search.svg"

// export default function SearchComponent() {
//   return (
//     <div className="search-container">
//       <div className="search-input">
//         <img src={SearchLogo} alt="search" className="search-icon" />

//         <input
//           type="text"
//           placeholder="Search GitHub username..."
//         />
//       </div>

//       <button className="search-btn">Search</button>
//     </div>
//   )
// }


// import "./Search.css";
// import SearchLogo from "../assets/search.svg";

// export default function SearchComponent({
//   username,
//   setUsername,
//   searchUser,
// }) {
//   return (
//     <div className="search-container">
//       <div className="search-input">
//         <img src={SearchLogo} alt="" />

//         <input
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           type="text"
//           placeholder="Search GitHub username..."
//         />
//       </div>

//       <button
//         className="search-btn"
//         onClick={searchUser}
//       >
//         Search
//       </button>
//     </div>
//   );
// }


import "./Search.css";
import SearchLogo from "../assets/search.svg";

export default function SearchComponent({
  username,
  setUsername,
  searchUser,
  error,
}) {
  return (
    <div className="search-container">
      <div className="search-input">
        <img src={SearchLogo} alt="search" />

        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {error && <span className="error">{error}</span>}

      <button className="search-btn" onClick={searchUser}>
        Search
      </button>
    </div>
  );
}