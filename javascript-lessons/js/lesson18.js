'use strict';

class Calculator {
    constructor() {
        this.result = 0;
    }

add(a, b) {
    if (b === undefined) {
        b = a;
        a = this.result;
    }

this.result = a + b;
return this.result;
}

subtract(a, b) {
    if (b === undefined) {
        b = a; 
        a = this.result;
    }

this.result = a - b;
return this.result;
}

multiply(a, b) {
    if (b === undefined) {
        b = a; 
        a = this.result;
    }

this.result = a * b; 
return this.result; 
}

divide (a, b) {
    if (b === undefined) {
        b = a; 
        a = this.result; 
    }

this.result = a / b; 
return this.result; 
}

displayResult() {
    console.log(this.result);
}
}


const calculator = new Calculator(); 


// Checking the working methods

calculator.add(7,8); 
calculator.displayResult(); // 15

calculator.subtract(9); 
calculator.displayResult(); // 6

calculator.multiply(12); 
calculator.displayResult(); // 72

calculator.divide(10); 
calculator.displayResult(); // 7.2

