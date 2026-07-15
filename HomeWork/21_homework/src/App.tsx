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
function App() {
  return (
    <>
      <header>
        <div className="the-planets__logo">
          <h1>THE PLANETS</h1>
        </div>

        <nav>
          {/* <Link to="/mercury">MERCURY</Link>
          <Link to="/venus">VENUS</Link>
          <Link to="/earth">EARTH</Link>
          <Link to="/mars">MARS</Link>
          <Link to="/jupiter">JUPITER</Link>
          <Link to="/saturn">SATURN</Link>
          <Link to="/uranus">URANUS</Link>
          <Link to="/neptune">NEPTUNE</Link> */}
          <NavLink
            to="/mercury"
            className={({ isActive }) =>
              `nav-link mercury ${isActive ? "active" : ""}`
            }>MERCURY</NavLink>

          <NavLink
            to="/venus"
            className={({ isActive }) =>
              `nav-link venus ${isActive ? "active" : ""}`
            }>VENUS</NavLink>

          <NavLink
            to="/earth"
            className={({ isActive }) =>
              `nav-link earth ${isActive ? "active" : ""}`
            }>EARTH
          </NavLink>

          <NavLink
            to="/mars"
            className={({ isActive }) =>
              `nav-link mars ${isActive ? "active" : ""}`
            }>MARS</NavLink>

          <NavLink
            to="/jupiter"
            className={({ isActive }) =>
              `nav-link jupiter ${isActive ? "active" : ""}`
            }>JUPITER</NavLink>

          <NavLink
            to="/saturn"
            className={({ isActive }) =>
              `nav-link saturn ${isActive ? "active" : ""}`
            }>SATURN</NavLink>

          <NavLink
            to="/uranus"
            className={({ isActive }) =>
              `nav-link uranus ${isActive ? "active" : ""}`
            }>URANUS</NavLink>

          <NavLink
            to="/neptune"
            className={({ isActive }) =>
              `nav-link neptune ${isActive ? "active" : ""}`
            }
          >NEPTUNE</NavLink>
          
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
