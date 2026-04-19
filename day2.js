let firstName = "Adsaya";
let lastName = "Shanmuganathan";
let country = "Sri Lanka";
let city = "Kilinochchi";
let age = 19;
let isMarried = false;
let year = 2026;

console.log(typeof firstName); 
console.log(typeof lastName);  
console.log(typeof country);   
console.log(typeof city);      
console.log(typeof age);       
console.log(typeof year);     


console.log(typeof '10' === typeof 10); 
console.log(parseInt('9.8') === 10); 

console.log(Boolean(1));        
console.log(Boolean("hello"));  
console.log(Boolean([]));      

console.log(Boolean(0));        
console.log(Boolean(""));       
console.log(Boolean(null));  




console.log(4 > 3); 


console.log(4 >= 3); 


console.log(4 < 3);


console.log(4 <= 3);


console.log(4 == 4);

console.log(4 === 4); 

console.log(4 != 4);


console.log(4 !== 4); 


console.log(4 != '4');


console.log(4 == '4'); 


console.log(4 === '4'); 



var word1 = "python";
var word2 = "jargon";

console.log(word1.length); 
console.log(word2.length);
console.log(word1.length !== word2.length);




console.log(4 > 3 && 10 < 12); 


console.log(4 > 3 && 10 > 12); 


console.log(4 > 3 || 10 < 12);


console.log(4 > 3 || 10 > 12); 

console.log(!(4 > 3)); 


console.log(!(4 < 3)); 


console.log(!(false)); 

console.log(!(4 > 3 && 10 < 12)); 


console.log(!(4 > 3 && 10 > 12)); 


console.log(!(4 === '4')); 




let now = new Date();
let Year = now.getFullYear();
let monTh = now.getMonth() + 1; 
let date = now.getDate();
let dAy = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = Math.floor(now.getTime() / 1000);
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds since Jan 1, 1970:", seconds);



let base = Number(prompt("Enter base:"));
let height = Number(prompt("Enter height:"));
let Area = 0.5 * base * height;
console.log(Area);

let A = Number(prompt());
let b = Number(prompt());
let C = Number(prompt());
let Perimeter = a + b + c;
console.log(Perimeter);



let length = Number(prompt());
let width = Number(prompt());
let ARea = length * width;
let perimeter = 2 * (ARea);


let r = Number(prompt());
let pi = 3.14;
let area = pi * r * r;

let x = 0;
let y = 2 * x - 2;


let slope = (y2 - y1) / (x2 - x1);

let pay = hours * rate;

let agE = currentYear - birthYear;


seconds = years * 365 * 24 * 60 * 60;



let Age = Number(prompt("Enter your age:"));

if (age >= 18) {
  console.log("You are old enough to drive.");
} else {
  console.log(`You are left with ${18 - age} years to drive.`);
}



let myAge = Number(prompt("Enter my age:"));
let yourAge = Number(prompt("Enter your age:"));

if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge} years older than you.`);
} else if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else {
  console.log("We are same age.");
}



let a = 4;
    b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}



let c = 4;
 d = 3;

let result = (a > b)
  ? `${a} is greater than ${b}`
  : `${a} is less than ${b}`;

console.log(result);



let num = Number(prompt("Enter a number:"));

if (num % 2 === 0) {
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}


let score = Number(prompt("Enter your score:"));

if (score >= 80 && score <= 100) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else if (score >= 50) {
  console.log("D");
} else {
  console.log("F");
}


let month = prompt("Enter month:");

month = month.toLowerCase();

if (month === "september" || month === "october" || month === "november") {
  console.log("Autumn");
} 
else if (month === "december" || month === "january" || month === "february") {
  console.log("Winter");
}
else if (month === "march" || month === "april" || month === "may") {
  console.log("Spring");
}
else if (month === "june" || month === "july" || month === "august") {
  console.log("Summer");
}


let day = prompt("What is the day today?");
day = day.toLowerCase();
if (day === "saturday" || day === "sunday") {
  console.log("Weekend");
} else {
  console.log("Working day");
}



let moNth = prompt("Enter month:");
month = month.toLowerCase();
if (
  month === "january" ||
  month === "march" ||
  month === "may" ||
  month === "july" ||
  month === "august" ||
  month === "october" ||
  month === "december"
) {
  console.log(`${month} has 31 days`);
}
else if (
  month === "april" ||
  month === "june" ||
  month === "september" ||
  month === "november"
) {
  console.log(`${month} has 30 days`);
}
else if (month === "february") {
  console.log("February has 28 days");
}



let yEar = Number(prompt("Enter year:"));
let montH = prompt("Enter month:");
month = month.toLowerCase();
let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
if (month === "february") {
  if (isLeap) {
    console.log("February has 29 days (Leap year)");
  } else {
    console.log("February has 28 days");
  }
}