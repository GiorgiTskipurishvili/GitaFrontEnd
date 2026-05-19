// 1. დაწერე ფუნქცია , რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა
console.log("------------")
console.log("Task 1")

function countDown(sec){
    let timer = setInterval(() => {
        console.log(sec)
        sec--

        if(sec < 0){
            clearInterval(timer)
        }
    }, 1000)
}
countDown(5)


// 2. დაწერე ფუქნცია ფუქნციას გადააწოდე რიცხვი  და ასევე ლოგე რენდომული რიცხვი იქამდე 
// +სანამ ეს გადაცემული და რენდომ რიცხვი არ. დაემთხვევა ერთმამენთს
console.log("------------")
console.log("Task 2")

function randomMatch(num){
    let interval = setInterval(() => {
        let randomNum = Math.floor(Math.random() * 10)
        console.log(randomNum)

        if(randomNum === num){
            console.log("matched")
            clearInterval(interval)
        }
    }, 500)
}
randomMatch(3)

// 3.და წერე ფუქნცია რომელიც მიიღებს n და callback-ს როცა n > 27-ზე გაუშვი ეს callback-ი
//  რომელიც დააკონსოლებს რომ ეს ნამდვილად მეტია 27-ზე სხვა შემთხვევაში დააკონსოლე რომ n ნაკლებია
console.log("------------")
console.log("Task 3")
function checkNumber(n, callback){
    if(n > 27){
        callback()
    } else {
        console.log("n less than or equal to 27")
    }
}

checkNumber(30, () => {
    console.log("n is greater than 27")
})

// 4.დაწერე ფუქნცია რომელიც პარამეტრად მიიღებს API და დააბრუნებს ამ API-ში მყოფ  4 - users.
//  https://jsonplaceholder.typicode.com/users დაწერე ორივენაირად than/catch & async/await
console.log("------------")
console.log("Task 4")

function fetchAPIThen(API){
    fetch(API).then((res) => res.json()).then((data) => {
        let slicedData = data.slice(0, 4)
        console.log(slicedData)
    }).catch((error) => console.log(error))
    console.log("API For than/catch: ", API)
}

fetchAPI("https://jsonplaceholder.typicode.com/users")

async function fetchAPIAsync(API){
    let res = await fetch(API)
    let data = await res.json()
    let slicedData = data.slice(0, 4)
    console.log(slicedData)
    console.log("API For async/await: ", API)
}
fetchAPI("https://jsonplaceholder.typicode.com/users")


// 5) დააწყვილე reduce-თი ცალკე ვისი ასაკიც მეტია 10 ზე და ვისი ასაკიც ნაკლებია 20
let people = [
  { name: "Giorgi", age: 25 },
  { name: "Nika", age: 15 },
  { name: "Mariam", age: 30 },
  { name: "Luka", age: 18 }
];

let groupedPeople = people.reduce((tot, curr) => {
    if(curr.age > 10 && curr.age < 20){
        tot.betweenAge.push(curr)
    } else {
        tot.otherAge.push(curr)
    }
    return tot
}, {betweenAge: [], otherAge: []})

console.log(groupedPeople)  
        

// 6. დაწერე ფუნქცია რომელიც მიიღებს ორ რიცხვს და callback-ს.
//  თუ პირველი მეტია მეორეზე გაუშვი callback და დაუბეჭდე "მეტია", სხვა შემთხვევაში "ნაკლები ან ტოლია".
function compareNumbers(num1, num2, callback){
    if(num1 > num2){
        callback("Over")
    } else {
        callback("Less or Equal")
    }
}

compareNumbers(5, 3, (result) => {
    console.log(result)
})

// 7.დაწერე reduce, რომელიც დააჯგუფებს - ცალკე 20-ზე მეტ ფასიან რიცხვებს და 
// ცალკე 20-ზე ნაკლები ან ტოლი ფასიანი ნივთები
let products = [
  { name: "Mouse", price: 15 },
  { name: "Keyboard", price: 45 },
  { name: "USB Cable", price: 7 },
  { name: "Headphones", price: 29.9 },
  { name: "Webcam", price: 52 }
];

let groupedProducts = products.reduce((acc, curr) => {

    if(curr.price > 20){
        acc.moreThan20.push(curr)
    }else{
        acc.lessOrEqual20.push(curr)
    }

    return acc

}, {
    moreThan20: [],
    lessOrEqual20: []
})

console.log(groupedProducts)