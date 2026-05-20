// 1) function block(){
//     for(let i = 1 ;i <10000000000;i++){}
// }

// console.log("one")
// block()
// console.log("two")
// იპოვე გამოსავალი როგორ შეიძლება გაეშვას ჯერ  console.log("one") console.log("two") შემდეგ ფუნქცია
// აუცილებელია გამოიყენო ფრომისი

function block(){
    for(let i = 1 ;i <10000000000;i++){}
}
let myPromise = new Promise((res, rej)=>{
    res("resolver")
})

console.log("one")
// block()
myPromise.then(res => block())
console.log("two")


// 2)ორი პრომისი შექმენი (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და 
// ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც” 
//  - ჯგუფურად Allsetteld გამოიყენე.
let Promise1 = new Promise((res,rej)=>{
    res("resolve1")
})
let Promise2 = new Promise((res,rej)=>{
    rej("reject2")
})

Promise1.then(res => console.log(res)).catch((error) =>{
    console.log(error, "promise1 rejected")
})
Promise2.then(res => console.log(res)).catch((error) =>{
    console.log(error, "promise2 rejected")
})

Promise.allSettled([Promise1, Promise2]).then(res=> console.log(res)).catch((error)=> console.log(error))

// 3)შექენი 4 პრომისი (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული

let myPromise1 = new Promise((res, rej) => {
    res(1)
})
let myPromise2 = new Promise((res, rej) => {
    rej(2)
})
let myPromise3 = new Promise((res, rej) => {
    res(3)
})
let myPromise4 = new Promise((res, rej) => {
    rej(4)
})
Promise.any([myPromise1,myPromise2,myPromise3,myPromise4])
.then(res => console.log(res)).catch((error)=> console.log(error))


// 4)შექმენი 4 ფრომისი  და რედიუსით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი
 Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4])
.then(res => {
    let promiseReduce = res.reduce((tot, curr) => {
        if(curr.status === "fulfilled"){
            tot.success++
        }else{
            tot.failed++
        }
        return tot
    }, {
        success: 0,
        failed: 0
    })
    console.log(promiseReduce)
}).catch((error)=> console.log(error))


// 5) შექმენი 5 ფრომისი და გაფილტრე ეს ფრომისები დააბრუნე ამრტო წარუმატებლები

//ვამატებ მე-5 პრომის ზემოთ ჩამოთვალთაგან ერთად
let myPromise5 = new Promise((res, rej) => {
    rej(5)
})

Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4, myPromise5])
.then(res => {
    let getRejectedList = res.filter(el => el.status === "rejected")
    console.log(getRejectedList)
}).catch((error)=> console.log(error))


// 6)api1 = https://jsonplaceholder.typicode.com/users
// api2 = https://jsonplaceholder.typicode.com/posts
// გაუშვი ეს ორი API ერთდროულად

async function fetchAPI1(API) {
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await res.json()
        return data
    }catch(error){
        // console.log(error)
        throw error
    }
}
async function fetchAPI2(API) {
    try{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await res.json()
        return data
    }catch(error){
        // console.log(error)
        throw error
    }
}
Promise.all([fetchAPI1(), fetchAPI2()]).then(res => console.log(res)).catch((error)=> console.log(error))