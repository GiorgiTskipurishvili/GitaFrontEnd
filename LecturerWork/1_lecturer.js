//console.log("Hello World!");


//გვაქვს 3 ცვლადი, let, const, var.
//string, number, boolean, null, undefined, func, bigint, symbo, obj/arr
// const name = "Giorgi"
// const age = 25
// const isSmoker = false

// let x 

// console.log(x);


// const name = "Giorgi"
// const name2 = "nika"
// const name3 = "saba"

// console.log(name);


//კონსტანტა 
// let name = "Giorgi"
// name = "nika"
// console.log(name);


//მუტაცია
// const name = "Giorgi"
// console.log(name[0]);

// let name = "Giorgi"
// name[0] = "l"
// console.log(name);


// მეთოდები 
// 1) length

// let greeting = "Hello World"
// console.log(greeting.length);


// 2) charAt() - გვიბრუნებს სიმბოლოს ინდექსის მიხედვით
// let firstName = "Giorgi Tskipurishvili"
// let character = firstName.charAt(0)
// console.log(character);


// let firstName = "Giorgi Tskipurishvili"
// let lastChar = firstName.charAt(firstName.length - 1)
// console.log(lastChar);

// let firstName = "Giorgi Tskipurishvili"
// console.log(firstName[firstName.length - 1]);


// 3) slice() - გვიბრუნებს სტრიქონის ნაწილს ინდექსის მიხედვით
// let firstStep = "Hello World"
// // let slicedStr = firstStep.slice(0, 5)
// let slicedStr = firstStep.slice(1, -1)
// console.log(slicedStr);


// // 4) toUpperCase() - გვიბრუნებს სტრიქონს დიდი ასოებით
// let firstStep = "Hello World"
// let upperCaseStr = firstStep.toUpperCase()
// console.log(upperCaseStr);

// // 5) toLowerCase() - გვიბრუნებს სტრიქონს პატარა ასოებით
// let lowerCaseStr = firstStep.toLowerCase()
// console.log(lowerCaseStr);


// // 4) concat() - გვაერთიანებს ორ სტრიქონს
// let str1 = "Hello"
// let str2 = "World"

// // console.log(str1 + " " + str2);

// //console.log(`${str1} ${str2}`);

// let gaertianeba= str1.concat(str2);
// console.log(gaertianeba);

// 5) trim() - გვიბრუნებს სტრიქონს ზედმეტი სივრცეების გარეშე
// let name = "   Giorgi   "
// console.log(name.trim());
// console.log(name.length);
// console.log(name.trim().length);

// let universal = " "

// if(universal){
//     console.log(1);
// }else{
//     console.log(2);
// }


// // 6) split() - გვიბრუნებს მასივს სტრიქონის ნაწილებად გაყოფის შემდეგ
// let greeting = "Hello World"
// let splitedStr = greeting.split(" ")
// let [str1, str2] = splitedStr
// // console.log(splitedStr);
// console.log(str1);
// console.log(str2);


// 7) replace/replaceAll/indexOf - გვიბრუნებს ახალ სტრიქონს, სადაც ძველი სტრიქონი შეცვლილია ახალი სტრიქონით
// let universal = "Hello World"
// let replacedStr = universal.replace("Hello", "Hi")
// console.log(replacedStr);

// let universal = "Hello World"
// // let changeChar = universal.replaceAll("o", "a")
// // console.log(changeChar);

// let index = universal.indexOf("l", 4)
// console.log(index); 


// // 8) includes() - გვიბრუნებს true თუ სტრიქონი შეიცავს ძველ სტრიქონს, წინააღმდეგ შემთხვევაში false
// let universal = "Hello World"
// console.log(universal.includes("llo"));


// // 9) ტენარი ოპერატორი (შედარების)
// let number = 10
// console.log(number > 5 ? "კი მეტია":"არაა მეტი");


// //while - ციკლი, რომელიც განმეორდება მანამ, სანამ პირობა არ შესრულდება
// let count = 11 
// while(count > 0){
//     count--
//     console.log(count);
// }


// for loop - ციკლი, რომელიც განმეორდება განსაზღვრული რაოდენობის ჯერ 
//for(საიდან დავიწყოთ, სადამდე გავაგრძელოთ, რამდენით გავზარდოთ)

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// for (let i = 10; i > 0; i--){
//     console.log(i);
// }


// let str = "hello world"
// let answer = ""
// for (let i = str.length-1; i >= 0; i--){
//     // console.log(i);
//     // console.log(str[i]);

//     // answer= answer + str[i]
//     answer += str[i]

// }
// console.log(answer);

