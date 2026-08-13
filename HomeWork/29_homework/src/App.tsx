import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/Header/HeaderComponent";
import HomePage from "./components/Home/HomePage";
import TvPage from "./components/TV/TvPage";
import SavePage from "./components/Save/SavePage";
import MoviePage from "./components/Movie/MoviePage";

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/Tv" element={<TvPage />} />
        <Route path="/saves" element={<SavePage />} />
      </Routes>
    </>
  );
}

export default App;
