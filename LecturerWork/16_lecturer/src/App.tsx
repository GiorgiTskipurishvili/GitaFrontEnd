import { useEffect, useState } from 'react';
import './App.css'
import LiveTracker from './components/LiveTracker';

const citiesData = [
  {
    id: 1,
    name: "თელავი",
    temp: 28,
    condition: "მზიანი",
  },
  {
    id: 2,
    name: "თბილისი",
    temp: 20,
    condition: "წვიმიანი",
  },
  {
    id: 3,
    name: "ბათუმი",
    temp: 26,
    condition: "ღრუბლიანი",
  },
];

function App() {
  const [activeCity, setActiveCity] = useState(citiesData[0]);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    console.log("ამინდის პროგნოზი წარმატებით მიეწოდება");
  }, []);

  useEffect(() => {
    document.title = `ამინდი:${activeCity.name}`;
  }, [activeCity]);

  return (
    <>
          <div className="app">
      <main className="weather-card">
        <h1 className="app-title">ამინდის პროგნოზი</h1>

        <div className="city-buttons">
          {citiesData.map((city) => (
            <button
              className={`city-button ${activeCity.id === city.id ? "active" : ""}`}
              key={city.id}
              onClick={() => {
                setActiveCity(city);
              }}
            >
              {city.name}
            </button>
          ))}
        </div>

        <section className="city-details">
          <h2>ქალაქის სახელი: {activeCity.name}</h2>
          <p>ტემპერატურა: {activeCity.temp} C*</p>
          <p>მდგომარეობა: {activeCity.condition}</p>
        </section>

        <div className="live-toggle">
          <button
            className="live-toggle-button"
            onClick={() => {
              setIsLive(!isLive);
            }}
          >
            {isLive ? "გათიშე live რეჟიმი" : "ჩართე Live რეჟიმი"}
          </button>
        </div>

        {isLive ? <LiveTracker /> : null}
      </main>
    </div>
    </>
  )
}

export default App
