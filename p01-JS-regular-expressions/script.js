////////17.05.2023////////////
///////REGEXES////////////////

/////1.1 method .test()//////

// const myRegex = /love/;
// const myString = 'All we need is love, love is all we need';

// const regexTest = myRegex.test(myString);
// console.log(regexTest); // return - true into console

// const myRegex = /submarine/;
// const myString = 'All we need is love, love is all we need';

// const regexTest = myRegex.test(myString);
// console.log(regexTest); // return false - because there is no word "submarine" in the myString

// Note: regexes are case sensitive - /word/ and /Word/ - are two different expressions

///// 1.2 alternation operator (OR) - |

// const alcoRegex = /wine | beer/;
// const alcoString =
//   'wine is the best beverage for saturday evening. Also beer is good too';
// const alcoStringHard = 'Gin is the best for weekend';
// const regexTest1 = alcoRegex.test(alcoString);
// const regexTest2 = alcoRegex.test(alcoStringHard);

// console.log(regexTest1);
// console.log(regexTest2);

///// 1.3 - case ignorance flag --"i"--

const myRegex = /love/i;
const myRegex1 = /love/;

const myString = 'All we need  is LOve. loVe is all we need';

const resultTest = myRegex.test(myString);

console.log(resultTest); // return true because  regex has "i"-flag
console.log(myRegex1.test(myString)); // return false because regex1 has no "i-flag"

///// 1.4 - match() method -  для извлечения из строки совпадающегорегулярного выражения

const matchingWord = myString.match(myRegex); // here myRegex = /love/i (look at line # 34)
console.log(matchingWord); // we get array: ["LOve", index: 16, input: "All we need  is LOve. loVe is all we need", groups: undefined]
console.log(matchingWord[0]); // we get certain word - LOve -i.e. the first match;

///// 1.5 find more than one match - "g" flag
// g flag allows to find all matching words in working string

const matchingWords = myString.match(/love/gi);
console.log(matchingWords); // here we get in console array which contains matching words i.e. [LOve, loVe]

////////////////////////////18.05.2023///////////
////////////////////////////////////////////////

///// 1.6 - using wildcard period to match everything that match to regex

//////// for this i should train map method
let resultArr = ['3:1', '2:2', '0:1'];
let tempArr = [];
let team1Result = 0;
let team2Result = 0;
for (let j = 0; j < resultArr.length; j++) {
  tempArr.push(resultArr[j].split(':'));
}
for (let i = 0; i < tempArr.length; i++) {
  if (Number(tempArr[i][0]) > Number(tempArr[i][1])) {
    team1Result += 3;
  } else if (Number(tempArr[i][0]) === Number(tempArr[i][1])) {
    team1Result += 1;
  }
}

console.log(team1Result);
