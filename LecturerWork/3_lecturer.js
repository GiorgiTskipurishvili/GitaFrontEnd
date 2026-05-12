// //1) შექმენი ცარიელი მასივი და შეავსე მასში 1-დან 10-მდე. გამოიყენე for ციკლი 

// let emptyArr = [];

// for (let i = 1; i <= 10; i++) {
//     emptyArr.push(i);
// }

// console.log(emptyArr);


// // 2) დაბეჭდე მასივის ელემენტები უკუღმა (ბოლოდან დასაწყისამდე). მინიშნება: გამოიყენე  arr.length -1 და უკუსვლით ციკლი
// let arr = [1,2,3,4,5]
// let answer = []
// for(let i = arr.length-1; i>=0; i--){
//     answer.push(arr[i])
// }
// console.log(answer);



// // 3) იპოვე მასივში მაქსიმალური რიცხვი. გამოიყენე: შედარება ელემენტებს შორის if-ით. (შეიძლება ყველა ერთ ცვლადში შეინახო ყველაზე დიდი რიცხვი)

// let arr = [1,2,3,4,500,88,10002,44,32]

// let max = arr[0];

// for(let i = 1; i < arr.length; i++){
//     // console.log(i);
//     // console.log(arr[i]);
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }

// console.log(max);

// // 4) გაჭერი slice() მეთოდით მასივის კონკრეტული ნაწილი და დაბეჭდე ნაწილი. გამოიყენე: slice(start, end)
// let arr = [1,2,3,4]
// console.log(arr.slice(1,3))

// // 5) შექმენი ახალი მასივი, რომელიც შეიცავს მხოლოდ ლუწ რიცხვებს საწყისი მასივიდან.
// let arr1 = [1,2]
// let arr2 = [3,4]

// // let all = arr1.concat(arr2)
// let all = [...arr1, ...arr2]
// console.log(all);

// //დესტრუქტურიზაცია
// let str = "hello world"
// let splitedArr = str.split("");
// let [word1, word2] = splitedArr
// console.log(word1)
// console.log(word2)


// 6) წაშალე მასივიდან დუბლირებული ელემენტები. გამოიყენე Set-ი (...)
// let arr = [1,1,1,1,2,3,3,50,50,105]
// let uniquee = [...new Set(arr)]
// console.log(uniquee)


// 7) გაყავი მასივი ორ ცალკე მასივად (ლუწი და კენტი). მინიშნება: გამოიყენე  % 2 === 0
// let arr = [1,2,3,4,5,6,7,80,90,22]
// let even = []
// let odd = []
// for(let i = 0; i<arr.length; i++){
//     // console.log(i)
//     // console.log(arr[i])
    
//     if(arr[i]%2===0){
//         even.push(arr[i])
//     }else{
//         odd.push(arr[i])
//     }
// }

// console.log(even, "luwi")
// console.log(odd, "kenti")

// // 8) დაითვალე დადებითი რიცხვების რაოდენობა და უარყოფითი რიცხვების ჯამი
// let arr = [1,-1,-2,2,3]
// let positives = 0
// let sumOfNegetives =0 
// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
//     if(arr[i]>0){
//         positives++
//     }else{
//         sumOfNegetives+=arr[i]
//     }
// }
// console.log(positives,"დადებიტების რაოდენობა")
// console.log(sumOfNegetives,"უარყოფითების ჯამი")

// // 9) დააბრუნე მასივის თითოეული ელემენტის ინვერსი (ანუ [1,-2] გახდეს [-1,2]). გამოიყენე: გამეორებითი push(-arr[i])


// let arr = [1,-2]

// let inverse =[]

// for(let i = 0; i < arr.length; i++){
//     // console.log(i)
//     // console.log(arr[i])

//     inverse.push(-arr[i])
// }
// console.log(inverse)










// //1)filter 

// let arr = [1,2,3,4]

// let filteredArr = arr.filter((num) => num > 1 )
// console.log(filteredArr)

// //function 
// function main(){
//     console.log('Gaghvidzeba')
//     console.log("skolashi wasvla")
//     console.log("skolis gakvetilis moyola")
//     console.log("skolidan dabruneba")
// }


// function moreThanTwo(arr){
//     // return arr როცა ვარეთარნებ პარამეტს
//     console.log(arr) როცა ვაკონსოლებთ პოარამეტრს
// }

// // console.log(moreThanTwo([1,2,3,4,5])) მაშინ დავაკონსოლოთ  არგუმენტი
// moreThanTwo([1,2,3,4,5]) არგუმენტი უნდა გამოვიძახოთ და არა დავაკონსოლოთ 



// function moreThanTwo(arr){
//     let filteredArr = arr.filter((num) => num >1)
//     return filteredArr
// }

// console.log(moreThanTwo([1,2,3,4,5]))


// // 2) map 
// let arr = [1,2,3,4]
// // let mapedArr = arr.map((num) => num * 2)
// // let mapedArr = arr.map((num) => num * num)
// let mapedArr = arr.map((num) => num = 1)
// console.log(mapedArr)


// // 3) find/findIndex
// let arr = [1,2,3,4,4,4,4]
// // let findArr = arr.find((num) => num === 2 )
// // console.log(findArr)

// let findIndexArr = arr.findIndex((num) => num ===4)
// console.log(findIndexArr)

//4) ! 
// let boolean = true
// console.log(!boolean)


// // 5) some/every
// let arr = [1,2,3,4]
// let someArr = arr.some((el) => el >2 )
// console.log(someArr)


// let everyArr = arr.every((el) => el >2 )
// console.log(everyArr)


// // 6) ||
// let age = 15

// if(age> 10 || age<15){
//     console.log(1)
// }else{
//     console.log(2)
// }


// // 7) concat
// let arr1 = [1,2,34]
// let arr2 = [1,1,1,2]

// console.log(arr1.concat(arr2))

// // 8) reduce
// let arr = [1,2,3,4,5]
// let sum = arr.reduce((tot, curr) => tot + curr , 0)
// console.log(sum)

// 9) sort
let arr = [22,1, -100,22,3]
// let sortedArr = arr.sort((a,b) => a-b)
let sortedArr = arr.sort((a,b) => b-a)

console.log(sortedArr)