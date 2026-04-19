const countries = [
  'Albania','Bolivia','Canada','Denmark','Ethiopia',
  'Finland','Germany','Hungary','Ireland','Japan','Kenya'
];

const webTechs = [
  'HTML','CSS','JavaScript','React','Redux','Node','MongoDB'
];

let arr = [];


let numbers = [1,2,3,4,5,6,7];


console.log(numbers.length);


console.log(numbers[0]);
console.log(numbers[Math.floor(numbers.length / 2)]);
console.log(numbers[numbers.length - 1]);


let mixedDataTypes = [1,"ammu",true,null,undefined,25];
console.log(mixedDataTypes.length);


let itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];


console.log(itCompanies);


console.log(itCompanies.length);


console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);


for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}


for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}


console.log(itCompanies.join(", ") + " are big IT companies.");


let company = prompt("Enter company:");
if (itCompanies.includes(company)) {
  console.log(company);
} else {
  console.log("Company not found");
}


for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  for (let j = 0; j < itCompanies[i].length; j++) {
    if (itCompanies[i][j].toLowerCase() === "o") {
      count++;
    }
  }
  if (count > 1) {
    console.log(itCompanies[i]);
  }
}


console.log(itCompanies.sort());


console.log(itCompanies.reverse());


console.log(itCompanies.slice(0, 3));


console.log(itCompanies.slice(-3));

let mid = Math.floor(itCompanies.length / 2);
if (itCompanies.length % 2 === 0) {
  console.log(itCompanies.slice(mid - 1, mid + 1));
} else {
  console.log(itCompanies[mid]);
}


itCompanies.shift();


let mid2 = Math.floor(itCompanies.length / 2);
itCompanies.splice(mid2, 1);


itCompanies.pop();


itCompanies = [];
console.log(itCompanies);


const Countries = [
  'Albania','Bolivia','Canada','Denmark','Ethiopia',
  'Finland','Germany','Hungary','Ireland','Japan','Kenya'
];

 const WebTechs = [
  'HTML','CSS','JavaScript','React','Redux','Node','MongoDB'
];


{ countries } "./countries.js";
{ webTechs }"./web_techs.js";



let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let cleanText = text.replace(/[.,]/g, "");
let words = cleanText.split(" ");
console.log(words);
console.log(words.length);


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes("Meat")) {
shoppingCart.unshift("Meat");
}
if (!shoppingCart.includes("Sugar")) {
shoppingCart.push("Sugar");
}
let index = shoppingCart.indexOf("Honey");
if (index !== -1) {
shoppingCart.splice(index, 1);
}
let teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex !== -1) {
shoppingCart[teaIndex] = "Green Tea";
}
console.log(shoppingCart);



if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
}

console.log(webTechs);




const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);




const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => a - b);
let min = ages[0];
let max = ages[ages.length - 1];
let Mid = Math.floor(ages.length / 2);
let median = (ages[mid - 1] + ages[mid]) / 2;
let Sum = ages.reduce((a, b) => a + b, 0);
let average = Sum / ages.length;
let range = max - min;
console.log(Math.abs(min - average));
console.log(Math.abs(max - average));
console.log("min:", min);
console.log("max:", max);
console.log("median:", median);
console.log("average:", average);
console.log("range:", range);



let first10 = countries.slice(0, 10);
console.log(first10);


let MiD = Math.floor(countries.length / 2);

let firstHalf = countries.slice(0, mid);
let secondHalf = countries.slice(mid);

console.log(firstHalf);
console.log(secondHalf);





const Cuntries = [
  'Albania','Bolivia','Canada','Denmark','Ethiopia',
  'Finland','Germany','Hungary','Ireland','Japan','Kenya'
];

const Webtechs = [
  'HTML','CSS','JavaScript','React','Redux','Node','MongoDB'
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];


for (let i = 0; i <= 10; i++) console.log(i);


for (let i = 10; i >= 0; i--) console.log(i);


let n = 5;
for (let i = 0; i <= n; i++) console.log(i);


for (let i = 1; i <= 7; i++) console.log("#".repeat(i));


for (let i = 0; i <= 10; i++) console.log(`${i} x ${i} = ${i*i}`);


console.log("i i2 i3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i*i} ${i*i*i}`);
}


for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}


for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) console.log(i);
}


for (let i = 2; i <= 100; i++) {
  let prime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) console.log(i);
}


let sum = 0;
for (let i = 0; i <= 100; i++) sum += i;
console.log(sum);


let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) evenSum += i;
  else oddSum += i;
}
console.log(evenSum, oddSum);


let randoms = [];
for (let i = 0; i < 5; i++) {
  randoms.push(Math.floor(Math.random() * 100));
}
console.log(randoms);

let unique = [];
while (unique.length < 5) {
  let num = Math.floor(Math.random() * 10);
  if (!unique.includes(num)) unique.push(num);
}
console.log(unique);


let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
let id = "";
for (let i = 0; i < 6; i++) {
  id += chars[Math.floor(Math.random() * chars.length)];
}
console.log(id);


let hex = "#";
for (let i = 0; i < 6; i++) {
  hex += "abcdef0123456789"[Math.floor(Math.random() * 16)];
}
console.log(hex);


let r = Math.floor(Math.random()*256);
let g = Math.floor(Math.random()*256);
let b = Math.floor(Math.random()*256);
console.log(`rgb(${r},${g},${b})`);


console.log(countries.map(c => c.toUpperCase()));


console.log(countries.map(c => c.length));


console.log(countries.map(c => [c, c.slice(0,3).toUpperCase(), c.length]));


console.log(countries.filter(c => c.includes("land")));


console.log(countries.filter(c => c.endsWith("ia")));


console.log(countries.reduce((a,b)=> a.length>b.length?a:b));

console.log(countries.filter(c => c.length === 5));


console.log(webTechs.reduce((a,b)=> a.length>b.length?a:b));


console.log(webTechs.map(t => [t, t.length]));

console.log(mernStack.join(""));


for (let t of webTechs) console.log(t);


let fruits = ['banana','orange','mango','lemon'];
let rev = [];
for (let i = fruits.length-1; i >= 0; i--) rev.push(fruits[i]);
console.log(rev);


const FullStack = [
  ['HTML','CSS','JS','React'],
  ['Node','Express','MongoDB']
];

for (let row of fullStack) {
  for (let item of row) {
    console.log(item);
  }
}