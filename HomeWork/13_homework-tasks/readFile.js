const fs = require("fs");
const { read } = require("./utils/helper");

const userData = read(
  fs.readFileSync("user.json", "utf-8"),
  true
);

const productData = read(
  fs.readFileSync("product.json", "utf-8"),
  true
);

console.log(userData);
console.log(productData);