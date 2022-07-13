function makeObjectDeepCopy(obj) {
  if (typeof obj !== "object") {
    return;
  }
  let copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        copy[key] = { ...obj[key] };
      } else {
        copy[key] = obj[key];
      }
    }
  }
  return copy;
}

function selectFromInterval(arr, num1, num2) {
  if (!Array.isArray(arr) || isNaN(num1) || isNaN(num2)) {
    throw new Error(`Give me array and two numbers`);
  }

  let min = num1 < num2 ? num1 : num2;
  let max = num1 < num2 ? num2 : num1;

  return arr.filter((el) => {
    if (typeof el !== "number") {
      throw new Error("Array should contain only numbers");
    } else {
      return el >= min && el <= max;
    }
  });
}
