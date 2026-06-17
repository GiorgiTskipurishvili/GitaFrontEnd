import { useState } from 'react'
import { products } from '../Product'
import './App.css'
import ProductCard from './Components/ProductCard'

/*
შექმენით პროდუქტების მასივი products (მინიმუმ 4 პროდუქტი). 
თითოეულს უნდა ჰქონდეს: id, title, price და category (მაგ: Electronics, Clothing).

App.jsx-ში .map()-ის გამოყენებით დაარენდერეთ კომპონენტი <ProductCard /> თითოეული პროდუქტისთვის. 
არ დაგავიწყდეთ სწორი key პროპის გადაცემა!

State Lifting: App.jsx-ში შექმენით სტეიტი cartCount
(კალათაში არსებული ნივთების რაოდენობა, საწყისი მნიშვნელობა 0).

თითოეულ <ProductCard />-ში დაამატეთ ღილაკი "Add to Cart". 
ამ ღილაკზე დაჭერისას, App-ში არსებული საერთო cartCount უნდა იზრდებოდეს 1-ით.

დინამიური კლასები: თუ პროდუქტის კატეგორია არის "Electronics", 
ბარათს CSS-ით დაადეთ განსხვავებული ჩარჩო ან ფონი.

App კომპონენტის სულ ზედა ნაწილში ლამაზად გამოაჩინეთ ტექსტი:  კალათა: {cartCount} ნივთი.
*/
function App() {
  const[cartCount, setCartCount] = useState(0)

  return (
    <>
    <div className="cartOfDiv">
      <h1>Cart count: {cartCount}</h1>
    </div>
    {
      products.map((product)=>(
        <div key={product.id}>
          <ProductCard product={product}  cartCount={cartCount} setCartCount={setCartCount}/>
        </div>
      ))
    }
    </>
  )
}

export default App
