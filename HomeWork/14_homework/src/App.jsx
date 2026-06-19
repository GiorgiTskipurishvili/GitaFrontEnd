import { useEffect, useState } from 'react';
import './App.css'
import LiveTracker from './Components/LiveTracker';
/*
შეგიძლიათ ეს ქალაქების მასივი პირდაპირ თქვენს App.jsx-ში, ფაილის ზედა ნაწილში (ფუნქციის გარეთ) ჩასვათ
const citiesData = [
  { id: 1, name: "თბილისი", temp: 25, condition: "მზიანი" },
  { id: 2, name: "ბათუმი", temp: 22, condition: "წვიმიანი" },
  { id: 3, name: "ქუთაისი", temp: 24, condition: "ღრუბლიანი" }
];

საწყისი ჩატვირთვა (Mounting): App.jsx-ში დაწერეთ useEffect ცარიელი მასივით ([]). აპლიკაციის პირველად ჩატვირთვისას 
კონსოლში (Console) ერთხელ უნდა დაიბეჭდოს მესიჯი: ამინდის აპლიკაცია წარმატებით ჩაიტვირთა

App.jsx-ში შექმენით სტეიტი activeCity (საწყის მნიშვნელობად მიეცით თბილისის ობიექტი).
ეკრანზე გამოაჩინეთ ღილაკები ქალაქების სახელებით. მათზე დაჭერისას უნდა იცვლებოდეს activeCity სტეიტი და ეკრანზეც უნდა იცვლებოდეს არჩეული ქალაქის მონაცემები (ტემპერატურა, ამინდი).
დაწერეთ useEffect, რომელიც თვალს მიადევნებს activeCity სტეიტს. ყოველ ჯერზე, როცა ქალაქი შეიცვლება, ბრაუზერის თაბის (Tab) სათაური უნდა შეიცვალოს დინამიურად. მაგალითად: document.title = "ამინდი: თბილისი"

შექმენით სრულიად ახალი შვილი კომპონენტი სახელად LiveTracker.jsx (შიგნით უბრალოდ ეწეროს ტექსტი: " Live სინქრონიზაცია ჩართულია...").
App.jsx-ში შექმენით თოგლ (Toggle) სტეიტი isLive (true/false) და შესაბამისი ღილაკი: "ჩართე Live რეჟიმი" / "გათიშე Live რეჟიმი".
ტერნარული ოპერატორით მართეთ ამ კომპონენტის გამოჩენა: თუ isLive არის true, <LiveTracker /> უნდა გამოჩნდეს, თუ false გაქრეს.

LiveTracker.jsx კომპონენტის შიგნით დაწერეთ useEffect ([] მასივით). კომპონენტის გაჩენისას კონსოლში დაწერეთ "მონიტორინგი დაიწყო".
შიგნით ჩართეთ setInterval, რომელიც ყოველ 2 წამში კონსოლში დალოგავს მესიჯს: ამინდის მონაცემები სინქრონიზებულია ბაზასთან....
უმნიშვნელოვანესი ნაწილი: დაწერეთ Cleanup ფუნქცია (return () => {}), რომელიც ამ კომპონენტის გაქრობისას (Unmount) გათიშავს ტაიმერს (clearInterval)

ვიზუალურად რომ აგიხსნათ ამრტივად გქონდეთ ერთი ბოქსი რომელშიც იქნება 3 button თბილისი ბათუმი თელავი. რომელსაც დააჭერ იმის ტემპერატურა უნდა გამოვიდეს ასევე ქვემოთ აიღეთ ერთი ბათონი "ჩართე live რეჟიმი" რომელსაც როცა დააჭერთ კონსოლში უნდა დაილოგოს რაღაც ინტერვალსი ერთხელ რომ Live მონიტორინგი დაიწყო და ცოტახანში ამინდის მონაცემები სინქრონიზებულია ბაზასთან...
ჯამში ასეთი ლოგი უნდა იყოს კონსოლში " ამინდის აპლიკაცია წარმატებით ჩაიტვირთა!
 Live მონიტორინგი დაიწყო
 ამინდის მონაცემები სინქრონიზებულია ბაზასთან..."

*/

const citiesData = [
  { id: 1, name: "თბილისი", temp: 25, condition: "მზიანი" },
  { id: 2, name: "ბათუმი", temp: 22, condition: "წვიმიანი" },
  { id: 3, name: "ქუთაისი", temp: 24, condition: "ღრუბლიანი" }
];

function App() {
  useEffect(()=>{
    console.log("ამინდის აპლიკაცია წარმატებით ჩაიტვირთა")
  },[])

  const[activeCity, setActiveCity] = useState(citiesData[0]);
  useEffect(()=>{
    document.title = `ამინდი: ${activeCity.name}`;
  },[activeCity])

  const[isLive, setIsLive] = useState(false)
  
  return (
    <>
    <div>
      {
        citiesData.map((city) =>(
          <button key={city.id} onClick={() => 
            setActiveCity(city)
          }>{city.name}</button>
        ) )
      }
    </div>

    <div>
      <h2>{activeCity.name}</h2>
      <p>{activeCity.condition}</p>
      <span>{activeCity.temp}</span>
    </div>

    <div>
      <button onClick={()=>{
        setIsLive(!isLive)
      }}> {isLive ? "გათიშე Live რეჟიმი" : "ჩართე Live რეჟიმი" } </button>

      {isLive?<LiveTracker /> : null}
    </div>
    </>
  )
}

export default App
