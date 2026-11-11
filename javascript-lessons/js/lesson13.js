'use strict';

function checkAge(age) {
    return age > 18 ? true : confirm('Do you have permission from your parents?');
}

/* Alternative version of the function using OR operator

function checkAge (age) {
    return (age > 18) || confirm('Do you have permission from your parents?');
}
*/

console.log(checkAge(20)); // true
console.log(checkAge(18)); // false


/*Task 2*/

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

/* Alternative version of the function using ternary operator

function min(a, b) {
    return (a < b) ? a : b;
}
*/

console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1


/*Task 3*/

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result = result * x;
    }
    return result;
}

    let x = Number(prompt('Enter the base number'));
    let n = Number(prompt('Enter the exponent'));

    if (n < 0 || !Number.isInteger(n)) {
        alert('Please enter a valid positive integer for the exponent.');
    } else {
        alert(pow(x, n));  
    }  


/*Task 4*/

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Ви згодні?",
  () => alert("Ви погодилися."),
  () => alert("Ви скасували виконання.")
);