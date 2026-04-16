// comments can make code readable

// Welcome to learn Javascript

/*
comments can make code readable, easy to reuse
and informative
*/


let name="achchu"
console.log(name)
let islogged= true;
console.log(islogged)
let food;                
console.log(food);       
let errorLog = null;
console.log(errorLog);

let city = "Kilinochchi";   
console.log(city);       
const age = 19;       
console.log(age);               
let isRaining = false;  
console.log(isRaining);
let number= 5;
console.log(number);
let color;                
console.log(color);  
let animal = null;
console.log(animal);
let uniqueKey = Symbol("id");
console.log(uniqueKey)


let firstName;
let totalCount;
let lastName;
let fruits;
console.log(firstName);         
console.log(totalCount);         
console.log(lastName);  
console.log(fruits);      


var friendname = "Adsaya";        
const friendage = 19;             
const isStudent = false;    
const skills = ["JS", "CSS"]; 
console.log(friendname);     
console.log(friendage);       
console.log(isStudent); 
console.log(skills);

const Firstname = "Adsaya";
const Lastname = "Shanmuganathan";
const maritalstatus = "Single";
const Country = "Sri Lanka";
const AGE = 19;
console.log(Firstname);
console.log(Lastname);
console.log(maritalstatus);
console.log(Country);
console.log(AGE);


const FirstName = "Adsaya";
const LastName = "Shanmuganathan";
const maritalStatus = "Single";
const country = "Sri Lanka";
const Age = 50;
console.log(FirstName, LastName, maritalStatus, country, Age);


let firstNamE = "Adsaya", LastNamE = "Shanmuganathan", MaritalStatus = "Single", countrY = "Sri Lanka", aGe = 50;
console.log(firstNamE, LastNamE , MaritalStatus, countrY , aGe);



let myAge = 25;
let yourAge = 30;
console.log("I am " + myAge + " years old.");
console.log("You are " + yourAge + " years old.");



let challenge = 'learn Javascript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

let firstWord = challenge.substring(0, 5);
console.log(firstWord);
let phrase = challenge.substring(6);
console.log(phrase); 



console.log(challenge.includes('Script')); 
console.log(challenge.split('')); 


console.log(challenge.split(' ')); 
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', ')); 

console.log(challenge.replace('learn Javascript', '30 Days Of Python'));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(challenge.indexOf('J'))); 


console.log(challenge.indexOf('a')); 


console.log(challenge.lastIndexOf('a')); 
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));     
console.log(sentence.lastIndexOf('because')); 
console.log(sentence.search('because'));      

let spacedString = ' learn Javascript ';
console.log(spacedString.trim()); 


console.log(challenge.startsWith('learn')); 


console.log(challenge.endsWith('Javascript'));

console.log(challenge.match(/a/g)); 


let part1 = '30 Days of';
console.log(part1.concat(' ', 'JavaScript')); 


console.log(challenge.repeat(2)); 





console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");



let numString = '10';
let numInt = 10;
console.log(typeof numString === typeof numInt); 
let convertedNum = Number(numString);
console.log(typeof convertedNum === typeof numInt); 
let numFloat = parseFloat('9.8');
console.log(numFloat === 10); 
let roundedNum = Math.ceil(numFloat);
console.log(roundedNum === 10); 


let word1 = 'python', word2 = 'jargon';
console.log(word1.includes('on') && word2.includes('on')); 
let Sentence = 'I hope this course is not full of jargon.';
console.log(sentence.includes('jargon'));



console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * 51) + 50);
console.log(Math.floor(Math.random() * 256));
let js = 'JavaScript';
let randomIndex = Math.floor(Math.random() * js.length);
console.log(js[randomIndex]);

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
let longSentence = 'You cannot end a sentence with because because because is a conjunction';
let phraseToExtract = 'because because because';


let startIndex = longSentence.indexOf(phraseToExtract);
console.log(longSentence.substr(startIndex, phraseToExtract.length)); 
