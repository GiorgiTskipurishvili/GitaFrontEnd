// // 1. გააორმაგე თითოელი ელემენტი მასივში 
// let numsArr = [1,2,3,4,50,90, 100]
// let mapedArr = numsArr.map((el) => el * 2)    
// console.log(mapedArr);

// for (let i = 0; i < numsArr.length; i++) {
//     // console.log(i);
//     // console.log(numsArr[i]);
//     numsArr[i] = numsArr[i] * 2
// }
// console.log(numsArr);

// // 2. ამოიღე ლუწი რიცხვები მასივიდან
// let arr =[1,100,12,11,21,33,43,12,3,4,5]
// let filteredArr = arr.filter((num)=> num % 2 === 0)
// console.log(filteredArr);


// // 3. მოცემული სტრინგების მასივიდან ამოიღე სტრინგები, რომლებსაც აქვთ 5-ზე მეტი სიმბოლო 
// // და გააერთიანე დარჩენილი სტრინგები ერთ სტრინგად # ნიშნით გამოყოფით
// let arr = ["nika", "luka", "nini", "mariami", "giorgi","tornike"]
// let filteredArr = arr.filter((el) => el.length > 5).join("#")   
// console.log(filteredArr);


// // 4.გაამრავლე ყველა ელემენტი მასივში 2-ზე   და შემდეგ ამოიღ  რიცხვები, რომელიც იყოფა 3-ზე
// let arr = [1,2,3,4,5,6,10,90,900,1010,43,11,57, 1000]

// let arr2  = arr.map((el) => el * 2).filter((num) => num % 3 === 0)
// console.log(arr2);


// // 5.დააბრუნე ყველა დადებითი რიცხვის ჯამი
// let arr = [-1,2,-3,4,5,-6,10,90,-900,1010,43,-11,57, -1000]
// let sum = arr.filter((num) => num > 0).reduce((acc, num) => acc + num, 0)
// console.log(sum);


// // 6.მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
// let namesArr = ["nika", "luka", "nini", "mariami", "giorgi","tornike"]
// let modifiedArr = namesArr.map((name) => name.slice(0, -1))
// console.log(modifiedArr);

// // 7.შექმენი ფუნქცია, რომელიც დააბრუნებს ორ ყველაზე მცირრე დადებითი რიცხვის ჯამს
// // * მაგ: [19, 5, 42, 2, 77] -> 7
// let numsArr = [19, 5, 42, 2, 77]

// // let sortedArr = numsArr.sort((a, b) => a - b)

// // // console.log(sortedArr);
// // console.log(sortedArr[0] + sortedArr[1]);

// let sortedArr = numsArr.sort((a, b) => a - b).slice(0, 2).reduce((tot, curr) => tot + curr, 0)
// console.log(sortedArr);







// str "" '' ``
// arr []
//obj {}


// //object
// let person = {
//     firstName: "Nika",
//     lastName: "Gogoladze",
//     age: 22,
//     address: "dolidze street 12",
// }

// // ამოღება ელემენტის
// console.log(person.firstName, "First Name");
// console.log(person.lastName, "Last Name");
// console.log(person.age, "Age");
// console.log(person.address, "Address");


// function
 
// const add = (a, b) => a + b
// console.log(add(5, 10));

// function main(a,b){
//     return a + b
// }

// console.log(main(5, 10));


// function greeting(name){
//     console.log(`Hello, ${name}!`);
// }
// greeting("Nika");
// greeting("Luka");



// let person = {
//     firstName: "Nika",
//     lastName: "Gogoladze",
//     age: 22,
//     address: "dolidze street 12",
// }
// console.log(person["firstName"])
// console.log(person["lastName"])
// console.log(person["age"])
// console.log(person["address"])




// //2 დამატება 
// let person = {
//     name: "Nika",
//     lastName: "Nikadze",
//     age: 22
// }

// // console.log(person);

// person.isSmoker = true
// person["isMarried"] = false

// console.log(person);

