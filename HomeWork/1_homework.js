// -პრაქტიკა-
console.log("------------")
console.log("Task 1")

// 1) let fullName = "Lika Mamaladze" - საბოლოო პასუხი "L.M."
let fullName = "Lika Mamaladze"
let firstLetter = fullName.charAt(0)
// console.log(firstLetter);

// let lastLetter = fullName.charAt(fullName.indexOf("M"))
let lastLetter = fullName.charAt(fullName.indexOf(" ") + 1) 
// console.log(lastLetter);
// let result = firstLetter + "." + lastLetter + "."
let result = `${firstLetter}.${lastLetter}.`
console.log(result);


// 2) let email = " EXAMPLE@MAIL.COM " - გაწმინდე (trim) და გადაიყვანე lowercase-ში. გადაამოწმე, შეიცავს თუ არა "@"
console.log("------------")
console.log("Task 2")

let email = " EXAMPLE@MAIL.COM "
email = email.trim().toLowerCase()
console.log(email)
console.log(email.includes("@"))

// 3) let str = "luka" ამოიღეთ ბოლო ასო და გადააქციეთ upperCase-ად
console.log("------------")
console.log("Task 3")

let str = "luka"
let lastChar = str.charAt(str.length - 1).toUpperCase()
console.log(lastChar);

// 4)გამოიყენე for ლუპი 1-დან 100-მდე რიცხვებზე.
// თუ რიცხვი იყოფა 3-ზე დააბრუნე - "Foo"
// თუ იყოფა 5-ზე დააბრუნე - "Bar"
// თუ იყოფა ორივეზე დააბრუნე - "FooBar"
// თუ არა დააბრუნე - უბრალოდ რიცხვი
console.log("------------")
console.log("Task 4")
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FooBar")
    } else if (i % 3 == 0) {
        console.log("Foo")
    }   else if (i % 5 == 0) {  
        console.log("Bar")
    } else {
        console.log(i)
    }   
}

// 5)let text = "JS is stupid but sometimes cool" - სიტყვა "stupid" შეცვალე "s****d"-ით.
console.log("------------")
console.log("Task 5")

let text = "JS is stupid but sometimes cool"
let replacedWord = text.replace("stupid", "s****d")
console.log(replacedWord)


// -თეორია-
// 1)რამდენი ცვლადი გვაქვს ჯავასკრიპტში.(პასუხი თეორიულად გაეცი)
console.log("------------")
console.log("Theory 1")
console.log("ჯავასკრიპტში გვაქვს სამი ცვლადი: let, const, var. var არის მოძველლებული და არ გამოიყენება, რადგან მას აქვს გარკვეული პრობლემები. let არის ცვლადი, რომელშიც შენახული ტიპი  შეიცვლება. ხოლო const არის ცვლადი, რომლის შენახული ტიპი არ შეიცვლება. ანუ მაგალითად let-ში რო შევიყვანოთ რაიმე ტიპის მონაცემი let name = giorgi და შემდეგ name = nika  ეს გიორგი გახდება ნიკა, ხოლო const-ში თუ შევიყვანოთ const name = giorgi და შემდეგ name = nika  ეს შეცდომას გამოიწვევს, რადგან const-ში შენახული ტიპი არ შეიცვლება და შესაბამისად გიორგი ვერ გახდება ნიკა.")

// 2)რამდენიტიპი გვაქვს ჯავასკრიპტში.(ჩამოთვალე)(პასუხი თეორიულად გაეცი)
console.log("------------")
console.log("Theory 2")
console.log("ჯავასკრიპტში გვაქვს 10 ტიპი string, number, boolean, null, undefined, function, bigint, symbol, object, array")
// 3) რომელი მეთოდი აქცევს სტრინგს მასივად.(პასუხი თეორიულად გაეცი)
console.log("------------")
console.log("Theory 3")
console.log("სტრინგი მასივად აქცევს split() მეთოდი. მაგალითად თუ გვაქვს let greeting = 'hello world' და დავწერთ greeting.split(' ')  ეს გვიბრუნებს მასივს ['hello', 'world'], ვიხილოთ მოცემული მაგალითი კოდში:")
let greeting = 'hello world'
let strToArr = greeting.split(' ')
console.log(strToArr)

// 4) სტრინგი პრიმიტიული ტიპია თუ არა ? .(პასუხი თეორიულად გაეცი)
console.log("------------")
console.log("Theory 4")
console.log("სტრინგი არის პრიმიტიული ტიპი. ის არ არის ობიექტი, მაგრამ მასზე მეთოდების გამოყენება შესაძლებელია, რადგან JavaScript დროებით ქმნის wrapper object-ს (String object-ს). მაგალითად: toUpperCase(), toLowerCase(), charAt(), slice() და სხვა მეთოდები მუშაობენ ამ დროებით ობიექტზე.");

// 5)ჩამოთვალე რა მეთოდები ვისწავლეთ მაგ -> length(პასუხი თეორიულად გაეცი)
console.log("------------")
console.log("Theory 5")
console.log("ვისწავლეთ რამდენიმე მეთოდები: length - სტრინგის სიგრძე, charAt() - სიმბოლოს მიღება/დაბრუნება ინდექსით, slice() - ნაწილის ამოჭრა,toUpperCase() - დიდი ასოების გამოტანა, toLowerCase() - პატარა ასოების გამოტანა, concat() - სტრინგების გაერთიანება,  trim() - ზედმეტი სფეისების მოშორება, replace()/replaceAll() - ჩანაცვლება, includes - შეიცავს თუ არა კონკრეტული სიმბოლო/სტრიქონი")