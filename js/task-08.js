  
const formElement = document.querySelector('.login-form');


formElement.addEventListener('submit', submitHandler);

const profile = {};

function submitHandler(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email;
    const password = event.currentTarget.elements.password;

    if (email.value === '' || password.value === '') {
        event.preventDefault();
        alert('Всі поля повинні бути заповнені!!!');

    }
        else {
            profile.email = email.value;
            profile.password = password.value;

    }
    console.log(profile);
}
