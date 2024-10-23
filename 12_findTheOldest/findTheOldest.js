const findTheOldest = function (people) {
  let arrOfAges = [];

  const newObj = people.map((person) => {
    let age = [];
    let yearOfBirth = person.yearOfBirth;
    let yearOfDeath = person.yearOfDeath;
    if (yearOfDeath === undefined) {
      yearOfDeath = new Date().getFullYear();
    }
    for (let i = yearOfBirth; i < yearOfDeath; i++) {
      person.age = age.push(i);
    }
    // console.log(person);
    return person;
  })

  newObj.map((person) => arrOfAges.push(person.age));

  const oldestPerson = Math.max(...arrOfAges);

  const result = newObj.filter((person) => {
    if (person.age === oldestPerson) {
      return person;
    }
  });

  return result[0].name;
};

// Do not edit below this line
module.exports = findTheOldest;
