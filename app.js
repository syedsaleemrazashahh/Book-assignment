// Chapter no 2

let str1 = "Laurence";
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(val1, typeof val1);
console.log(val2, typeof val2);
console.log(myNum, typeof myNum);

// Addition
let nr1 = 12;
let nr2 = 14;
let result1 = nr1 + nr2;

console.log(result1);

let str3 = "We are ";
let str4 = "Connect";
let result2 = str3 + str4;

console.log(result2);

// Practice exercise 2.2

// Subtraction
let subtr1 = 20;
let subtr2 = 4;
let subtrStr1 = "Hi";
let subtr3 = 3;
let subtrResult1 = subtr1 - subtr2;
let subtrResult2 = subtrStr1 - subtr3;
console.log(subtrResult1, subtrResult2);

// Multiplication
let multi1 = 15;
let multi2 = 10;
let multStr1 = "Hi";
let multi3 = 3;
let multiResult1 = multi1 * multi2;
let multiResult2 = multStr1 * multi3;
console.log(multiResult1, multiResult2);

// Division
let div1 = 30;
let div2 = 5;
let divResult1 = div1 / div2;
console.log(divResult1);

// Exponentiation
let expo1 = 2;
let expo2 = 3;
let expoResult = expo1 ** expo2;
console.log(expoResult);

// Modulus
let mod1 = 10;
let mod2 = 3;
let modResult1 = mod1 % mod2;
console.log(`${mod1} % ${mod2} = ${modResult1}`);
let mod3 = 8;
let mod4 = 2;
let modResult2 = mod3 % mod4;
console.log(`${mod3} % ${mod4} = ${modResult2}`);
let mod5 = 15;
let mod6 = 4;
let modResult3 = mod5 % mod6;
console.log(`${mod5} % ${mod6} = ${modResult3}`);

// Unary operators: increment and decrement
let una1 = 4;
una1++;
console.log(una1);
let una2 = 4;
una2--;
console.log(una2);

// Prefix and postfix operators
let pos = 2;
console.log(pos++);
console.log(pos);

let pre = 2;
console.log(++pre);

let prePos1 = 4;
let prePos2 = 5;
let prePos3 = 2;
console.log(prePos1++ + ++prePos2 * prePos3++);