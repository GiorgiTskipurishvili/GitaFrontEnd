import { useState } from "react";
import data from "../data.json";
import Neptune from "../assets/planet-neptune.svg";
import NeptuneInternal from "../assets/planet-neptune-internal.svg";
import GeologyNeptune from "../assets/geology-neptune.png";
import Link from "../assets/link.svg"

export default function NeptunePage() {
  // const [activeTab, setActiveTab] = useState("overview");
  const [activeTab, setActiveTab] = useState<"overview" | "structure" | "geology">("overview");

  const planet = data.find((planet) => planet.name === "Neptune");

  if (!planet) {
    return <h2>Planet not found</h2>;
  }

  return (
        <>
      <div className="planet-container">
        <div className="introduce-container">
          <div className="planet-img__container">
            {activeTab === "overview" && <img src={Neptune} alt="" />}
            {activeTab === "structure" && (
              <>
                <img src={Neptune} alt="" className="planet-image" />
                <img src={NeptuneInternal} alt="" className="internal" />
              </>
            )}

            {activeTab === "geology" && (
              <>
                <img src={Neptune} alt="" />
                <img src={GeologyNeptune} alt="" className="geology" />
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
                className={`change-planet neptune ${
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
                className={`change-planet neptune ${
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
                className={`change-planet neptune ${
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
