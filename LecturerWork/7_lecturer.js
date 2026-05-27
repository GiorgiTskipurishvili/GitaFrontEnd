// 1. დაწერ 2 ფრომისი და გაჰენდლე ისინი then/catch -ით
// 2. გაქვს 2 API შენი მიზანია გაიგო რომელი უფრო სწრაფად აბრუნებს პასუხს  let api1 = https://jsonplaceholder.typicode.com/users let api2 = https://jsonplaceholder.typicode.com/posts
// 3. დაწერ 2 ფრომისი და გამოიყენე მეთოდები როგორიცაა all,allsetteld,race,any
// 4. დაწერე 4 ფრომისი და დააბრუნე მარტო ისინი რომელიც დარესოლვდება
// 5. დაწერე 4 ფრომისი და დააბრუნე მარტო ისინი რომელიც დარეჯექთდება
//  6. function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

// // 1. დაწერ 2 ფრომისი და გაჰენდლე ისინი then/catch -ით

// let myPromise1 = new Promise((res,rej)=>{
//     res("Hello")
// })

// let myPromise2 = new Promise((res,rej)=>{
//     rej("World")
// })

// myPromise1.then((res) => console.log(res)).catch((error) => console.log(error))
// myPromise2.then((res) => console.log(res)).catch((error) => console.log(error))



// // 2. გაქვს 2 API შენი მიზანია გაიგო რომელი უფრო სწრაფად აბრუნებს
// //  პასუხს  let api1 = https://jsonplaceholder.typicode.com/users 
// // let api2 = https://jsonplaceholder.typicode.com/posts

// async function fetchPosts(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data = await res.json()
//     return data[0]
// }

// async function fetchUsers(){
//     let res = await fetch("https://jsonplaceholder.typicode.com/users")
//     let data = await res.json()
//     return data[0]
// }

// Promise.race([fetchPosts(), fetchUsers()]).then(res =>console.log(res))



// 3. დაწერ 2 ფრომისი და გამოიყენე მეთოდები როგორიცაა all,allsetteld,race,any
// let myPromise1 = new Promise((res,rej)=>{
//     res("first")
// })
// let myPromise2 = new Promise((res,rej)=>{
//     res("second")
// })

// // Promise.all([myPromise1, myPromise2]).then(res => console.log(res));
// Promise.all([myPromise1, myPromise2]).then((one,two) => console.log(one,two));


// let myPromise1 = new Promise((res,rej)=>{
//     res("first")
// })
// let myPromise2 = new Promise((res,rej)=>{
//     rej("second")
// })

// // Promise.allSettled(([myPromise1,myPromise2])).then(res => console.log(res));
// // Promise.race(([myPromise1,myPromise2])).then(res => console.log(res));



// // 4. დაწერე 4 ფრომისი და დააბრუნე მარტო ისინი რომელიც დარესოლვდება
// let myPromise1 = new Promise((res, rej)=>{
//     res(1)
// })
// let myPromise2 = new Promise((res, rej)=>{
//     rej(2)
// })
// let myPromise3 = new Promise((res, rej)=>{
//     res(3)
// })
// let myPromise4 = new Promise((res, rej)=>{
//     rej(4)
// })
// let myPromise5 = new Promise((res, rej)=>{
//     res(5)
// })
// let myPromise6 = new Promise((res, rej)=>{
//     rej(6)
// })

// // Promise.allSettled([myPromise1, myPromise2, myPromise3, myPromise4, myPromise5,myPromise6]).then((res)=> console.log(res));
// Promise.allSettled([myPromise1, myPromise2, myPromise3, myPromise4, myPromise5,myPromise6]).then((res)=> {
//     // let filteredPromises = res.filter(el => el.status ==="fulfilled")
//     let filteredPromises = res.filter(el => el.status ==="rejected")
//     console.log(filteredPromises)
// });



//  6. function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// // console.log("one")
// // block()
// // console.log("two")
// // იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// // აუცილებელია გამოიყენო ფრომისი

// let myPromise = new Promise((res, rej) => {
//     res('hello')
// })

// function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log(1)
// // block()
// myPromise.then(res => block())
// console.log(2)



//clases

// class DefaultClass{
//     name = "giorgi"
//     lastName = "chabchabadze"
//     age = 10
// }

