function helloWorld() {
  return 'Hello World!';
}

function lambdaSchool(num) {
  if (num % 3 === 0 && num % 5 ===0) {
    return 'Lambda School';
  } else if (num % 3 === 0) {
    return 'Lambda';
  } else if (num % 5 === 0) {
    return 'School';
  } else {
    return num;
  }
}

function longestString(strs) {
  let currString = '';
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > currString.length) {
      currString = strs[i];
    }
  }
  return currString;
}

function computeUserAverageAge(users) {
  let totalAge = 0;
  let totalUsers = 0;
  for (let i = 0; i < users.length; i++) {
    totalAge += users[i].age;
    totalUsers++;
  }
  return Math.round(totalAge / totalUsers);
}

module.exports = {
 helloWorld,
 lambdaSchool,
 longestString,
 computeUserAverageAge
};
