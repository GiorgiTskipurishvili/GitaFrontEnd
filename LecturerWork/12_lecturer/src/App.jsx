// import './App.css'
// import ChildComponent from './Components/ChildComponent'
// import NameComponent from './Components/NameComponent'

import { useState } from "react"
// import NameComponent from "./Components/NameComponent"

// function App() {


//   return (
//     <>
//     {/* <h1>This is parent component</h1>
//     <ChildComponent
//     name = "Giorgi"
//     age={25}
//     favouriteFoods={["mwvadi", "xinkali", "shaurma"]}
//     images = {{
//       weatherImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGpDVTDZjyKOcnjFodEoSiipq2FctE5r90g&s"
//       }
//     }
//      /> */}


//       <NameComponent name="nika"/>
//       <NameComponent name="giorgi" changeColor="changeNameComponentBgColor"/>
//       <NameComponent name="lado"/>

//     </>
//   )
// }

// function ChildComponent(props){
//   console.log(props)
//   return(
//     <>
//       {/* <h2 className='changeColor'>This is child component</h2> */}
//       <div>
//         <h1>My name is {props.name} and my age is {props.age}</h1>
//         <h2>My food is {props.favouriteFoods}</h2>
//       </div>
//       <div>
//         <img src="{props.images.weatherImage}" alt="amindisfoto" />
//       </div>
//     </>
//   )
// }


// export default App

/////////// Dynamic className
// import NameComponent from './Components/NameComponent'
// export default function App() {
//   return (
//     <div>
//       <NameComponent name="nika"/>
//       <NameComponent name="giorgi" changeColor="changeNameComponentBgColor"/>
//       <NameComponent name="lado"/>
//     </div>
//   )
// }



// /////////map

// function App() {
//   // let nameArr = ["nika", "luka", "nino"]
//   let nameArr2 = [
//     {id:1, name:"nika"},
//     {id:2, name:"giorgi"},
//     {id:3, name:"gela"},
//     {id:4, name:"giorgi"}
//   ]
//   return (
//     <>
//       {
//       nameArr2.map((el, index) => (
//         <div key={el.id}>
//           {/* {el.name} */}
//           <NameComponent name ={el.name} changeColor={index === 1 ? "changeNameComponentBgColor" : ""} />
//         </div>
//       ))
//       }
//     </>
//   )
// }


// export default App






// ////////// eventListeners

// export default function App() {

//   function handleOnChange(event){
//     console.log(event.target.value)
//   }

//   return (
//     <div>
//       {/* <input type="text" onChange={
//         (event) =>{
//           console.log(event.target.value)
//         }
//       }/> */}
//       {/* <input type="text" onMouseOver={
//         () =>{
//           console.log("mausi", Date())
//         }
//       }/> */}

//       <input type="text" onChange={handleOnChange} />

//     </div>
//   )
// }




///////////////// conditional rendering

export default function App() {
  // let isDark = true
  let [isDark, setIsDark] = useState(true)
  // console.log(isDark)
  return (
    <>
      {
        isDark ?  <h1>it is dark</h1>: <h1>it is light</h1>
      }
      <button onClick={()=>{
        setIsDark(!isDark)
      }}>make it light</button>
    </>
  )
}
