const sumAll = function (x, y) {
  const arrOfNum = [];
  const initialValue = 0;
  let num1 = x;
  let num2 = y;

  // Switch number if the first number is bigger the second
  if (num1 > num2) {
    num1 = y;
    num2 = x;
  }

  // Thrown an error if both args are non integer or is a float number, 
  if (
    !(typeof x === "number") ||
    !(typeof y === "number") ||
    x < 0 ||
    y < 0 ||
    !Number.isInteger(x) ||
    !Number.isInteger(y)
  ) {
    return "ERROR";
  }

  for (let i = num1; i <= num2; i++) {
    arrOfNum.push(i);
  }

  const result = arrOfNum.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return result;
};

// Do not edit below this line
module.exports = sumAll;
