const { Command } = require("commander");
const { getPhones, savePhones } = require("./helper");

const program = new Command();

program
  .command("add")
  .argument("<name>")
  .argument("<phone>")
  .option("--america")
  .action((name, phone, options) => {
    const phones = getPhones();

    if (options.america) {
      phone = "011" + phone;
    }

    phones.push({
      id: Date.now(),
      name,
      phone,
    });

    savePhones(phones);

    console.log("დამატებულია");
  });

  program
  .command("list")
  .action(() => {
    console.table(getPhones());
  });

  program
  .command("get")
  .argument("<id>")
  .action((id) => {
    const phones = getPhones();

    const found = phones.find(
      (p) => p.id === Number(id)
    );

    console.log(found);
  });

  program
  .command("remove")
  .argument("<id>")
  .action((id) => {
    let phones = getPhones();

    phones = phones.filter(
      (p) => p.id !== Number(id)
    );

    savePhones(phones);

    console.log("წაიშალა");
  });

  program.parse();