'use strict';

/* Task 1 */

let user = {};
user.name = "Іван"; 
user.surname ="Сміт";
user.name = "Петро"; 
delete user.name; 

console.log(user); 


/* Task 2 */

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
        return true;
}

let schedule = {};
alert(isEmpty(schedule)); // true
schedule["8:30"] = "Вставай";
alert(isEmpty(schedule)); // false


/* Task 3 */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0; 

for (let key in salaries) {
    sum += salaries[key]; 
}

console.log(sum);


/* Task 4 */

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}

let menu = {
  width: 200,
  height: 300,
  title: "Моє меню"
};

multiplyNumeric(menu);

console.log(menu);