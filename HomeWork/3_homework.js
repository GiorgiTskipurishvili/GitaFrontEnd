// 1) გაამრავლე თითოეული ელემენტი 3-ზე.
// Input: [1,2,3] - Output: [3,6,9]
console.log("------------")
console.log("Task 1")

let arr1 =[1,2,3] 
let mapedArr = arr1.map((num) => num * 3)
console.log(mapedArr)

// 2)გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-
console.log("------------")
console.log("Task 2")

let arr2 = [1,2,3,4,5,6]
let filteredArr = arr2.filter((num) => num % 3 === 0)
console.log(filteredArr)

// 3)დააბრუნე ყველა დადებითი რიცხვის ჯამი
console.log("------------")
console.log("Task 3")
let arr3 = [1, -1, 2, -4, 8]
let filteredArr3 = arr3.filter((num) => num > 0) 
console.log(filteredArr3)
let reduceArr = filteredArr3.reduce((sum,curr) => sum + curr, 0 )
console.log(reduceArr)


// 4)მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
// let namesArr = ["giorgi","nika","mariami"]
console.log("------------")
console.log("Task 4")
let namesArr = ["giorgi","nika","mariami"]
let slicedArr = namesArr.map((n) => n.slice(0, -1) )
console.log(slicedArr)

// 5)გაამრავლე ყველა ელემენტი მასივში 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
console.log("------------")
console.log("Task 5")
let arr5 = [1,2,3,4,5,6,7,8,9,10]

let mapedArr5 = arr5.map((n)=> n *2)
console.log(mapedArr5)
let filteredMapedArr5  = mapedArr5.filter((n) => n % 3 === 0 )
console.log(filteredMapedArr5)

// 6) დაალაგე რიცხვები ზრდადობით let numsArr = [1,-1,-2,-10,111,3,2,5]
console.log("------------")
console.log("Task 6")
let numsArr = [1,-1,-2,-10,111,3,2,5]

let sortedNumsArr = numsArr.sort((a,b) => a - b)
console.log(sortedNumsArr)

// 7)გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია.
console.log("------------")
console.log("Task 7")
let arr7 = [1,2,3,4,5]
let mapedArr7 = arr7.map((n)=> n * 2)
console.log(mapedArr7)
let filteredMapedArr7 = mapedArr7.filter((n) => n > 5)
console.log(filteredMapedArr7)

// 8)let arr = [1,1,1,1,2,2,3,3,3] დააბრუნე let unque = [1,2,3]
console.log("------------")
console.log("Task 8")
let arr8 = [1,1,1,1,2,2,3,3,3]
let uniquee = [...new Set(arr8)]
console.log(uniquee)

// 9), დააბრუნეთ ორი ყველაზე მცირე რიცხვის ჯამს let arr = [-1,20,90,4,5,111]
console.log("------------")
console.log("Task 9")
let arr9 = [-1,20,90,4,5,111]

let sortedArr9 = arr9.sort((a,b) => a-b )
console.log(sortedArr9)

let num1 = sortedArr9[0]
console.log("pirveli umciresi ricxvi: ",num1)
let num2 = sortedArr9[1]
console.log("meore umciresi ricxvi: ",num2)

let sum = num1+num2

console.log("mat shoris jami = ", sum)
