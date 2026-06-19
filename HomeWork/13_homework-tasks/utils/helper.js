/*
1) შექმენი utils/helper.js სადაც გექნება ფუქნციები read(უნდა პარსავდეს true-ს გადაწოდების შემდეგ) და write(ანალოგიურად stringify-უნდა გაუკეთოს).
შექმენი ამ ფუქნციებით 2 ფაილი და ჩაწერე შიგნით ნებისმიერი რამ. ასევე ჰელფერებში დაამატე ჯამის დათვლა და სტრინგის შეტრიალების ფუქნცია.

*/

const fs = require("fs");

function write(data) {
  return JSON.stringify(data, null, 2);
}

function read(data, parse = false) {
  return parse ? JSON.parse(data) : data;
}

function sum(a,b){
    return a+b;
}

function reverseString(str){
    return str.split("").reverse().join("");
}

module.exports = {
  write,
  read,
  sum,
  reverseString,
};