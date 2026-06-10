import './App.css'
import HeadingComponent from './Components/HeadingComponent'
import InputComponent from './Components/InputComponent'
import ParagraphComponent from './Components/ParagraphComponent'

function App() {
  let number = 10
  let arr = ["Swimming", "Football", "Vacation"]
  let str = "Giorgi"

  function fnc(){
    return "This is function"
  }

  let obj ={
    name:"Giorgi",
    Age:26
  }

  return (
    <>
      {/* შექმენი 3 კომპონენტი,h1,input,paragraph. და ცალ-ცალკე შემოიტანე app.jsx-ში. 
      1) რა არის კომპონენტი? უპასუხე ტექსტურად 
      2)გამოაჩინე მონაცემი app.jsx-ში number,arr,str,fnc,obj, არ დაიბნეტ ერთ app.jsx-ში შეგიძლიათ ყველაფრის გამოჩენა */}

      <HeadingComponent />
      <InputComponent />
      <ParagraphComponent />
      
      <div>
        <h1>რა არის კომპონენტი?</h1>
        <p>კომპონენტი არის დამოუკიდებელი კონტეინერი/სექცია/ბლოკი, რომელიც გვიმარტივებს სამუშაო სივრცეს ფუნქციების ჩასაშენებლად. კომპონენტი შეგვიძლია გამოვიყენოთ მრავალჯერ კონკრეტული ინტერფეისისთვის, მაგ: ჰედერ კომპონენტი, სერჩ კომპონენტი, ნავბარი, ფუთერი და ა.შ, რაც მიგვანიშნებს იმას რომ მთელი გვერდის სექციები/კონტეინერები შეიძლება იყოს დაყოფილი კომპონენტებად. ანუ რეალურად ეს კომპონენტები გვეხმარება დიდი აპლიკაციის მცირე და მართვად ნაწილებად დაყოფაში.</p>
      </div>

      <div>
        <h1>number</h1>
        <p>{number}</p>
        <h1>Arr: {arr}</h1>
        <h1>Str: {str}</h1>
        <h1>Function</h1>
        <p>{fnc()}</p>
        <h1>Obj: Name {obj.name} and age {obj.Age}</h1>
      </div>

    </>
  )
}

// function HeadingComponent(){
//   return(
//     <>
//     <h1>Hello World From Heading, h1 param </h1>
//     </>
//   )
// }

// function InputComponent(){
//   return(
//     <>
//     <input type="text" placeholder='input text'/>
//     </>
//   )
// }

// function ParagraphComponent(){
//   return(
//     <>
//     <p>This is Paragraph component</p>
//     </>
//   )
// }

export default App
