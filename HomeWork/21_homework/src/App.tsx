import { useState } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import MercuryPage from "./components/MercuryPage";
import VenusPage from "./components/VenusPage";
import EarthPage from "./components/EarthPage";
import MarsPage from "./components/MarsPage";
import JupiterPage from "./components/JupiterPage";
import SaturnPage from "./components/SaturnPage";
import UranusPage from "./components/UranusPage";
import NeptunePage from "./components/NeptunePage";
import HamburgerIcon from "./assets/hamburger.svg"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="the-planets__logo">
          <h1>THE PLANETS</h1>
        </div>

        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
        <img src={menuOpen ? HamburgerIcon : HamburgerIcon} alt="" />
        </button>

        <nav className={menuOpen ? "nav-open" : ""}>
          <NavLink
            to="/mercury"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `nav-link mercury ${isActive ? "active" : ""}`
            }
          >
            MERCURY
          </NavLink>

          <NavLink
            to="/venus"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `nav-link venus ${isActive ? "active" : ""}`
            }
          >
            VENUS
          </NavLink>

          <NavLink
            to="/earth"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `nav-link earth ${isActive ? "active" : ""}`
            }
          >
            EARTH
          </NavLink>

          <NavLink
            to="/mars"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `nav-link mars ${isActive ? "active" : ""}`
            }
          >
            MARS
          </NavLink>

          <NavLink
            to="/jupiter"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `nav-link jupiter ${isActive ? "active" : ""}`
            }
          >
            JUPITER
          </NavLink>

          <NavLink
            to="/saturn"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `nav-link saturn ${isActive ? "active" : ""}`
            }
          >
            SATURN
          </NavLink>

          <NavLink
            to="/uranus"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `nav-link uranus ${isActive ? "active" : ""}`
            }
          >
            URANUS
          </NavLink>

          <NavLink
            to="/neptune"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `nav-link neptune ${isActive ? "active" : ""}`
            }
          >
            NEPTUNE
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<MercuryPage />} />
        <Route path="/mercury" element={<MercuryPage />} />
        <Route path="/venus" element={<VenusPage />} />
        <Route path="/earth" element={<EarthPage />} />
        <Route path="/mars" element={<MarsPage />} />
        <Route path="/jupiter" element={<JupiterPage />} />
        <Route path="/saturn" element={<SaturnPage />} />
        <Route path="/uranus" element={<UranusPage />} />
        <Route path="/neptune" element={<NeptunePage />} />
      </Routes>
    </>
  );
}

export default App;