const fs = require("fs");

function getPhones() {
  return JSON.parse(
    fs.readFileSync("./phones.json", "utf-8")
  );
}

function savePhones(data) {
  fs.writeFileSync(
    "./phones.json",
    JSON.stringify(data, null, 2)
  );
}

module.exports = {
  getPhones,
  savePhones,
};