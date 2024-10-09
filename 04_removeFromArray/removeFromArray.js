// const removeFromArray = function(arr, ...removeVal) {
//   for (let i = 0; i < removeVal.length; i++) {
//     // Remove array item
//     if (arr.indexOf(removeVal[i]) !== -1) {
//       arr.splice(arr.indexOf(removeVal[i]), 1);

//       // Double check
//       if (arr.indexOf(removeVal[i]) !== -1) {
//         arr.splice(arr.indexOf(removeVal[i]), 1);
//       }
//     }
//   }

//   return arr;
// };

const removeFromArray = function(arr, ...removeVal) {
  const newArray = [];
  
  arr.forEach((x) => {
    if (!removeVal.includes(x)) {
      newArray.push(x)
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
