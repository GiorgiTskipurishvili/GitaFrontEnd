
// export default function CounterButton({ count, setCount }) {
//   return (
//     <div>
//     <button onClick={() => setCount(count + 1)}>
//       Add One {count}
//     </button>
//     </div>
//   )
// }

// //////////started  
// // 1)
// import { useState } from "react"



// export default function CounterButton() {
//   const[count, setCount] = useState(0)
//   return (
//     <div>
//       <button onClick={()=>{
//         // setCount(count+1)
//         setCount(prev => prev+1)
//       }}>Add Count {count}</button>
//     </div>
//   )
// }



export default function CounterButton({count,setCount}) {
  return (
    <div>
      <button onClick={()=>{
        setCount(prev=>prev+1)
      }}>Add Count {count}</button>
    </div>
  )
}
