let x;                
console.log(x);       
x = 10;                
console.log(x);


let num = 5;
console.log(num++); 
console.log(++num); 


let person = {
    name: "Adsaya",
    age: 25
  };
  person.age = 19;
  person.city = "Kilinochchi";
  console.log(person);



let a = 10;
let b = "10";
console.log(a == b);  
console.log(a === b); 


let num1 = 25;
let num2 = 5;
let result = num1 + num2;
console.log(result); 




let items = ["pen", "book"];
items.push("bag");
items.splice(1, 1);
console.log(items); 



let value = false;
console.log(value); 
value = true;
console.log(value);



let result1 = 20 + 5 * 2;
console.log(result1); 
let result2 = (20 + 5) * 2;
console.log(result2); 


let marks = null;
console.log(marks); 
marks= 70;
console.log(marks); 
marks= "Done";
console.log(marks); 



let student = {
name: "Alex",
subjects: ["Math", "Science"]
  };
 student.subjects.push("History");
 let secondSubject = student.subjects[1];
console.log(student);
console.log("Accessed subject:", secondSubject);




let c = true;
let d= false;
console.log(c && d); 
console.log(c || d); 
console.log(!c);     


 












let p = 10;
let q = p; 
b = 50;
console.log(p); 
console.log(q); 





let obj = {
  greet: function () {
      return "Hello";
  }
};
console.log(obj.greet()); 
obj.greet = function () {
  return "Hi";
};
console.log(obj.greet());



let originalArray = ["HTML", "CSS"];
let secondaryArray = originalArray;
secondaryArray.push("JavaScript");
console.log("Original:", originalArray);   
console.log("Secondary:", secondaryArray);


let dayNumber = 2;
switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day ");
}


let apple = "hello" * 2;
console.log(result); 
let price; 
let total = price + 10;
console.log(total);
let score = "A+" / 5;
console.log(score);



