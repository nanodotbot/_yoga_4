// handling the contact form

const contact = document.getElementById('contact-button');

const contactName = document.getElementById('name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const message = document.getElementById('message');
const dataprotectionAgreement = document.getElementById('toggle-data-protection-agreement');
const feedback = document.getElementById('contact-feedback');

contact.onclick = e => {
    e.preventDefault();
    const contactNameValue = contactName.value;
    const emailValue = email.value;
    const telValue = tel.value;
    const messageValue = message.value;

    if(!dataprotectionAgreement.checked) {
        feedback.innerText = 'Please confirm that you have read the data protection disclaimer.' + '\n';
        return;
    }
    if (!contactNameValue) {
        feedback.innerText = 'Please provide a name. You can use an anonymous one, if you like.' + '\n';
        if (!messageValue) {
            feedback.innerText += 'Please leave message.' + '\n';
        }
        return;
    }
    if (!messageValue) {
        feedback.innerText = 'Please leave me message.' + '\n';
    }
    const sendMail = async () => {
        let data = {
            name: contactNameValue,
            mail: emailValue,
            phone: telValue,
            message: messageValue
        };
        data = JSON.stringify(data);
        let response = await fetch('./contact.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: data
        });
        if (response.ok) {
            response = await response.json();
            console.log(response);
            feedback.innerText = response.message;
        }
    }
    sendMail();    
};

contactName.oninput = () => feedback.innerText = '';
email.oninput = () => feedback.innerText = '';
tel.oninput = () => feedback.innerText = '';
message.oninput = () => feedback.innerText = '';


// data protection disclaimer modal

const dataprotection = document.getElementById('data-protection-button');
const dataprotectionModal = document.getElementById('modal-dataprotection');

dataprotection.onclick = e => {
    e.preventDefault();
    dataprotectionModal.classList.add('open')
};