'use strict';

/* Task 1 */

const primaryButton = document.querySelector('.btn-primary');
const alert = document.querySelector('#alert');

primaryButton.onclick = function() {
    alert.classList.add('alert-primary');
    alert.textContent = 'A simple primary alert - check it out!';
}


/* Task 2 */

const secondaryButton = document.querySelector('.btn-secondary');

secondaryButton.addEventListener('click', function() {
    alert.classList.add('alert-primary');
    alert.textContent = 'A simple secondary alert - check it out!';
});


/* Task 3 */

const successButton = document.querySelector('.btn-success');

successButton.addEventListener('mouseover', function() {
    alert.classList.add('alert-success');
    alert.textContent = 'A simple success alert - check it out!';
});

successButton.addEventListener('mouseout', function() {
    alert.classList.remove('alert-success');
    alert.textContent = '';
});


/* Task 4 */

const dangerButton = document.querySelector('.btn-danger');

dangerButton.addEventListener('focus', function() {
    alert.classList.add('alert-danger');
    alert.textContent = 'A simple danger alert - check it out!';
});

dangerButton.addEventListener('focusout', function() {
    alert.classList.remove('alert-danger');
    alert.textContent = '';
});


/* Task 5 */

const darkButton = document.querySelector('.btn-dark');
const lightButton = document.querySelector('.btn-light');

function toggleMode () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkButton.classList.add('hide');
        lightButton.classList.remove('hide');
    }
    else {
        darkButton.classList.remove('hide');
        lightButton.classList.add('hide');
    }
}

darkButton.addEventListener('click', toggleMode); 
lightButton.addEventListener('click', toggleMode);


/* Task 6 */

const infoButton = document.querySelector('.btn-info');

infoButton.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();

    alert.classList.add('alert-info');
    alert.textContent = 'A simple info alert - check it out!';
    }
});


/* Task 7 */

const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    console.log(cards[i].querySelector('.card-title').textContent);
}


/* Task 8 */

for (let i = 0; i < cards.length; i++) {
    const button = cards[i].querySelector('.add-to-cart');

    button.addEventListener('click', function() {
        console.log(cards[i].querySelector('.card-title').textContent);
    });
}