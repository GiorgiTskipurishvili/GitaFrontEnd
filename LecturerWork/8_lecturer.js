// // 4. შექმენი library კლასი, რომელიც ინახავს წიგნების სიას arrayში. 
// // დაამატე მეთოდები addBook(), removeBook(), listBooks()
// class Library{
//     constructor(){
//         this.booksArr = []
//     }

const { type } = require("os")

//     // წიგნის დამატება
//     addBook(book) {
//         let lastId = this.booksArr[this.booksArr.length - 1]?.id || 0
//         let newObj = {
//             id:lastId + 1,
//             book
//         }

//         this.booksArr.push(newObj)
//         // this.booksArr.push(book)
//     }

//     // წიგნის წაშლა id-ის მიხედვით
//     removeBook(id) {
//         this.booksArr = this.booksArr.filter(el => el.id !== id)
//     }

//     // ყველა წიგნის ჩვენება
//     listBooks() {
//         // return this.booksArr
//         console.log(this.booksArr)
//     }
// }

// let library2 = new Library()
// library2.addBook("book1")
// library2.addBook("book2")
// library2.addBook("book3")
// library2.removeBook("book2")
// library2.listBooks()



// // 5 შექმენი BankAccount კლასი, რომელსაც ექნება მეთოდები: deposit(), withDraw(), transferMoney, transactionHistory(), getBalance()
// class BankAccount{
//     constructor(initialValue){
//         this.initialValue = initialValue
//         this.history = []
//     }

//     deposit(money){
//         this.initialValue += money
//         this.history.push({
//             type:"deposit",
//             amount: money,
//             date: Date()
//         })
//     }

//     withDraw(money){
//         if(money > this.initialValue){
//             console.log("araa sakmarisi tanxa")
//             return
//         }
//         this.initialValue -= money
//         this.history.push({
//             type:"withDraw",
//             amount: money,
//             date: Date()
//         })
//     }

//     transferMoney(money, toAccount){
//         if(money > this.initialValue){
//             console.log("ara sakmarisi tanxa")
//             return
//         }

//         this.initialValue -= money

//         this.history.push({
//             type: "money out",
//             amount: money,
//             date: Date()
//         })

//         toAccount.initialValue += money
//         toAccount.history.push({
//             type:"money in",
//             amount: money,
//             date: Date()
//         })
//     }

//     transactionHistory(){
//         console.log(this.history)
//     }

//     getBalance(){
//         console.log(this.initialValue)
//     }

// }

// let acc1 = new BankAccount(300)
// let acc2 = new BankAccount(400)
// // console.log(acc1)
// // console.log(acc2)

// acc1.transferMoney(150, acc2)
// acc1.transactionHistory()

// acc1.getBalance()

// acc2.transactionHistory()
// acc2.getBalance()




// // 6) შექმენი employee კლასი, რომელსაც ექმენა მეთოდი calculateSalary(),
// //რომელიც დათვლის ხელფასს სამუშაო საათებისა და საათობრივი ტარიფის მიხედვით

// class Employee{
//     constructor(name, hourWork, hourRate){
//         this.name = name 
//         this.hourWork = hourWork
//         this.hourRate = hourRate
//     }

//     calculate(){
//         console.log(this.hourRate * this.hourWork)
//     }
// }

// let person = new personalbar("giorgi", 9 ,8)
//person.calculate()
// console.log(person)


// // 7) შექმენი  ShopingCart კლასო, რომელიც ინახავს ნოვთების სიას
// // დაამატე მეთოდები  addItem(), deleteItem, updateItem()

// class ShoppingCart{
//     constructor(){
//         this.itemList = []
//     }

//     addItem(){
//         let lastId = this.itemList[this.itemList.length - 1]?.id || 0
//         let newOj = {
//             id: lastId + 1,
//             item
//         }
//         this.itemList.push(newOj)
//     }

//     removeItem(item){
//         this.itemList = this.itemList.filter((el) => el.item !== item)
//     }

//     update(id, newName){
//         let find = this.itemList.find((el) = el.id === id)
//         console.log(find)
//         if(find){
//             find.item = newName
//         }
//     }
// }

// let cart = new ShoppingCart