// let person = {
//     name: "Giorgi",
//     name: "Nika"
// }
// console.log(person.name);



// //3 წაშლა
// let person = {
//     name: "Nika",
//     lastName: "Nikadze",
//     age: 22
// }
// delete person.age
// console.log(person);


// //4 გადაწერა

// let person = {
//     name: "Giorgi",
//     lastName: "Giorgadze",
//     age: 22
// }

// // Object.freeze(person) // არ გვაძლევს საშუალებას შევცვალოთ ობიექტის ელემენტები

// person.isSmoker = true

// person.name = "Nika"
// person.lastName = "Nikadze"
// person.age = 66
// console.log(person);


// // დესტრუქტურიზაცია
// let str = "Hello, World!"
// let spliterarr = str.split(", ")    
// console.log(spliterarr);


// let [w1, w2] = spliterarr
// console.log(w1);
// console.log(w2);

////////
// let person = {
//     name:"mariami",
//     lastName: "Gogoladze",
//     age: 22,
//     car:["bmw", "mersedes", "audi"],
//     numbers:[1,2,3,4,5],
//     hello:function(name){
//         console.log(`Hello, ${name}!`);
//     }
// }

// // console.log(person)

// let {age, car, hello, lastName, name, numbers}= person

// console.log(age, "age");
// console.log(lastName, "lastName");
// console.log(name, "name");
// console.log(car, "car");
// console.log(numbers, "numbers");
// hello("Nika")

// let slicedArr = car.map((el) => el.slice(1))
// console.log(slicedArr);

// let mapedArr = numbers.map((num) => num * num).reduce((tot, curr) => tot + curr, 0)
// console.log(mapedArr);

// let filteredArr = numbers.filter((el) => el >2)
// console.log(filteredArr);



// // 6) მეთოდები 
// let person = {
//     name:"mariami",
//     lastName: "Gogoladze",
//     age: 22,
//     car:["bmw", "mersedes", "audi"],
//     numbers:[1,2,3,4,5],
//     hello:function(name){
//         console.log(`Hello, ${name}!`);
//     }
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));


// let arr = [
//   [ 'name', 'mariami' ],
//   [ 'lastName', 'Gogoladze' ],
//   [ 'age', 22 ],
//   [ 'car', [ 'bmw', 'mersedes', 'audi' ] ],
//   [ 'numbers', [ 1, 2, 3, 4, 5 ] ]
// ]
// let obj = Object.fromEntries(arr)
// console.log(obj);


// // 8) calculator
// let calculator = {
//     value: 0,
//     add: function(num){
//         this.value += num
//         return this
//     },
//     sub: function(num){
//         this.value -= num
//         return this
//     },
//     answer: function(){
//         // return this.value
//         console.log(this.value);
//     }
// }

// calculator.add(100)
// calculator.sub(30)
// calculator.answer()

// //9) hasOwnProperty
// let person = {
//     name:"mariami",
//     lastName: "Gogoladze",
//     age: 22,
//     car:["bmw", "mersedes", "audi"],
//     numbers:[1,2,3,4,5],
//     hello:function(name){
//         console.log(`Hello, ${name}!`);
//     }
// }

// console.log(person.hasOwnProperty("name"));
// console.log(person.hasOwnProperty("isSmoker"));


// //11 spread
// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,10]

// let all = [...arr1, ...arr2]
// console.log(all);

// let a ={
//     a:10
// }

// let b  = {
//     b:20
// }

// let c = {...a, ...b}    
// console.log(c);



let person = {
    name:"mariami",
    lastName: "Gogoladze",
    age: 22,
    car:["bmw", "mersedes", "audi"],
    numbers:[1,2,3,4,5],
    hello:function(name){
        console.log(`Hello, ${name}!`);
    }
}

// for(let keys in person){
//     console.log(keys);
//     // console.log(person[keys]);
    
// }

for(let values in person){
    // console.log(person[values]);

    if(typeof person[values] !== "string") delete person[values]
}
console.log(person);