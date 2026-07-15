import data from "../data.json";
import Earth from "../assets/planet-earth.svg";
import EarthInternal from "../assets/planet-earth-internal.svg";
import GeologyEarth from "../assets/geology-earth.png";
import { useState } from "react";
import Link from "../assets/link.svg"


export default function EarthPage() {
  // const [activeTab, setActiveTab] = useState("overview");
  const [activeTab, setActiveTab] = useState<"overview" | "structure" | "geology">("overview");

  const planet = data.find((planet) => planet.name === "Earth");

  if (!planet) {
    return <h2>Planet not found</h2>;
  }

  

  return (
    <>
      <div className="planet-container">
        <div className="introduce-container">
          <div className="planet-img__container">
            {activeTab === "overview" && <img src={Earth} alt="" />}
            {activeTab === "structure" && (
              <>
                <img src={Earth} alt="" className="planet-image"/>
                <img src={EarthInternal} alt="" className="internal" />
              </>
            )}

            {activeTab === "geology" && (
              <>
                <img src={Earth} alt="" />
                <img src={GeologyEarth} alt="" className="geology" />
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
                className={`change-planet earth ${
                  activeTab === "overview" ? "active":""
                }`}
                onClick={() => {
                  setActiveTab("overview");
                }}
              >
                <span>01</span>
                <p>OVERVIEW</p>
              </div>
              <div
                className={`change-planet earth ${
                  activeTab === "structure" ? "active":""
                }`}
                onClick={() => {
                  setActiveTab("structure");
                }}
              >
                <span>02</span>
                <p>INTERNAL STRUCTURE</p>
              </div>
              <div
                className={`change-planet earth ${
                  activeTab === "geology" ? "active":""
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
