// // callback

const { error } = require("console")

// function greeting(name, callback){
//     console.log(`Hello ${name}`)
//     callback()
// }

// function callBackFn(){
//     console.log("nice to meet you")
// }


// greeting("Nika", callBackFn)


// // fetch + promise 
// console.time()
// async function fetchUsers(API) {
//     let res = await fetch(API)
//     let data = await res.json()
//     console.log(data[0])
// }

// fetchUsers("https://jsonplaceholder.typicode.com/users")
// console.timeEnd()


// // 3) promise, setTimeout sync
// setTimeout(() => {
//     console.log(1)
// }, 1000);

// console.log(2)

// let myPromise = new Promise((resolve, reject) => {
//     resolve(3)
// })
// console.log(myPromise)

// // 4 then / catch
// let myPromise = new Promise((res, rej)=>{
//     rej("hello world")
// })

// myPromise.then(res => console.log(res)).catch((error) =>{
//     console.log(error, "promise rejected")
// })




// let firstPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("firsdtPromise")
//     }, 4000);
// })
// let secondPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("secondPromise")
//     }, 1000);
// })

// // firstPromise.then(res => console.log(res))
// // secondPromise.then(res => console.log(res))

// firstPromise.then(res => {
//     console.log(res)
//     return secondPromise
// }).then(res => console.log(res))


// // 5 block
// let myPromise = new Promise((res, rej)=>{
//     res("resolver")
// })

// function block(){
//     for(let i= 0; i<1000;i++){

//     }
// }

// console.log(1)
// // block()
// myPromise.then(res => block())
// console.log(2)

// //6) fn + promise   
// let myPromise1 = new Promise((res,rej)=>{
//     res("resolve1")
// })
// let myPromise2 = new Promise((res,rej)=>{
//     rej("resolve2")
// })

// async function handlePromise(){
//     try{
//         let promise1 = await myPromise1
//         let promise2  = await myPromise2
//         console.log(promise1)
//         console.log(promise2)
//     }catch(error){
//         console.log(error, "promise rejected")
//     }
// }

// handlePromise()


// //7) fnc + promise, all, race, any, Allsetteld
// async function fetchUsers(API) {
//     try{
//         let res = await fetch("https://jsonplaceholder.typicode.com/users")
//         let data = await res.json()
//         return data[0]
//     }catch(error){
//         // console.log(error)
//         throw error
//     }
// }

// async function fetchPosts(API) {
//     try{
//         let res = await fetch("https://jsonplaceholder.typicode.com/posts")
//         let data = await res.json()
//         return data[0]
//     }catch(error){
//         // console.log(error)
//         throw error
//     }
// }

// // Promise.all([fetchUsers(), fetchPosts()]).then(res => console.log(res)) //ერთდროულად გავუშვით 2 fetch
// // //ფორმის all-ის დროს უნდა დასრულდეს ყველა წარმატებით ერთიც თუ დარეჯექთდა დაბრუნებს ერრორი

// // Promise.race([fetchUsers(), fetchPosts()]).then(res=> console.log(res)) // ვინც პირველი მოვა ის მოიგებს 

// Promise.any([fetchUsers(), fetchPosts()]).then(res=> console.log(res)).catch((error)=> console.log(error))



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
let myPromise5 = new Promise((res, rej) => {
    res(5)
})
let myPromise6 = new Promise((res, rej) => {
    rej(6)
})

Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4,myPromise5,myPromise6])
.then(res => {
    let filteredArr = res.filter(el => el.status === "rejected")
    console.log(filteredArr)
})