const palindromes = function (str) {
  const splitStr = str.split("");
  let reverseStr = "";

  for (let i = splitStr.length - 1; i >= 0; i--) {
    let char = splitStr[i];
    reverseStr += char;
  }

  return reverseStr == str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
