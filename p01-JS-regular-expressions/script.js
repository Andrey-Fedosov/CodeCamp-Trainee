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

// const myRegex = /love/i;
// const myRegex1 = /love/;

// const myString = 'All we need  is LOve. loVe is all we need';

// const resultTest = myRegex.test(myString);

// console.log(resultTest); // return true because  regex has "i"-flag
// console.log(myRegex1.test(myString)); // return false because regex1 has no "i-flag"

///// 1.4 - match() method -  для извлечения из строки совпадающегорегулярного выражения

// const matchingWord = myString.match(myRegex); // here myRegex = /love/i (look at line # 34)
// console.log(matchingWord); // we get array: ["LOve", index: 16, input: "All we need  is LOve. loVe is all we need", groups: undefined]
// console.log(matchingWord[0]); // we get certain word - LOve -i.e. the first match;

///// 1.5 find more than one match - "g" flag
// g flag allows to find all matching words in working string

// const matchingWords = myString.match(/love/gi);
// console.log(matchingWords); // here we get in console array which contains matching words i.e. [LOve, loVe]

////////////////////////////18.05.2023///////////
////////////////////////////////////////////////

///// 1.6 - using wildcard period to match everything that match to regex
//////22.05.2023/////////////////////////////////////
// if you need to find match any symbol  you can use . (dot)
// let hamStr = 'i have got a hamster';
// let hugStr = 'I want to hug you. hurry up.';
// let hurrStr = 'you should hurry up';

// let huRegex = /hu./;

// console.log(huRegex.test(hamStr)); //false
// console.log(huRegex.test(hugStr)); //true
// console.log(huRegex.test(hurrStr)); //true

// const matchWord1 = hurrStr.match(huRegex);

// console.log(matchWord1); // return: ["hur", index: 11, input: "you should hurry up", groups: undefined]
// const matchWord2 = hugStr.match(huRegex);
// console.log(matchWord2);

////////////////////////////////////////
///1.7 -match single character with mutiple possibilities

// for defininig group of characters you wish to match you should use []

// let bigStr = 'big';
// let bagStr = 'bag';
// let bugStr = 'bog and buggy';

// let bgRegex = /[iu]/; // it finds all words with letters i or u

// const bgTest = bgRegex.test(bugStr);
// const bgLetters = bugStr.match(bgRegex);
// console.log(bgLetters, bgTest);

//////////////////////////////23.05.2023
////////////////////////////////////////

//1.8// match letter of alphabet (using '-')
let catStr = 'cat';
let batStr = 'bat';
let matStr = 'mat';

let bgRegex = /[a-e]at/;
const catStrMatch = catStr.match(bgRegex);
const batStrMatch = batStr.match(bgRegex);
const matStrMatch = matStr.match(bgRegex);

console.log(
  `cat string match ${catStrMatch}, bat string match ${batStrMatch}, mat string match ${matStrMatch}`
);

//////1.9 match numbers////////
/////////////////////////////  using [0-9]

let andresStr = 'Andy1990';
const andyRegex = /[a-z7-9]/gi;
const dyRegex = /[^ad19]/gi; // letters a, d, numbers 1, 9  wouldn't include in set;

// const matchingString2 = andresStr.match(dyRegex);
// const matchingString = andresStr.match(andyRegex);

// console.log(matchingString2);
// console.log(matchingString); // show ["A", "n", "d", "y", "9", "8", "7"]

// using '^' symbol allows to set lettes or numbers which shouldn't be matched

//////1. 10 - find character that occur symbol '+'

const andyPlusRegex = /[a-z9+]/gi;
const matchingString3 = andresStr.match(andyPlusRegex);

console.log(matchingString3);

////////////// 1.11 symbols occurs 1 or more times - for this use '+' symbol , in case of symbol occurs 0 or more time should use '*';

//////// for this i should train map method
// let resultArr = ['3:1', '2:2', '0:1'];
// let tempArr = [];
// let team1Result = 0;
// let team2Result = 0;
// for (let j = 0; j < resultArr.length; j++) {
//   tempArr.push(resultArr[j].split(':'));
// }
// for (let i = 0; i < tempArr.length; i++) {
//   if (Number(tempArr[i][0]) > Number(tempArr[i][1])) {
//     team1Result += 3;
//   } else if (Number(tempArr[i][0]) === Number(tempArr[i][1])) {
//     team1Result += 1;
//   }
// }

// console.log(team1Result);

//////above there is one of codewarz task
