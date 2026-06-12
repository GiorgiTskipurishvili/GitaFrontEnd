// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import UserCard from './Components/UserCard'
/*
App კომპონენტში შექმენით ობიექტების მასივი users (მინიმუმ 3-4 მომხმარებელი).
თითოეულ ობიექტს უნდა ჰქონდეს: id, name, age, role (მაგ: "Admin", "User"), skills (სტრინგების მასივი) და photo(სურათის ლინკი) asset-ებში შემოიტნაეთ ფოტო ან picsum.photos ლინკი გამოიყენეთ.
მასივს უნდა გადაუაროთ .map() მეთოდით და თითოეული მომხმარებლისთვის დაარენდეროთ ცალკე კომპონენტი <UserCard />.
Props-ის გადაცემა:
<UserCard /> კომპონენტს Props-ით უნდა გადაეცეს მომხმარებლის ყველა მონაცემი.
კომპონენტის შიგნით სწორად უნდა გამოაჩინოთ სახელი, ასაკი, სურათი და სკილები.
დინამიური ClassName:
თუ მომხმარებლის role არის "Admin", ბარათს (CSS-ში) უნდა დაედოს განსხვავებული ფონი (მაგალითად, წითელი ან ოქროსფერი ჩარჩო/ბექგრაუნდი), ხოლო ჩვეულებრივ მომხმარებელზე - სტანდარტული(ფერითქვენ მოიფიქრეთ).
*/

function App() {
  let users = [
    {id:1, name:"Giorgi", age:26, role:"Admin", skills:["React", "JavaScript", "CSS"], photo:"https://picsum.photos/200?random=1"},
    {id:2, name:"Nika", age:24, role:"User",skills:["HTML", "CSS"], photo:"https://picsum.photos/200?random=2"},
    {id:3, name:"Davit", age:33, role:"User", skills:["Python", "Django"], photo:"https://picsum.photos/200?random=3"},
    {id:4, name:"Sandro", age:23, role:"Admin", skills:["React", "Node.js"], photo:"https://picsum.photos/200?random=4"}
  ]

  return (
    <>

    {
      users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          role={user.role}
          skills={user.skills}
          photo={user.photo}
        />
      ))
    }

    </>
  )
}

export default App
