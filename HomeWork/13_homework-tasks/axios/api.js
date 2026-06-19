// 2)წამოიღე ინფორმაცია ამ ორი api-დან
// let api = https://jsonplaceholder.typicode.com/users
// let api2 = https://jsonplaceholder.typicode.com/posts
// 1)გამოიყენე axios და ერთდროულად გაუშვი 2 API.
// 2)გაუშვი ორივე ერთად და რომელიც პირველი მოვა ის დააკონსოლე.
// 3)გაუშვი ორივე ერთად და დააბრუნე ინფრომაცია რომელი დარესოლვდა დარეჯექთდა და ა.შ.
const axios = require("axios")
let api1 = "https://jsonplaceholder.typicode.com/users"
let api2 = "https://jsonplaceholder.typicode.com/posts"

// ////promiseall
// Promise.all([
//     axios.get(api1),
//     axios.get(api2)
// ]).then(([users, posts])=>{
//     console.log(users)
//     console.log(posts)
// }).catch(console.error)

// ////////// promise race
// console.log("pirveli movida")
// Promise.race([
//     axios.get(api1),
//     axios.get(api2)
// ]).then((result)=>{
//     console.log("first finished: ", result.data)
// }).catch(console.error)


///////// promise allsettled
Promise.allSettled([
    axios.get(api1),
    axios.get(api2)
])
.then((results) => {
    console.log(results)
}).catch((error)=> console.log(error));