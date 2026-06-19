// import { useState } from 'react'
// import { useEffect, useState } from 'react'
// import { useEffect, useState } from 'react'
// import { useEffect, useState } from 'react'
// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import { product } from '../products'
import ProductsCard from './Components/ProductsCard';
// import ChildComponent from './Components/ChildComponent'
// import CounterButton from './Components/CounterButton'
// import CounterButton from './Components/CounterButton'
// import CounterButton from './Components/CounterButton'


//////state lifting
// function App() {

//   const [count, setCount] = useState(0)
//   return (
//     <>
//       <h1>{count}</h1>

//       <CounterButton count={count} setCount={setCount} />
//       <CounterButton count={count} setCount={setCount} />

//     </>
//   )
// }

// export default App


// export default function App() {
//   useEffect(()=>{
//     console.log("mounted component")
//   })
//   return (
//     <div>
//       <h1>App</h1>
//     </div>
//   )
// }




// export default function App() {
//   const[number, setNumber] = useState(0)
//   console.log(number)
//   useEffect(()=>{
//     console.log("render: mounted")
//     //
//   })
//   return (
//     <div>
//       <button onClick={()=>{
//         setNumber(number+1)
//       }}>render</button>
//     </div>
//   )
// }




// export default function App() {
//     const [count, setCount] = useState(0)

//   useEffect(() => {
//     if (count === 10) {
//       console.log("Count reached 10")
//     }
//   }, [count])

//   return (
//     <div>
//       <button onClick={
//         () => setCount(count + 1)
//         }>
//         count {count}
//       </button>
//     </div>
//   )
// }


// ////////////////////////////// started ////statelifting
// // 1)
// export default function App() {
//   return (
//     <div>
//       <CounterButton />
//     </div>
//   )
// }



// export default function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <CounterButton count={count} setCount={setCount}/>
//       <CounterButton count={count} setCount={setCount}/>
//     </div>
//   )
// }


///////////////////////// mounted  useEffect 

// export default function App() {
//   useEffect(()=>{
//     console.log("mounted component")
//   })
//   return (
//     <>
//     <h1>App</h1>
//     </>
//   )
// }



// export default function App() {
//   const [number, setNumber] = useState(0)
//   console.log(number)
//   useEffect(()=>{
//     console.log("rendered : mounted")
//   })

//   return (
//     <>
//       <div>
//         <button onClick={()=>{
//           setNumber(prev => prev+1)
//         }}>render {number}</button>
//       </div>
//     </>
//   )
// }




// export default function App() {
//   const [count, setCount] = useState(0)
//   const [number, setNumber] = useState(0)
//   console.log(`${count} : "count"`)
//   console.log(`${number} : "number"`)
//   useEffect(()=>{
//     console.log("rendered")
//   }, [count, number])
//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(count+1)
//       }}>rerender with count</button>

//       <button onClick={()=>{
//         setNumber(number+1)
//       }}>rerend with number</button>
//     </div>
//   )
// }



// ////// გამოიყენე useEffect როცა count ის ველიუგახდება 10, მაშინ გამოჩნდეს შენმა რენდერმა მიაღწია 10-ს
// export default function App() {
//   const[count, setCount] = useState(0)
//   console.log(count)
//   useEffect(()=>{
//     console.log("mount")
//     if(count === 10){
//       console.log("შენმა რენდერმა მიაღწია 10-s")
//     }
//   },[count])
//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(count+1)
//       }}>render</button>
//     </div>
//   )
// }



// /////// from childcomponent to app.jsx
// export default function App() {
//   const[number, setNumber] = useState(0)
//   return (
//     <div>
//       <ChildComponent number={number}/>
//       <button onClick={()=>{
//         setNumber(number+1)
//       }}>Icrease {number}</button>
//     </div>
//   )
// }


//////////from child component to appjsx -> 
// export default function App() {
//   const[number, setNumber]=useState(0)
//   const[isVisible, setIsVisible] = useState(true)
//   return (
//     <>
//       <div>
//         {/* <ChildComponent /> */}
//         {isVisible ? <ChildComponent number={number}/> : null}
//         <button onClick={()=>{
//           setNumber(number+1)
//         }}>increase {number}</button>

//         <button onClick={()=>{
//           setIsVisible(!isVisible)
//         }}>{isVisible ? "un" : ""}mount Component</button>
//       </div>
//     </>
//   )
// }



export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div>
      <header>
        <h1>ეს არის ჩვენი მაღაზია</h1>
        კალათა: <span>{cartCount}</span>
      </header> 

      <main className="card">
        {
        product.map(products => (
          <ProductsCard
            key={products.id}
            product={products}
            onAddToCart={handleAddToCart}
          />
        ))
        }
      </main>
    </div>
  );
}