// cart.addItem("bread")
// cart.addItem("milk")
// cart.addItem("water")
// cart.removeItem("bread")
// cart.removeItem(3,"bread")
// console.log(cart)



// // // 1. let str = “javascript” შენი მიზანია ამოიღო ბოლო ასო
// // let  str = "javascript"
// // console.log(str.slice(0,-1))
// // // 2. let text = "Hello world" ამოჭერი მხოლოდ world
// // let text = "Hello world"
// // console.log(text.slice(5))

// // let splitedText = text.split(" ")
// // console.log(splitedText[1])

// // // 3. let name = "gio”  გადაიყვანე დიდ ასოებში 
// // let name = "gio"
// // console.log(name.toUpperCase())
// // // 4. let first = "Hello" let second = "World” გააერთიანე ეს ორი სტრინგი
// // let first = "Hello"
// // let second = "World"
// // console.log(`${first} ${second}`)
// // console.log(first.concat(' ', second))


// // 5. let str  = "   I love js js js   " 
// // შენი მიზანია წაშალო თავში და ბოლოში 
// // სფეისები da js ჩაანაცვლო javascript-ით
// let str = "   I love js js js   "
// let trimedStr = str.trim().replaceAll("js", "javascript")
// console.log(trimedStr)





// // 1. let nums = [1, 2, 3, 4, 5] იპოვე ჯამი 
// let nums = [1, 2, 3, 4, 5] 
// let sums = nums.reduce((tot, curr)=> tot + curr, 0)
// console.log(sums)

// // 2. let arr = [1,2,2,3,4,4,5] დააბრუნე მხოლოდ უნიკლალურები Set ის დახმარებით
// let arr = [1,2,2,3,4,4,5]
// let uniqArr = [... new Set(arr)]
// console.log(uniqArr)


// //3
// let students = [
//   {name: "Giorgi", age: 20},
//   {name: "Nika", age: 22},
//   {name: "Ana", age: 19}
// ]

// // იპოვე სტუდენტი სახელად ნიკა

// let findStudent = students.find( (x) => x.name === "Nika");
// console.log(findStudent)


// // 4.
//  let people = [
//   {name: "Gio", age: 30},
//   {name: "Luka", age: 25},
//   {name: "Ana", age: 28}
// ]

// // დაალაგე სტუდენტები ასაკის მიხედვით
// people.sort((a, b) => a.age - b.age)

// console.log(people)


// // 5.  let sentence = "apple orange apple banana apple orange kiwi" შენი მიზანია ეს სტრინგი გადააქციო მასივად და რედიუსის დახმარებით  დათავლო თითოეული ხილი რამდენჯერ მეორდება
// let sentence = "apple orange apple banana apple orange kiwi"

// let splitedArr = sentence.split(" ")
// let ground = splitedArr.reduce(tot, curr) =>{
//     if(tot[curr]){}
// }

// 6. let arr = [[1,[12,46],4,5,6,7]] დაალაგე ზრდის მიხედვით და დათვალე ჯამი

// 7 let arr = [1,20,90,100,3,3] ყველა გადააქციე 1-იანად ანუ უნდა დააბრუნოს [1,1,1,1,1,1]

// 8 let text = "I love JavaScript and I love coding in JavaScript JavaScript";
// შენი მიზანია გაიგო რომელი მეორდება ყველაზე ხშირად



// Obj

// 1.
let person = {name: "Giorgi", age: 25, city: "Tbilisi"}
// დააკონსოლე ცალკე key-ს  ცალკე value-ს
console.log(Object.keys(person))
console.log(Object.values(person))

// 2 
let car = {brand: "BMW", model: "X5"}
//  დაამატე year

car.year = 2024
console.log(car)

// 3 
let products = [
  {name:"Phone", price: 1200},
  {name:"Book", price: 40},
  {name:"Pen", price: 5}
];

// იპოვე ისეთი ობიექტი რომლის ფასიც 40-ია
let findPrice = products.find((p) => p.price ===40 )
console.log(findPrice)

// 4 შექმენი კალკულატორის ობიექტი სადაც გექნება დამატება წაშლა გაყოფა და გამრავლება
