'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const loginModal = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');

    const closeBtn = document.getElementById('closeBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    const welcomeMessage = document.getElementById('welcomeMessage');

    // Check if user is already logged in

    if (localStorage.getItem('isLoggedIn') === 'true' || sessionStorage.getItem('isLoggedIn') === 'true') {
        welcomeMessage.style.display = 'block';
    } else {
        loginModal.classList.add('show');
    }

    // Close modal window

    function closeModal() {
        loginModal.classList.remove('show');
    }

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    // Login form submission

    loginForm.addEventListener('submit', function (event) {

        event.preventDefault();

        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;

        const remember = document.getElementById('remember').checked;

        if (login.trim() !== '' && password.trim() !== '') {

            if (remember) {
                localStorage.setItem('isLoggedIn', 'true');
            } else {
                sessionStorage.setItem('isLoggedIn', 'true');
            }

            loginModal.classList.remove('show');
            welcomeMessage.style.display = 'block';
        }

    });

});
