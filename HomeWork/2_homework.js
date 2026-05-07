// 1) შექმენი ცარიელი მასივი და შეავსე მასში რიცხვები 5-დან 15-მდე
console.log("------------")
console.log("Task 1")

let array = []
for (let i = 5; i <= 15; i++) {
    array.push(i)
}
console.log(array)

// 2) დაბეჭდე მასივის ელემენტები უკუღმა let arr = [1,2,3,4,5]
console.log("------------")
console.log("Task 2")
let arr = [1,2,3,4,5]

//variant 1 შეგვიძლიათ for ლუპით დავატრიალოთ მასივი უკუღმა
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
}

//variant 2 მასივი შეგვიძლიათ პირდაპირ reverse() მეთოდით გამოვიტანოთ
console.log(arr.reverse())

// 3) იპოვე მასივში მინიმალური რიცხვი let arr = [100,2,3,9]
console.log("------------")
console.log("Task 3")
let arr1 = [100,2,3,9]
let min = arr1[0]
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] < min) {
        min = arr1[i]
    }
}
console.log("Minimum in array is number:", min)
// 4) ამოიღე შუა 3 ელემენტი slice-ით.let arr = [1,2,3,4,5,6,7]
console.log("------------")
console.log("Task 4")
let arr2 = [1,2,3,4,5,6,7]
let middleElements = arr2.slice(2, 5)
console.log(middleElements)

// 5) გააერთიანე ორი მასივი let arr1 = [1,2] let arr2=[3,4]
console.log("------------") 
console.log("Task 5")
let array1 = [1,2]
let array2 = [3,4]
let result = array1.concat(array2)
console.log(result)

// 6) წაშალე დუბლირებული ელემენტები let arr = [1,2,3,4,5,6,6,7,7]
console.log("------------")
console.log("Task 6")
let arr3 = [1,2,3,4,5,6,6,7,7]
let uniqueArr = []
for (let i = 0; i < arr3.length; i++) {
    if (!uniqueArr.includes(arr3[i])) {
        uniqueArr.push(arr3[i])
    }
}
console.log(uniqueArr)

// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე % 2 === 0  let arr = [1,2,3,4,5,6,7]
console.log("------------")
console.log("Task 7")
let arr4 = [1,2,3,4,5,6,7]
let evenNums = []
let oddNums = []
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] % 2 === 0) {
        evenNums.push(arr4[i])
    } else {
        oddNums.push(arr4[i])
    }
}
console.log("Even numbers:", evenNums)
console.log("Odd numbers:", oddNums)

// 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი.
// let arr = [1,2,3,4,5,6,7,-1,-2,-3,-4]
let arr5 = [1,2,3,4,5,6,7,-1,-2,-3,-4]
let positiveCount = 0
let negativeSum = 0

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] > 0) {
        positiveCount++
    } else {
        negativeSum += arr5[i]
    }
}
console.log("Positive numbers count:", positiveCount)
console.log("Negative numbers sum:", negativeSum)

// 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] მაგივრად [-1,2]). მინიშნება: გამოიყენე push(-arr[i])
let arr6 = [1, -2]
let invertedArr = []
for (let i = 0; i < arr6.length; i++) {
    invertedArr.push(-arr6[i]) 
}
console.log("Inverted array:", invertedArr)

// 10) let arr = [1,[2,[3]],[4] შენი მიზანია მიიღო [1,2,3,4]
console.log("------------")
console.log("Task 10")
let arr7 = [1,[2,[3]],[4]]
let result1 = [];

result1.push(arr7[0]);       
result1.push(arr7[1][0]);    
result1.push(arr7[1][1][0]); 
result1.push(arr7[2][0]);    

console.log(result1);

// 11)let fruits = ["apple", "banana", "orange", "kiwi"] წაშალე "banana" მასივიდან splice()-ით
// "orange"-ის წინ დაამატე "mango"
// ბოლოს დაბეჭდე ახალი მასივი.
// splice-მ არ დაგაბნიოთ splice(საიდან დაიწოს,რამდენი წაშალოს,რითიჩაანაცვლოს)
console.log("------------")
console.log("Task 11")
let fruits = ["apple", "banana", "orange", "kiwi"]
fruits.splice(1, 1) 
console.log(fruits)
fruits.splice(2, 0, "mango") 
console.log(fruits)