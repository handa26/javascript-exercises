const convertToCelsius = function(f) {
  const celsius = (f - 32) / (9 / 5);

  if (!Number.isInteger(celsius)) {
    return Number(celsius.toFixed(1)); 
  }

  return celsius;
};

const convertToFahrenheit = function(c) {
  const fahrenheit = c * 9 / 5 + 32;

  if (!Number.isInteger(fahrenheit)) {
    return Number(fahrenheit.toFixed(1));
  }

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
