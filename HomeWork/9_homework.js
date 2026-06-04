// 1)დაწერე ფუქნცია რომელიც გაფილტრავს ლუწებზე და იპოვი მათ საშუალოს [1,2,3,4,5,6]
console.log("---------")
console.log("Task 1")
let nums = [1, 2, 3, 4, 5, 6];
let filteredEvenNums = nums.filter(num => num % 2 === 0);
let average = filteredEvenNums.reduce((sum, num) => sum + num, 0) / filteredEvenNums.length;
console.log(average);

// 2)დაწერე ფუნქცია, რომელიც დათვლის სიტყვების რაოდენობას წინადადებაში.
// let = "I love JavaScript"
console.log("---------")
console.log("Task 2")
let sentence = "I love JavaScript";
let wordCount = sentence.split(" ").length;
console.log(wordCount);
// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.
console.log("---------")
console.log("Task 3")
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));
// 4) let words = ["dog", "elephant", "cat", "hippopotamus"] იპოვე ყველაზე გრძელი ისტყვა
console.log("---------")
console.log("Task 4")
let words = ["dog", "elephant", "cat", "hippopotamus"];
let longestWord = words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, "");
console.log(longestWord);
// 5)let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება უფრო მეტჯერ
console.log("---------")
console.log("Task 5")
let arr = [3, 5, 3, 2, 5, 5, 3, 5];

let counts = {};

for (let num of arr) {
  counts[num] = (counts[num] || 0) + 1;
}

let mostFrequent;
let maxCount = 0;

for (let num in counts) {
  if (counts[num] > maxCount) {
    maxCount = counts[num];
    mostFrequent = Number(num);
  }
}

console.log(mostFrequent); // 5
// 6)let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუქნცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
console.log("---------")
console.log("Task 6")
let nums2 = [1, 2, 3, 4, 5, 6, 7, 8];
function countEvenOdd(arr) {
    let evenCount = 0;
    let oddCount = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return { evenCount, oddCount };
}
let counts2 = countEvenOdd(nums2);
console.log(`Even numbers: ${counts2.evenCount}, Odd numbers: ${counts2.oddCount}`);

// 7)let nums = [10, 2, 33, 5, 7] დაწერე ფუქნცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
console.log("---------")
console.log("Task 7")
let nums3 = [10, 2, 33, 5, 7];
function findSmallest(arr) {
    let smallest = arr[0];
    for (let num of arr) {
        if (num < smallest) {
            smallest = num;
        }
    }
    return smallest;
}
console.log(findSmallest(nums3)); 