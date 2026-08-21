/* eslint-disable react-hooks/static-components */
"use client";

import Image from "next/image";
import data from "@/data/data.json";
import { useState } from "react";
import {
  CloudSun,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  CloudSnow,
  Sun,
  Cloud,
  LucideIcon,
} from "lucide-react";

export default function Home() {
  const [selectedCity, setSelectedCity] = useState(data.app.defaultCity);
  const [search, setSearch] = useState("");

  const city = data.cities.find((city) => city.name === selectedCity);

  if (!city) {
    return <div>City not found</div>;
  }

  const today = city.forecast.find((item) => item.date === "2026-08-21");
  const upcoming = city.forecast.filter((item) => item.date !== "2026-08-21");

  const formatDate = (date: string) => {
    const dateObject = new Date(date);
    const day = dateObject.getDate();
    const month = dateObject.toLocaleDateString("en-US", { month: "short" });
    const year = dateObject.getFullYear().toString().slice(-2);
    return `${day} ${month} '${year}`;
  };

  const handleSearch = () => {
    const foundCity = data.cities.find(
      (city) => city.name.toLowerCase() === search.trim().toLowerCase(),
    );

    if (!foundCity) {
      alert("City not found");
      return;
    }

    setSelectedCity(foundCity.name);
    setSearch("");
  };

  const conditionIcons: Record<string, LucideIcon> = {
    sun: Sun,
    "cloud-sun": CloudSun,
    "cloud-rain": CloudRain,
    "cloud-drizzle": CloudDrizzle,
    "cloud-lightning": CloudLightning,
    snowflake: CloudSnow,
    cloud: Cloud,
    fog: Cloud,
  };

  const getIcon = (iconName: string): LucideIcon =>
    conditionIcons[iconName] ?? Cloud;

  const searchBox = (
    <div
      className="
        flex h-[20px] w-[125px] items-center border-b-2 border-white pb-2
        md:h-[45px] md:w-[305px]
        lg:h-[50px] lg:w-[371px]
      "
    >
      <input
        type="text"
        placeholder="Search Location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="
          w-full bg-transparent text-[12px] text-white outline-none
          placeholder:text-white/70
          md:text-[18px]
          lg:text-[20px]
        "
      />
      <button onClick={handleSearch} className="ml-3">
        <Image
          src="/icons/SearchIcon.svg"
          alt="Search"
          width={12}
          height={11}
          className="h-[11px] w-[12px] md:h-[21px] md:w-[22px] lg:h-[28px] lg:w-[28px]"
        />
      </button>
    </div>
  );

  const CurrentIcon = getIcon(city.current.icon);

  const currentWeatherBlock = (
    <div className="flex items-center text-white">
      <h1 className="text-[64px] md:text-[120px] lg:text-[143px]">
        {city.current.temperature}°
      </h1>
      <div className="flex flex-col">
        <h2 className="text-[30px] md:text-[48px] lg:text-[60px]">
          {city.name}
        </h2>
        <p className="text-[10px] md:text-[16px] lg:text-[18px]">
          06:09 - {today?.day}, {today?.date && formatDate(today.date)}
        </p>
      </div>
      <CurrentIcon
        className="
          h-[40px] w-[40px] stroke-[1.5] text-white
          md:h-[55px] md:w-[55px]
          lg:h-[70px] lg:w-[70px]
        "
      />
    </div>
  );

  const detailsRows = (
    <div className="mt-[52px] flex flex-col gap-[30px]">
      <h2 className="text-center text-[18px] font-medium text-white">
        {city.current.description}
      </h2>

      <div className="flex justify-between text-[18px] text-white">
        <p>Temp Max</p>
        <div className="flex gap-[26px]">
          <p>{city.details.tempMax}°</p>
          <img
            className="h-[26px] w-[16px]"
            src="/icons/TempMaxIcon.svg"
            alt="MaxTemp"
          />
        </div>
      </div>

      <div className="flex justify-between text-[18px] text-white">
        <p>Temp Min</p>
        <div className="flex gap-[26px]">
          <p>{city.details.tempMin}°</p>
          <img
            className="h-[26px] w-[16px]"
            src="/icons/TempMinIcon.svg"
            alt="MinTemp"
          />
        </div>
      </div>

      <div className="flex justify-between text-[18px] text-white">
        <p>Humidity</p>
        <div className="flex gap-[26px]">
          <p>{city.details.humidity}%</p>
          <img
            className="h-[24px] w-[18px]"
            src="/icons/HumadityIcon.svg"
            alt="Humidity"
          />
        </div>
      </div>

      <div className="flex justify-between text-[18px] text-white">
        <p>Cloudy</p>
        <div className="flex gap-[26px] items-center">
          <p>{city.details.cloudiness}%</p>
          <Cloud className="h-[22px] w-[22px] stroke-[1.5] text-white" />
        </div>
      </div>

      <div className="flex justify-between text-[18px] text-white">
        <p>Wind</p>
        <div className="flex gap-[26px]">
          <p>
            {city.details.wind} {data.app.windUnit}
          </p>
          <img
            className="h-[19px] w-[24px]"
            src="/icons/WindIcon.svg"
            alt="Wind"
          />
        </div>
      </div>

      <div className="h-[50px] border-b-2 border-white/70" />
    </div>
  );

  const forecastSection = (
    <>
      <h1 className="mt-[10px] text-center text-[18px] font-normal text-white">
        Today&apos;s Weather Forecast...
      </h1>

      <div className="mt-[20px] flex flex-col gap-[20px]">
        {upcoming.map((item) => {
          const ItemIcon = getIcon(item.icon);
          return (
            <div
              key={item.date}
              className="flex items-center justify-between text-white"
            >
              <div className="flex items-center gap-[12px]">
                <ItemIcon className="h-[24px] w-[24px] stroke-[1.5] text-white" />
                <div>
                  <p className="text-[14px]">{item.day}</p>
                  <p className="text-[12px] text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>
              <p className="text-[18px]">{item.temperature}°</p>
            </div>
          );
        })}
      </div>
    </>
  );

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src={`/${city.current.background}`}
        alt={city.current.description}
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 mx-auto w-[90%] max-w-400 lg:hidden">
        <header className="flex items-center justify-between pt-[19px]">
          <Image
            src="/icons/Logo.svg"
            alt="Logo"
            width={39}
            height={20}
            className="h-[20px] w-[39px] md:h-[31px] md:w-[60px]"
          />
          {searchBox}
        </header>

        <div className="mt-[103px] flex flex-col justify-center">
          {currentWeatherBlock}
        </div>
      </div>

      <div
        className="
          absolute inset-x-0 bottom-0 top-[330px] z-20
          flex justify-center overflow-y-auto
          bg-black/25 backdrop-blur-[10px]
          lg:hidden
        "
      >
        <div className="mt-[107px] mb-[60px] w-[354px]">
          <h1 className="text-center text-[18px] font-normal text-white">
            Weather Details...
          </h1>
          {detailsRows}
          {forecastSection}
        </div>
      </div>

      <div className="hidden lg:block absolute left-[40px] top-[30px] z-10">
        <Image src="/icons/Logo.svg" alt="Logo" width={90} height={45} />
      </div>

      <div className="hidden lg:flex absolute bottom-[60px] left-[40px] z-10">
        {currentWeatherBlock}
      </div>

      <div
        className="
          hidden lg:flex
          absolute inset-y-0 right-0 z-20
          w-[438px] flex-col overflow-y-auto
          bg-black/25 px-[40px] py-[40px] backdrop-blur-[10px]
        "
      >
        {searchBox}

        <h1 className="mt-[40px] text-center text-[18px] font-normal text-white">
          Weather Details...
        </h1>
        {detailsRows}
        {forecastSection}
      </div>
    </section>
  );
}
