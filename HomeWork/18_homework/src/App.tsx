import { useState } from "react";
import "./App.css";
import DarkLightComponent from "./components/DarkLightComponent";
import SearchComponent from "./components/SearchComponent";
import CardComponent from "./components/CardComponent";

function App() {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  async function searchUser() {
    if (!username) return;

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        setError("No results");
        setUser(null);
        return;
      }

      const data = await response.json();

      setUser(data);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
      setUser(null);
    }
  }

  return (
    <div className={`app ${theme}`}>
      <main className="app-container">
        <DarkLightComponent theme={theme} setTheme={setTheme} />

        <SearchComponent
          username={username}
          setUsername={setUsername}
          searchUser={searchUser}
          error={error}
        />

        {user && <CardComponent user={user} theme={theme} />}
      </main>
     </div>
  );
}

export default App;