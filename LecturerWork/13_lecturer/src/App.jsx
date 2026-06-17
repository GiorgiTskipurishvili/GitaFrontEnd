// import { useState } from 'react'
// import { useState } from 'react';
import { users } from '../User'
import './App.css'
import UserCard from './Components/UserCard'
// import CounterButton from './Components/CounterButton'
// import ChildComponent from './Components/ChildComponent'

///////1) Component + props 
// function App() {

//   return (
//     <>
//     <ChildComponent name="Giorgi"/>
//     <ChildComponent name="Lado"/>
//     <ChildComponent name="Zaka"/>

//     {/* <ChildComponent name="Giorgi"/> */}
//     </>
//   )
// }

// export default App


// export default function App() {
//   return (
//     <div>
//       <ChildComponent name="Mariam" age = {22}/>
//     </div>
//   )
// }



///////// 2)  Count with useState
// export default function App() {
//   const[count, setCount] = useState(0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={ ()=> {
//         setCount(count+1)
//         // setCount(count+2)
//         // setCount(count+3)
//         // setCount(count => count +1)
//         // setCount(count => count +2)
//         // setCount(count => count +3)
//       }}>Count up</button>
//       <button onClick={()=>{
//         setCount(count-1)
//       }}>Count Down</button>
//       <button onClick={()=>{
//         setCount(0)
//       }}>Reset</button>
//     </div>
//   )
// }

////////
//////////// CounterButton 
// export default function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <>
//     <CounterButton count={count} setCount={setCount}/>
//     <CounterButton count={count} setCount={setCount}/>
//     </>
//   )
// }


// export default function App() {
//   return (
//     <div>
//       <CounterButton />
//       <CounterButton />
//     </div>
//   )
// }

// /////second moment for counter 
// //// State Lifting
// export default function App() {
//   const[score, setScore] = useState(0)

//   return (
//     <div>
//       <Counter score={score} setScore={setScore}/>    
//       <Counter score={score} setScore={setScore}/>    
//     </div>
//   )
// }

// function Counter({score, setScore}){
//   // let className = 'counter';
//   return(
//     <div>
//       <h1>{score}</h1>
//       <button onClick={() => {
//         setScore(score+1)
//       }}>Add One</button>
//     </div>
//   );
// }



////// დავალების განხილვა 

export default function App() {
  return (
    <>
    {
      users.map((user)=>(
        <div key={user.id}>
          <h1>Users List</h1>
          <UserCard user={user}/>
        </div>
      ))
    }
    </>
  )
}
