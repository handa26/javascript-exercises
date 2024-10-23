const fibonacci = function (n) {
  const convertInt = parseInt(n);
  let result = [];

  if (convertInt < 0) {
    return "OOPS";
  };

  if (convertInt === 0) result = [0];
  if (convertInt === 1) {
    result = [0, 1];
  };

  if (convertInt < 2) {
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }
  } else {
    result = [0, 1];

    for (let i = 2; i <= convertInt; i++) {
      result.push(result[result.length - 1] + result[result.length - 2])
    }
  }

  return result[n];
};

// Do not edit below this line
module.exports = fibonacci;
