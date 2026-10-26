'use strict';


/*Task 1 */

const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}

let j = 0;
do {
    console.log(fruits[j]);
    j++; 
}   while (j < fruits.length);


/*Task 2 */

const Numbs = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
    }
}


/*Task 3 */

const names = ['Batman'];

names.push('Joker'); 
console.log(names);

names.unshift('Bane');
console.log(names);

if (!names.includes('Alfred')) {
    names.push ('Alfred');
}
console.log(names);

if (names.includes('Batman')) {
    names.splice(names.indexOf('Batman'), 1);
}
console.log(names);


/*Task 4 */

function sumInput() {
    const numbers = [];

    while (true) {
        let input = prompt("Please enter a number:", "");
        if (input === null || input.trim() === "") {
            break;
        }

        let number = Number(input);

        if (!Number.isFinite(number)) {
            break;
        }

        numbers.push(number);
    }

    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }

    return sum; 
}

console.log(sumInput()); 


/*Task 5 */

const styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll'); 
console.log(styles);

styles[Math.floor(styles.length / 2)] = "Classics"; 
console.log(styles);

const firstStyle = styles.shift();
console.log(firstStyle);

styles.unshift('Rap', 'Reggae'); 
console.log(styles);