// import { useState } from "react"

// import { useState } from "react"

// export default function CounterButton(props) {
//     // const [count, setCount] = useState(0)
//     // console.log(count)
//   return (
//     <div>
//       <button onClick={()=>{
//         props.setCount(props.count+1)
//       }}>Count is {props.count}</button>
//     </div>
//   )
// }


// export default function CounterButton({ count, setCount }) {
//     // const [count, setCount] = useState(0)
//     // console.log(count)
//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(count+1)
//       }}>Count is {count}</button>
//     </div>
//   )
// }




// export default function CounterButton() {
//     const [score, setScore] = useState(0)
//     const [hover, setHover] = useState(false)
    
//     let className = 'counter';
//     if (hover) {
//         className += ' hover';
//     }

//   return (
//     <div 
//         className={className}
//         onPointerEnter={() => setHover(true)}
//         onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() =>
//         setScore(score+1)
//       }>Add One</button>
//     </div>
//   )
// }
