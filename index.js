let code1;
code1 = 7 + 3;
let code2 = 100 - 120 / 2;
let code3 = 36 + (15 % 4);

let message = "The vault has been secured. The combination is:";
let codeA = code1 + "-" + code2 + "-" + code3;
let codeB = `${code1}-${code2}-${code3}`;

console.log(message);
console.log(codeA);
console.log(codeB);
