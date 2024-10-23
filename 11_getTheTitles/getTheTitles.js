const getTheTitles = function (obj) {
  let result = [];
  obj.map((book) => result.push(book.title));

  return result;
};

// Do not edit below this line
module.exports = getTheTitles;
