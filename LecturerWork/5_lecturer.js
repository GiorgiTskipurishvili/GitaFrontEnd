// 1 შექმენი წრის ობიექტი, რომელიც მიიღებს რადიუსს და ექნება getArea მეთოდი

const { time } = require("console");

// let radiusObj = {
//     getArea : function(r){
//         let p = 3.14159
//         let fixed = p.toFixed(2)
//         return fixed * r * r
//     }
// }
// console.log("fartobi = ", radiusObj.getArea(2));



// 2 შექმენი ობიექტების მასივი და კონსოლში დაბეჭდე მხოლოდ მათი სახელები
const people = [
{ name: "Giorgi", age: 21 },
{ name: "Nika", age: 19 },
{ name: "Mariam", age: 25 },
{ name: "Lika", age: 30 },
];

// people.forEach((el) => {
//     console.log(el.name)
// })

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name)
// }

// 3 შექმენი ობიექტების მასივი, გაფილტრე ისინი 20$-ზე მეტ ფასზე და დათვალე ჯამი
// const products = [
// { title: "Mouse", price: 15 },
// { title: "Keyboard", price: 45 },
// { title: "USB Cable", price: 7 },
// { title: "Headphones", price: 29.9 },
// { title: "Webcam", price: 52 },
// ];

// let filteredArr = products.filter((el) => el.price > 20).reduce((tot, curr) => tot + curr.price, 0);
// console.log(filteredArr)


// 4 გაქვს ობიექტების მასივი, სადაც თითოეულს აქვს year, დაალაგე კლებადობით
// const movies = [
// { title: "Inception", year: 2010 },
// { title: "Interstellar", year: 2014 },
// { title: "Memento", year: 2000 },
// { title: "Tenet", year: 2020 },
// ];

// // let sortedMovie = movies.sort((a, b) => b.year - a.year);
// let sortedMovie = movies.sort((a, b) => b.year - a.year).sort((a, b) => a.title.localeCompare(b.title));
// console.log(sortedMovie)

// // 5 გაქვს ლეპტოპების მასივი, იპოვე ყველაზე ძვირი და გამოიტანე კონსოლში
// const laptops = [
// { model: "Dell XPS 13", price: 1800 },
// { model: "MacBook Pro 14", price: 2499 },
// { model: "Lenovo ThinkPad X1", price: 2100 },
// { model: "Asus Zephyrus G14", price: 1999 },
// ];

// let sortedArr = laptops.sort((a, b) => a.price - b.price);
// let maxPrice = sortedArr[sortedArr.length - 1].price 
// console.log(maxPrice)

// 6 შექმენი მანქანის ობიექტი, რომელსაც ექნება მარკა, მოდელი და გამოშვების წელი, დაამატე მეთოდი, რომელიც დააბრუნებს მანქანის სრულ აღწერას
// let carObj ={
//     mark: "Toyota",
//     model:"Supra MK4",
//     year: 2001,
//     fullDescription: function(){
//         console.log(`Mark: ${this.mark}, Model: ${this.model}, Year: ${this.year}`)
//     }
// }
// carObj.fullDescription()



// let obj = {
//     name: "Giorgi",
//     age: 12 
// }

// obj.name = "Luka"

// console.log(obj.name)

// let lastname = "Giorgadze"
// lastname[0] = "L"
// console.log(lastname)


// let name = "nika"


// console.log(1)
// console.log(2)
// console.log(3)


// function one(){
//     console.log(1)
//     two()
// }

// function two(){
//     console.log(2)
//     three()
// }

// function three(){ 
//     console.log(3)
// }

// one()


// function one(){ 
//     one()
// }

// one() // Stack overflow error

// console.time()
// for(let i = 0; i < 1000; i++){
//     // console.log(i)
// }
// console.timeEnd()

// setTimeout(() => {
//     console.log("გაიღვიძეეე")
// }, 5000)

// console.log(2)


// setTimeout(() => {
//     for(let i = 0; i < 1000; i++){
//             console.log(i)
//     }
// }, 1000);
// console.log(2)



// setTimeout(() => {
//     console.log("Chaqafuli")
// }, 3000);

// console.log("kvercxi")

// let timer = 0 
// let interval = setInterval(() => {
//     console.log(timer)
//     timer++
//     if(timer > 3){
//         clearInterval(interval)
//     }
// }, 1000)

// console.log(1)


// https://jsonplaceholder.typicode.com/users
// const APIKEY = "https://jsonplaceholder.typicode.com/users"

// async function fetchAPI(API){
//     let res = await fetch(API)
//     let data = await res.json()
//     let slicedData = data.slice(0, -5)
//     console.log(slicedData)
// }

// fetchAPI("https://jsonplaceholder.typicode.com/users")


function fetchAPI(API){
    fetch(API).then((res) => res.json()).then((data) => console.log(data)).catch((error) => console.log(error))

    console.log("API: ", API)
}

fetchAPI("https://jsonplaceholder.typicode.com/users")