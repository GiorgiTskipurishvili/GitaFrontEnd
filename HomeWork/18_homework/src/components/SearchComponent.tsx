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