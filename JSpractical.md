# JavaScript  Practical Worksheet 

---

## Q1: Undefined Variable  
You create a variable but don’t assign a value  

**Tasks:**
1. Declare the variable  
2. Write what it stores  
3. Assign a number  
4. Write new output  

**Answer**
```js
let x;                
console.log(x);       
x = 10;                
console.log(x);
```

---

## Q2: Increment  

**Step 1: Declare**
```js
let num = 5;
```

**Tasks:**
1. Apply `num++`  
2. Write output  
3. Apply `++num`  
4. Write output  


**Answer**
```js
let num = 5;
console.log(num++); 
console.log(++num); 
```
---

## Q3: Object Update  

Store and update data  

**Tasks:**
1. Create an object with name and age  
2. Change age  
3. Add city  
4. Write final object  

**Answer**

let person = {
    name: "Adsaya",
    age: 25
  };
  person.age = 19;
  person.city = "Kilinochchi";
  console.log(person);
```
---

## Q4: Comparison  

**Step 1: Declare**
```js
let a = 10;
let b = "10";
```

**Tasks:**
1. Write result of `a == b`  
2. Write result of `a === b`  

**Answer**
```js
let a = 10;
let b = "10";
console.log(a == b);  
console.log(a === b); 
```
---

## Q5: Number Addition  

Work with numbers  

**Tasks:**
1. Store 25 and 5  
2. Add them  
3. Write output  

**Answer**
```js
let num1 = 25;
let num2 = 5;
let result = num1 + num2;
console.log(result); 
---

## Q6: Array Update  

**Step 1: Declare**
```js
let items = ["pen", "book"];
```

**Tasks:**
1. Add `"bag"`  
2. Remove `"book"`  
3. Write final array  

**Answer**
```js
let items = ["pen", "book"];
items.push("bag");
items.splice(1, 1);
console.log(items); 
```
---

## Q7: Boolean Value  

Track true/false  

**Tasks:**
1. Store `false`  
2. Change to `true`  
3. Write both outputs  

**Answer**
```js
let value = false;
console.log(value); 
value = true;
console.log(value);
```
---

## Q8: Arithmetic Order  

**Tasks:**
1. Write calculation `20 + 5 × 2`  
2. Write output  
3. Change so addition happens first  
4. Write new output  

**Answer**
```js
let result1 = 20 + 5 * 2;
console.log(result1); 
let result2 = (20 + 5) * 2;
console.log(result2); 
```
---

## Q9: Null Value  

Store empty result  

**Tasks:**
1. Create variable with `null`  
2. Change it to a number  
3. Change it to a string  
4. Write outputs  

**Answer**
```js
let marks = null;
console.log(marks); 
marks= 70;
console.log(marks); 
marks= "hello";
console.log(marks); 
```
---

## Q10: Nested Data  

Object with array  

**Tasks:**
1. Create object with name and subjects array  
2. Add one subject  
3. Access one subject  
4. Write output  


**Answer**
```js
let student = {
name: "Alex",
subjects: ["Math", "Science"]
  };
 student.subjects.push("History");
 let secondSubject = student.subjects[1];
console.log(student);
console.log("Accessed subject:", secondSubject);
```
---

## Q11: Logical Operators  

**Step 1: Declare**
```js
let a = true;
let b = false;
```

**Tasks:**
- `a && b`  
- `a || b`  
- `!a`  

**Answer**
```js
let c = true;
let d= false;
console.log(c && d); 
console.log(c || d); 
console.log(!c);     
```
---

## Q12: String + Number  

Mix data types  

**Tasks:**
1. Store `"25"` and `5`  
2. Add them  
3. Write output  
4. Change code so output becomes `30`  


**Answer**

---

## Q13: Primitive Copy  

**Step 1: Declare**
```js
let a = 10;
let b = a;
```

**Tasks:**
1. Change `b` to 50  
2. Write `a`  
3. Write `b` 


