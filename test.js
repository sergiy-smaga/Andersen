function numbers() {
  let a = +prompt("put in some number as argument", "");
  let b = +prompt("put in some number as base", "");
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return console.log("Некорректный ввод!");
  }
  return console.log(a.toString(b));
}
numbers();

function numbers2() {
  let a = +prompt("put in some number", "");
  if (Number.isNaN(a)) {
    return console.log("Некорректный ввод!");
  }
  let b = +prompt("put in some number but not zero", "");
  if (Number.isNaN(b)) {
    return console.log("Некорректный ввод!");
  } else if (b === 0) {
    return console.log("Деление на ноль невозможно");
  }
  return console.log(`Ответ: ${a + b}, ${a / b}`);
}
numbers2();
