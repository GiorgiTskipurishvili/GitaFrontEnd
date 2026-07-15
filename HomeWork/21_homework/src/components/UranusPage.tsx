import { useState } from "react";
import data from "../data.json";
import Uranus from "../assets/planet-uranus.svg";
import UranusInternal from "../assets/planet-uranus-internal.svg";
import GeologyUranus from "../assets/geology-uranus.png";
import Link from "../assets/link.svg"

export default function UranusPage() {
  // const [activeTab, setActiveTab] = useState("overview");
  const [activeTab, setActiveTab] = useState<"overview" | "structure" | "geology">("overview");

  const planet = data.find((planet) => planet.name === "Uranus");

  if (!planet) {
    return <h2>Planet not found</h2>;
  }
  return (
    <>
      <div className="planet-container">
        <div className="introduce-container">
          <div className="planet-img__container">
            {activeTab === "overview" && <img src={Uranus} alt="" />}
            {activeTab === "structure" && (
              <>
                <img src={Uranus} alt="" className="planet-image" />
                <img src={UranusInternal} alt="" className="internal" />
              </>
            )}

            {activeTab === "geology" && (
              <>
                <img src={Uranus} alt="" />
                <img src={GeologyUranus} alt="" className="geology" />
              </>
            )}
          </div>

          <div className="planet-about__container">
            <div className="planet-header">
              <h1>{planet.name.toUpperCase()}</h1>
            </div>

            <div className="planet-overview">
              <p>{planet[activeTab].content}</p>
            </div>

            <div className="source">
              <span>Source:</span>
              <a href={planet[activeTab].source}>Wikipedia</a>
              <img src={Link} alt="link-icon" />
            </div>

            <div className="planet-overview__source-group">
              <div
                className={`change-planet uranus ${
                  activeTab === "overview" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("overview");
                }}
              >
                <span>01</span>
                <p>OVERVIEW</p>
              </div>
              <div
                className={`change-planet uranus ${
                  activeTab === "structure" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("structure");
                }}
              >
                <span>02</span>
                <p>INTERNAL STRUCTURE</p>
              </div>
              <div
                className={`change-planet uranus ${
                  activeTab === "geology" ? "active" : ""
                }`}
                onClick={() => {
                  setActiveTab("geology");
                }}
              >
                <span>03</span>
                <p>SURFACE GEOLOGY</p>
              </div>
            </div>
          </div>
        </div>

        <div className="details-container">
          <div className="details">
            <p>ROTATION TIME</p>
            <h1>{planet.rotation}</h1>
          </div>
          <div className="details">
            <p>REVOLUTION TIME</p>
            <h1>{planet.revolution}</h1>
          </div>
          <div className="details">
            <p>RADIUS</p>
            <h1>{planet.radius}</h1>
          </div>
          <div className="details">
            <p>AVERAGE TEMP.</p>
            <h1>{planet.temperature}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
