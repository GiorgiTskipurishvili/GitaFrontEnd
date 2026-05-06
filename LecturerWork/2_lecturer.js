// 1 - იპოვეთ სტრინგის - პირველი ასო - გაიგე სიგრძე - ბოლო ასო  || let fullName = "nika nikadze"
let fullName = "nika nikadze"

// console.log(fullName[0])
// console.log(fullName.length)
// console.log(fullName[fullName.length - 1])


//2 - მოაშორე სფეისები - მთლიოანი სტრინგი გადაიყვანეთ ოატარა ასოებში - მხოლოდ სიტყვა COOL შეცვალე Amazing-ით || const topic = javascript is COOL
// const topic = "  javascript is COOL"

// // console.log(topic.trim())
// // console.log(topic.toLowerCase())
// // console.log(topic.replace("COOL", "Amazing"))
// // console.log(topic.trim().toLowerCase().replace("cool", "Amazing"))

// const updatedTopic = topic.trim().toLowerCase().replace("cool", "Amazing")
// console.log(updatedTopic)


// 3 მოცემული სტრინგი გადააქციეთ მასივად(მინიშნება - გამოიყენეთ - split(",")) -
//უკვე მიღებული მასივი გადაუარეთ for ლუპით და დაბეჭდე ნუმერაციით
//(მაგალითად - 1:banana - 2:orange - 3:kiwi) || let fruits = "apple, banana, orange, kiwi"

// let fruits = "apple, banana, orange, kiwi"
// const fruitsArr = fruits.split(",")   

// for (let i = 0; i < fruitsArr.length; i++) {
//     console.log(`${i + 1}: ${fruitsArr[i].trim()}`)
//     // console.log(i)
//     // console.log(fruitsArr[i])
// }



// // 4 -  გამოიყენეთ ternary operator - შეინახეთ ასაკი ცვლადში თუ ასაკი მეტია 18 ზე დააკონსოლეთ რომ 
// // მართვის მოწმობის აღება შესაძლებელია,
// // თუ არადა დააკონსოლეთ მართვის მოწმობა ვერ აიღებთ 
// // (მინიშნება. თუ გიორგი უფრო მაღალია ვიდრე 180 სანტიმეტრი ? გიორგი მაღალია : საშუალო სიმაღლისაა)

// let age = 20
// // const canGetLicense = age > 18 ? "მართვის მოწმობის აღება შესაძლებელია" : "მართვის მოწმობა ვერ აიღებთ"
// // console.log(canGetLicense)
// // age > 18 ? console.log("მართვის მოწმობის აღება შესაძლებელია") : console.log("მართვის მოწმობა ვერ აიღებთ")
// console.log(age > 18 ? "მართვის მოწმობის აღება შესაძლებელია" : "მართვის მოწმობა ვერ აიღებთ")


// 5 - გამოიყენბე for ლუპი 1-დან 100-მდე რიცხვებზე
//* თუ  იყოფა  3-ზე - "Fizz"
//* თუ  იყოფა  5-ზე - "Buzz"
//* თუ ორივეზე - "FizzBuzz"
//* თუ არა - უბრალო რიცხვები

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }      
// }



// = მინიჭება
// let name = "Nika"
// name = "Nikadze"
// console.log(name)

// == არა მკაცრი შედარება რომელიც ადარებს მნიშვნელობებას 
// === მკაცრი შედარება რომელიც ადარებს მნიშვნელობებს და ტიპებს
// console.log(5 == "5") // true
// console.log(5 === "5") // false

//Arr
// let str = "apple,[],{}, function =() => {}, null, undefined"
// let str ="apple, pear, kiwi, orange"
// const arr = str.split(",")
// console.log(arr)


// //typeof 
// let numArr = [1, 2, 3, 4]
// let str = "Hello"
// console.log(typeof numArr) // object
// console.log(typeof str) // string


//1) lengt + lastchar
// const arr = ["apple", "pear", "kiwi", "orange", "kiwi", "kiwi", "kiwi" ]
// const numArr = [1, 2, 3, 4, 5]
// console.log(arr)
// console.log(arr[0])

// console.log(arr[arr.length-1]);


// for (let i = 0; i < arr.length; i++) {
//     console.log(`${i + 1}: ${arr[i]}`)
// }




//2) mutable imutable 
// let userName = "Nika"
// userName = "l"
// console.log(userName)

// let numberArr = [1, 2, 3]
// numberArr[0] = 90
// console.log(numberArr)


// // 3) push იმატებს ბოლოში ნებისმიერ ელემენტს
// let fruit = ["banana", "apple", "orange", "pear"]
// fruit.push("watermelon", 10, true, null)
// console.log(fruit)


// // 4) pop შლის ბოლო ელემენტს
// let fruit = ["banana", "apple", "orange", "pear"]   
// fruit.pop()
// fruit.pop()
// fruit.pop()
// let washlili = fruit.pop()
// console.log(fruit)
// console.log(washlili)


// // 5) unshift ამატებს თავში ელემენტს მასივში
// let fruit = ["banana", "apple", "orange", "pear"]
// fruit.unshift("watermelon", 10, true, null)
// console.log(fruit) 

//shift შლის პირველ ელემენტს მასივში
//  let fruit = ["banana", "apple", "orange", "pear"]
// fruit.unshift("watermelon")
// fruit.shift()
// console.log(fruit)

// 6) როგორც სრინგს  ვამუშავებთ ფორით ასევე ერეიზე  შეგვიძლია 
// let fruit = ["banana", "apple", "orange", "pear"]
// for (let i = 0; i < fruit.length; i++) {
//     console.log(`${i + 1}: ${fruit[i]}`)
// }

// 7) slice 
// let fruit = ["banana", "apple", "orange", "pear"]
// let slicedArr = fruit.slice(0, 3)
// console.log(slicedArr)


//8) join 
// let fruit = ["banana", "apple", "orange", "pear"]
// const result = fruit.join(", ")
// console.log(result)

//9) reverse 
// let fruit = ["banana", "apple", "orange", "pear"]
// console.log(fruit.reverse())

//10) splice არის გამოყენება - წაშლა, დამატება, ჩანაცვლება
let fruits = ["banana", "apple", "orange", "pear"]
// fruits.splice(0,1, "nika")

// let result  = fruits.splice(0);
// console.log(result)

// console.log(fruits)

fruits.splice(0,2, "nika", "nikadze")
console.log(fruits)