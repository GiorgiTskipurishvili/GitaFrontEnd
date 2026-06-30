import { useEffect, useState } from 'react'
import './App.css'
import type { IUser } from './interface'
import axios from 'axios'
import UserCard from './components/UserCard'
/*
interfaces.ts ფაილში აღწერეთ IUser ინტერფეისი, რომელიც მოიცავს API-დან წამოღებულ 
შემდეგ ველებს: id (number), name (string), username (string), email (string), 
phone (string), website (string) და company (ობიექტი, შიგნით name: string ველით). 
შემდეგ, App.tsx-ში კომპონენტის საწყისი ჩატვირთვისას (useEffect-ითა და ცარიელი მასივით [])
 axios-ით წამოიღეთ იუზერები ლინკიდან https://jsonplaceholder.typicode.com/users,
  შეინახეთ users სტეიტში (რომელიც ტიპად მიიღებს IUser[]) და თითოეული მომხმარებელი 
  ეკრანზე ცალკე საინფორმაციო ბარათად (Card) გამოსახეთ. აპლიკაციას 
  ზედა ნაწილში დაამატეთ საძიებო input ველი და შესაბამისი სტეიტი searchQuery
   რენდერინგამდე .filter() მეთოდის გამოყენებით აიძულეთ აპლიკაციას,
    რომ მომხმარებლის მიერ ჩაწერილი ტექსტის მიხედვით იუზერები ეკრანზე დინამიურად მოიძებნოს 
    მაგალითად ინფუთში თუ ჩაწერთ გიორგი გიორგი რომელსაც ჰქვია ის უნდა წამოიღოს სერჩის მსგავსი.
*/
function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(()=>{
    const fetchUsers = async () => {
    const res = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(res.data);
  };
    fetchUsers()
  },[])

  const [searchQuery, setSearchQuery] = useState("")
  // const filteredUsers = users.filter((user)=> user.name.toLocaleLowerCase().includes(searchQuery.toLowerCase()))
  const filteredUsers = users.filter((user)=> user.name.toLocaleLowerCase().startsWith(searchQuery.toLowerCase()))

  return (
    <>
      <div>
        {
          <input type="text" placeholder='Search user'value={searchQuery} onChange={(el) => setSearchQuery(el.target.value)} className='searchOfInput'/>
        }
      </div>
      {
        <div className='cards'>
          {
            // users.map((user) => (
            //   <UserCard key={user.id} user={user}></UserCard>
            // ))
            filteredUsers.map((user) => (
              <UserCard key={user.id} user={user}></UserCard>
            ))
          }
        </div>
      }
    </>
  )
}

export default App
