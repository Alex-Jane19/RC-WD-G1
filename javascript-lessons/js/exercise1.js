'use strict';

let message1 = 'Hello';
let message2 = 'JavaScript';
alert(message1 + ' ' + message2 + '!');

let x = Number(prompt('Enter the first number'));
let y = Number(prompt('Enter the second number'));
alert(x + y);

let number = Number(prompt('Guess the number'));
if (number === 3) {
    alert('Congratulations, you did it!');
} else if (number > 3) {
    alert('The number is too big');
} else {
    alert('The number is too small');
}

let day = prompt('Enter the day of the week');
if (day === 'Monday' || day === 'Понеділок') {
    alert('Start of the work week!');
} else if (day === 'Friday' || day === 'П’ятниця') {
    alert('End of the work week!');
} else if (day === 'Saturday' || day === 'Sunday' || day === 'Субота' || day === 'Неділя') {
    alert('It is the weekend!');
} else {
    alert('It is a regular workday.');
}

/* Second version of the code using switch

let day = prompt('Enter the day of the week # 2');
switch (day) {
    case 'Monday':
    case 'Понеділок':
        alert('Start of the work week!');
        break;

    case 'Friday':
    case 'П’ятниця':
        alert('End of the work week!');
        break;

    case 'Saturday':
    case 'Sunday':
    case 'Субота':
    case 'Неділя':
        alert('It is the weekend!');
        break;

    default:
        alert('It is a regular workday.');
}
*/

let score = Number(prompt('Enter your score'));
let grade; 

if (score < 50) {
    grade = 'F';
} else if (score < 70) {
    grade = 'D';
} else if (score < 80) {
    grade = 'C';
} else if (score < 90) {
    grade = 'B';
} else {
    grade = 'A';
}
alert('Your grade is: ' + grade);
