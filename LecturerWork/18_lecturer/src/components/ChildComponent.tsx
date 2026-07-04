import { useContext } from "react"
import { MyContext } from "../App"

export default function ChildComponent() {
    const context = useContext(MyContext)
    console.log(context)
  return (
    <>
        <h1>ChildComponent</h1>
        <h2>ეს მონაცემი მოდის მშობლიდან შვილში კონტექსტის დახმარებით : {context?.name}</h2>
    </>
  )
}
