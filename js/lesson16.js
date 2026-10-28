'use strict';

const classes = ['first', 'second', 'third', 'fourth'];


/* Paragraphs */

const p1 = document.querySelector('#p1'); 
p1.style.backgroundColor = 'gold'; 

const p2 = document.querySelector('#p2'); 
p2.style.backgroundColor = 'gold'; 
p2.style.color = 'blue';
p2.style.fontSize = '2rem';

const p3 = document.querySelector('#p3'); 
p3.classList.add('third'); 

const p4 = document.querySelector('#p4'); 
p4.classList.add('fourth', 'border');


/* Buttons */

const button1 = document.querySelector('#p1 button'); 
button1.style.backgroundColor = 'gold';
button1.style.color = 'blue';

const button2 = document.querySelector('#p2 button'); 
button2.addEventListener('click', function() {
    p1.style.display = "none";
});

const button3 = document.querySelector('#p3 button'); 
button3.addEventListener('click', function() {
    p1.style.display = '';
});

const button4 = document.querySelector('#p4 button'); 
button4.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});