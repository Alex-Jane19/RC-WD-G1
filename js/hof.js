'use strict';

//* Task 1. Higher-Order Functions

// Addition function
function sum(n1, n2) {
    return n1 + n2;
}

// Multiplication function
function multiply(n1, n2) {
    return n1 * n2;
}

// Higher-Order Function
function calculate(operation, initialValue, numbers) {
    let result = initialValue;

    for (const number of numbers) {
        result = operation(result, number);
    }

    return result;
}

console.log(calculate(sum, 0, [1, 2, 4])); // 7
console.log(calculate(multiply, 1, [1, 2, 4])); // 8


//* Task 2. Array map() method

let student_names = ["Wick", "Malcolm", "Smith"]

student_names.map((name, index, array) => {
    console.log(`name: ${name} | index: ${index} | array: [ "${array.join('", "')}" ]`);
});


//* Task 3. Calculate students' percentages using map()

let students_information = [
    { "name": "Wick", "degree": 375 },
    { "name": "Malcolm", "degree": 405 },
    { "name": "Smith", "degree": 453 }
];

const maxDegree = 600; 

const students_percentage = students_information.map((student) => {
    return {
        name: student.name,
        degree: student.degree,
        percentage: (student.degree / maxDegree) * 100
    }; 
}); 

console.log(students_percentage); 