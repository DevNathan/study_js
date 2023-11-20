async function getName() {
  return "hds";
}

async function printName() {
  const name = await getName();
  console.log(name);
}

printName();