**Answer**
```js
let p = 10;
let q = p; 
b = 50;
console.log(p); 
console.log(q); 
```

---

## Q14: Pass or Fail  

Use condition  

**Tasks:**
1. Store marks  
2. Write if/else  
3. Write output  

**Answer**
```js
let marks = 82;
if (marks >= 50) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}
```
---

## Q15: Object Method  

Function inside object  

**Tasks:**
1. Create object with a function returning `"Hello"`  
2. Call it  
3. Change to `"Hi"`  
4. Call again  

**Answer**
```js
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
```
---

## Q16: Switch Statement  

**Tasks:**
1. Store a number (1–3)  
2. Write switch for days  
3. Write output  


**Answer**
```js
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
```
---

## Q17: Invalid Calculation (NaN)  

Wrong math operation  

**Tasks:**
1. Multiply `"hello"` with 2  
2. Write output  
3. Try another similar example  


**Answer**
```js
let result = "hello" * 2;
console.log(result); 
let price; 
let total = price + 10;
console.log(total);
let score = "A+" / 5;
console.log(score);
---
```

## Q18: Age Check (Ternary)  

Quick decision  

**Tasks:**
1. Store age  
2. Use ternary  
3. Write output  


**Answer**

---

## Q19: Nested Condition  

**Tasks:**
1. Store marks  
2. Write:
   - ≥ 75 → A  
   - ≥ 50 → B  
   - else → C  
3. Write output  

**Answer**

---

## Q20: If Condition  

**Tasks:**
1. Store marks  
2. Write:
   - ≥ 50 → Pass  
   - else → Fail  
3. Write output  


**Answer**
```js
let marks = 65;
if (marks>=50) {
   console.log("pass");
} else { 
   console.log("fail")
}
```
---

## Q21: Array Method  

Work with list  

**Tasks:**
1. Create array with two fruits  
2. Add one using method  
3. Remove first item  
4. Write final array  



**Answer**
---

## Q22: Object Reference  

**Step 1: Declare**
```js
let obj1 = { value: 5 };
let obj2 = obj1;
```

**Tasks:**
1. Change value  
2. Write both outputs  


**Answer**

---

## Q23: Symbol Values  

Unique values  

**Tasks:**
1. Create two symbols with same description  
2. Compare them  
3. Write result  

**Answer**

---

## Q24: BigInt  

Large numbers  

**Tasks:**
1. Create a BigInt value  
2. Add another BigInt  
3. Write output  

**Answer**

---

## Q25: Nested Array  

Multi-level list  

**Tasks:**
1. Create nested array  
2. Access one inner value  
3. Access another value  
4. Write outputs  

**Answer**

---

## Q26: Logical Condition  

Multiple conditions  

**Tasks:**
1. Store age and ID status  
2. Allow entry only if both conditions are true  
3. Write output  

---

## Q27: Compare Objects  

Check equality  

**Tasks:**
1. Create two objects with same values  
2. Compare them  
3. Write result  

**Answer**


---

## Q28: Temperature Check  

Simple condition  

**Tasks:**
1. Store temperature  
2. Write if/else  
3. Write output  

**Answer**


---

## Q29: Array Reference  

Shared data  

**Tasks:**
1. Create array  
2. Copy it  
3. Add value to second array  
4. Write both arrays  


**Answer**
```js
let originalArray = ["HTML", "CSS"];
let secondaryArray = originalArray;
secondaryArray.push("JavaScript");
console.log("Original:", originalArray);   
console.log("Secondary:", secondaryArray);
```
---

## Q30: String Formatting  

Work with text  

**Tasks:**
1. Store `"  kumar  "`  
2. Remove spaces  
3. Convert to uppercase  
4. Write final output  


**Answer**
```js
let name = "  kumar  ";
let trimmedName = name.trim();
let finalOutput = trimmedName.toUpperCase();
console.log(finalOutput); 
```
---