// let person = new DefaultClass
// // console.log(person)
// console.log(person.age)
// console.log(person.name)
// console.log(person.lastName)



// function foo(name){
//     console.log(`hello ${name}`)
// }

// foo("nika")
// foo("luka")


// //2) constructor 
// class DefaultClass{
//     constructor(name, age, lastName){
//         this.name = name
//         this.age = age
//         this.lastName = lastName
//     }

//     getInfo(){
//         console.log(`i am ${this.name}, ${this.age} years old, last name is ${this.lastName}`)
//     }
// }

// let person1 = new DefaultClass("Nika", 20, "Nikadze")
// let person2 = new DefaultClass("Giorgi", 28, "Giorgadze")

// // console.log(person1)
// // console.log(person2)

// person1.getInfo()
// person2.getInfo()



// //3) მემკვიდრეობა 

// class Animal{
//         #age ////ეს არის # ამოღება მაგ: age ამოვიღოთ 
//         constructor(name, age, color){
//         this.name = name
//         this.age = age
//         this.color = color
//     }
// }

// class Dog extends Animal{
//     // constructor(name, age, color){
//     //     this.name = name
//     //     this.age = age
//     //     this.color = color
//     // }
//     constructor(name, age, color, legs){
//         super(name,age,color)
//         this.legs = legs
//     }
// }

// class Fish extends Animal{
//     // constructor(name, age, color){
//     //     this.name = name
//     //     this.age = age
//     //     this.color = color
//     // }
//         constructor(name, age, color,fin){
//         super(name, age,color)
//         this.fin = fin
//     }
// }

// class Fox extends Animal{
//     constructor(name, age, color){
//         super(name, age,color)
//     }
// }

// let instance1 = new Dog("max", 3, "black",4)
// let instance2 = new Fish("nemo", 2, "red and black",2)
// let instance3 = new Fox("test", 4, "red and black")

// console.log(instance1)
// console.log(instance2)
// console.log(instance3)


// // 4) calculator
// class Calculator{
//     constructor(initialValue){
//         this.initialValue = initialValue
//         return this
//     }

//     add(num){
//         this.initialValue += num
//         return this
//     }

//     sub(num){
//         this.initialValue -= num
//         return this
//     }

//     mul(num){
//         this.initialValue *= num
//         return this
//     }

//     div(num){
//         this.initialValue /= num
//         return this
//     }

//     getResult(){
//         console.log(this.initialValue)
//     }
// }

// let calc = new Calculator(10);

// calc.add(20)
// calc.mul(2)
// calc.div(3)
// calc.sub(2)

// calc.getResult()

// // 1.შექმენი Rectangle (მართკუთხედი) კლასი, რომელიც იღებს სიგანეს და სიმაღლეს, და დაამატე შემდეგი მეთოდები: getArea(), getPerimeter(), isSquare().
// class Rectangle{
//     constructor(width, height){
//         this.width = width
//         this.height = height
//     }

//     getArea(){
//         console.log(this.height * this.width)
//     }

//     getPerimeter(){
//         console.log(2*(this.height + this.width))
//     }

//     isSquare(){
//         if(this.height === this.width){
//             return true
//         }else{
//             return false
//         }
//     }
// }

// let rect = new Rectangle(20,20)
// rect.getArea()
// rect.getPerimeter()
// console.log(rect.isSquare())



// // 2. შექმენი Circle (წრე) კლასი, რომელსაც ექნება მეთოდი, რომლითაც რადიუსის მიხედვით ფართობს დაითვლის.
// class Circle{
//     constructor(r){
//         this.radius = r
//     }
//     getArea(){
//         return Math.PI * this.radius * this.radius
//     }
// }

// let circle = new Circle(3)
// console.log(circle.getArea())

// 3. შექმენი Car (მანქანა) კლასი, რომელსაც ექნება property-ები: make, model, year. შემდეგ შექმენი მისი ექსტენშენი (მაგალითად ElectricCar), რომელსაც დაემატება batteryLevel.
class Car{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
}

class ElectricCar extends Car{
    constructor(make, model, year, batteryLevel)
    {
        super(make, model, year)
        this.batteryLevel = batteryLevel
    }    
}

let car = new Car("Mercedes", "C class", 1999)
let car2 = new ElectricCar("Tesla", "S model", 2019, 99)


console.log(car)
console.log(car2)