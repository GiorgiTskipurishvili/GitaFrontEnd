// import { useEffect } from "react"

import { useEffect } from "react"

// export default function ChildComponent({number}) {
//     useEffect(()=>{
//         console.log("component mounted")
//     }, [number])
//   return (
//     <div>
//       <h1>ChildComponent {number}</h1>
//     </div>
//   )
// }


export default function ChildComponent({number}) {
    useEffect(()=>{
        console.log("mount")

        return()=>{
            console.log("unmounted")
        }
    },[])
  return (
    <>
    ChildComponent {number}
    </>
  )
}
