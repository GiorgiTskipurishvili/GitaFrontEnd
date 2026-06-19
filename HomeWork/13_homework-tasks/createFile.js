const fs = require("fs");
const { write } = require("./utils/helper");

const user = {
  name: "Mariam",
  age: 26,
};

const product = {
  title: "Iphone 17 pro max",
  price: 3500,
};

fs.writeFileSync("user.json", write(user));
fs.writeFileSync("product.json", write(product));

console.log("ფაილები შეიქმნა");