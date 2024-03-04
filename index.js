// modals

const openModal1 = document.getElementById('open-modal-1');
const modal1 = document.getElementById('modal-1');

const openModal2 = document.getElementById('open-modal-2');
const modal2 = document.getElementById('modal-2');

openModal1.onclick = () => {
    modal1.classList.add('open');
}
openModal2.onclick = () => {
    modal2.classList.add('open');
}

// textarea

const send = document.getElementById('send');
const message = document.getElementById('message');
const messageFeedback = document.getElementById('message-feedback');

send.onclick = e => {
    e.preventDefault();
    messageFeedback.innerText = message.value;
}
// 
// login form

const loginButton = document.getElementById('login-button');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginFeedback = document.getElementById('login-feedback');

loginButton.onclick = e => {
    e.preventDefault();
    if (!username.value) {
        loginFeedback.innerText = 'Bitte Nutzernamen und Passwort eingeben';
        username.classList.add('warning');
    }
    if (!password.value) {
        loginFeedback.innerText = 'Bitte Nutzernamen und Passwort eingeben';
        password.classList.add('warning');
    }
    if (username.value && password.value) {
        const length = password.value.length;
        loginFeedback.innerText = username.value + ' ' + '•'.repeat(length);
    }
}
username.oninput = () => {
    loginFeedback.innerText = '';
    username.classList.remove('warning');
}
password.oninput = () => {
    loginFeedback.innerText = '';
    password.classList.remove('warning');
}

