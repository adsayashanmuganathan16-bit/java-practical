function myfullName() {
  console.log("Adsaya Shanmuganathan");
}

function fullName2(firstName, lastName) {
  return firstName + " " + lastName;
}

function addNumbers(a, b) {
  return a + b;
}

function areaOfRectangle(l, w) {
  return l * w;
}

function perimeterOfRectangle(l, w) {
  return 2 * (l + w);
}

function volumeOfRectPrism(l, w, h) {
  return l * w * h;
}

function areaOfCircle(r) {
  return Math.PI * r * r;
}

function circumOfCircle(r) {
  return 2 * Math.PI * r;
}

function density(mass, volume) {
  return mass / volume;
}

function speed(distance, time) {
  return distance / time;
}

function weight(mass, gravity = 9.8) {
  return mass * gravity;
}

function convertCelsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}

function bmi(weight, height) {
  let value = weight / (height * height);
  if (value < 18.5) return "Underweight";
  else if (value <= 24.9) return "Normal";
  else if (value <= 29.9) return "Overweight";
  else return "Obese";
}

function checkSeason(month) {
  month = month.toLowerCase();
  if (["september","october","november"].includes(month)) return "Autumn";
  if (["december","january","february"].includes(month)) return "Winter";
  if (["march","april","may"].includes(month)) return "Spring";
  if (["june","july","august"].includes(month)) return "Summer";
}

function findMax(a,b,c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

function solveLinEquation(a,b,c,x) {
  return (-c - a*x)/b;
}

function solveQuadratic(a,b,c) {
  let d = b*b - 4*a*c;
  if (d < 0) return [];
  if (d === 0) return [-b/(2*a)];
  return [(-b + Math.sqrt(d))/(2*a), (-b - Math.sqrt(d))/(2*a)];
}

function printArray(arr) {
  for (let i of arr) console.log(i);
}

function showDateTime() {
  let d = new Date();
  let day = String(d.getDate()).padStart(2,'0');
  let month = String(d.getMonth()+1).padStart(2,'0');
  let year = d.getFullYear();
  let hour = String(d.getHours()).padStart(2,'0');
  let min = String(d.getMinutes()).padStart(2,'0');
  console.log(`${day}/${month}/${year} ${hour}:${min}`);
}

function swapValues(x,y) {
  return [y,x];
}

function reverseArray(arr) {
  let rev = [];
  for (let i = arr.length-1; i>=0; i--) rev.push(arr[i]);
  return rev;
}

function capitalizeArray(arr) {
  return arr.map(e => e.toUpperCase());
}

let items = [];
function addItem(item) {
  items.push(item);
  return items;
}

function removeItem(index) {
  items.splice(index,1);
  return items;
}

function sumOfNumbers(n) {
  let sum=0;
  for(let i=0;i<=n;i++) sum+=i;
  return sum;
}

function sumOfOdds(n) {
  let sum=0;
  for(let i=1;i<=n;i+=2) sum+=i;
  return sum;
}

function sumOfEven(n) {
  let sum=0;
  for(let i=0;i<=n;i+=2) sum+=i;
  return sum;
}

function evensAndOdds(n) {
  let even=0, odd=0;
  for(let i=0;i<=n;i++){
    if(i%2===0) even++;
    else odd++;
  }
  console.log("Evens:",even,"Odds:",odd);
}

function sum(...args) {
  return args.reduce((a,b)=>a+b,0);
}

function randomUserIp() {
  return Array.from({length:4},()=>Math.floor(Math.random()*256)).join('.');
}

function randomMacAddress() {
  return Array.from({length:6},()=>Math.floor(Math.random()*256).toString(16).padStart(2,'0')).join(':');
}

function randomHexaNumberGenerator() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function userIdGenerator() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id="";
  for(let i=0;i<7;i++) id+=chars[Math.floor(Math.random()*chars.length)];
  return id;
}

function rgbColorGenerator() {
  return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
}

function factorial(n){
  let f=1;
  for(let i=1;i<=n;i++) f*=i;
  return f;
}

function isPrime(n){
  if(n<2) return false;
  for(let i=2;i<n;i++) if(n%i===0) return false;
  return true;
}

function isEmpty(val){
  return val === null || val === undefined || val === "";
}

function sumOfArrayItems(arr){
  if(!arr.every(e=>typeof e==="number")) return "Error";
  return arr.reduce((a,b)=>a+b,0);
}

function average(arr){
  return sumOfArrayItems(arr)/arr.length;
}

function isValidVariable(name){
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name);
}

function sevenRandomNumbers(){
  let set = new Set();
  while(set.size<7){
    set.add(Math.floor(Math.random()*10));
  }
  return [...set];
}

myfullName();
console.log(fullName2("Adsaya","Shanmuganathan"));
console.log(addNumbers(10,20));
console.log(areaOfRectangle(5,4));
console.log(perimeterOfRectangle(5,4));
console.log(volumeOfRectPrism(2,3,4));
console.log(areaOfCircle(5));
console.log(circumOfCircle(5));
console.log(density(10,2));
console.log(speed(100,10));
console.log(weight(50));
console.log(convertCelsiusToFahrenheit(25));
console.log(bmi(70,1.75));
console.log(checkSeason("march"));
console.log(findMax(1,5,3));
console.log(solveLinEquation(2,3,4,5));
console.log(solveQuadratic(1,-3,2));
printArray([1,2,3]);
showDateTime();
console.log(swapValues(3,4));
console.log(reverseArray([1,2,3]));
console.log(capitalizeArray(["a","b","c"]));
console.log(addItem("apple"));
console.log(removeItem(0));
console.log(sumOfNumbers(5));
console.log(sumOfOdds(10));
console.log(sumOfEven(10));
evensAndOdds(10);
console.log(sum(1,2,3,4));
console.log(randomUserIp());
console.log(randomMacAddress());
console.log(randomHexaNumberGenerator());
console.log(userIdGenerator());
console.log(rgbColorGenerator());
console.log(factorial(5));
console.log(isPrime(7));
console.log(isEmpty(""));
console.log(sumOfArrayItems([1,2,3]));
console.log(average([1,2,3]));
console.log(isValidVariable("myVar"));
console.log(sevenRandomNumbers());