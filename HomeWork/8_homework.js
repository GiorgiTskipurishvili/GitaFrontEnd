// ArrayTasks

// 1)let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]] დაალაგე ზრდადობით და ამოიღე უნიკალურები გამოიყენე ForLoop
console.log("----------")
console.log("Task 1")
let arr = [1, [2, 3, [4, 5]], 5, [2, [3, 6]]]
let result = [] 
function flattenArray(array) {
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            flattenArray(array[i])
        }else{
            result.push(array[i])
        }
    }
    return result;
}
let flattened = flattenArray(arr)
let unique = [...new Set(flattened)]
unique.sort((a,b) => a - b)
console.log(unique)

// 2)let products = [
//   { name:"Phone", price:1200, rating:4.5 },
//   { name:"Laptop", price:2500, rating:4.8 },
//   { name:"Book", price:30, rating:4.9 },
//   { name:"TV", price:800, rating:4.0 }
// ]
// იპოვე ყველაზე მაღალი rating-ის მქონე პროდუქტი, მაგრამ ისეთი, რომლის ფასიც < 1000.
console.log("----------")
console.log("Task 2")
let products = [
  { name:"Phone", price:1200, rating:4.5 },
  { name:"Laptop", price:2500, rating:4.8 },
  { name:"Book", price:30, rating:4.9 },
  { name:"TV", price:800, rating:4.0 }
]

let filteredProducts = products.filter(p => p.price < 1000)
let highestRated = filteredProducts.reduce((max, p) => p.rating > max.rating ? p : max)
console.log(highestRated)
// 3)let sentence = "dog cat dog bird cat dog fish bird"
// რედიუსის დახმარებით დათვალე რომელი რამდენჯერ მეორდება და for ლუპის დახმარებით იპოვე მეტჯერგამეორებული
console.log("----------")
console.log("Task 3")
let sentence = "dog cat dog bird cat dog fish bird"
let words = sentence.split(" ")
let wordCount = words.reduce((count, word) => {
    count[word] = (count[word] || 0) + 1
    return count
}, {})

let mostFrequentWord = null
let maxCount = 0

for (let [word, count] of Object.entries(wordCount)) {
    if (count > maxCount) {
        maxCount = count
        mostFrequentWord = word
    }
}
console.log(mostFrequentWord)   

// ForLoop tasks

// 1)დაწერე ფუნქცია for loop-ის გამოყენებით, რომელიც დაითვლის რამდენჯერ გვხვდება კონკრეტული ასო მოცემულ სტრინგში. 
console.log("----------")
console.log("Task ForLoop 1")
function countLetter(text, letter) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === letter) {
            count++;
        }
    }

    return count;
}

console.log(countLetter("javascript", "a"));
// 2) დაწერე ფუნქცია, რომელიც შეამოწმებს არის თუ არა სტრინგი პალინდრომი (ეს სიტყვა თუ იკითხება
//  ერთნაირად ესე იგი პალინდრომია.მაგალითად ana, abba,gig) 
console.log("----------")
console.log("Task ForLoop 2")
function isPalindrome(word) {
    let reversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    return word === reversed;
}

console.log(isPalindrome("ana"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("hello"));

// 3)შექმენი ფუნქცია, რომელიც მიიღებს ორ რიცხვების მასივს, გააერთიანებს მათ, წაშლის დუბლიკატებს და დაითვლის ჯამს. გამოიყენე მასივის მეთოდები და ლოგიკური ოპერატორები საჭიროებისამებრ.
console.log("----------")
console.log("Task ForLoop 3")
function mergeAndSum(arr1, arr2) {
    let merged = [...arr1, ...arr2]
    let unique = [...new Set(merged)]
    let sum = unique.reduce((tot, curr) => tot + curr, 0)
    return sum
}

console.log(mergeAndSum([1, 2, 3], [3, 4, 5]))

//  4)შექმენი ფუნქცია ფაქტორიალის დასათვლელად. 
console.log("----------")
console.log("Task ForLoop 4")
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 1*2*3*4*5 = 120

// 5)Two Sum - მოძებნე მასივში ის წყვილები, რომელთა ჯამიც უდრის მოცემულ რიცხვს ანუ [1,2,3,4,5,6,-7,-8] ამ მასივს 
// და -15 თუ გადავცემთ მან უნდა დააბრუნოს [6,7]
console.log("----------")
console.log("Task ForLoop 5")   
function twoSum(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }   
        }
    }
    return pairs;
}
console.log(twoSum([1,2,3,4,5,6,-7,-8], -15))
