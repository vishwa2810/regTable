let userDetials = {};
let form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    if (!validateInput()) {
        e.preventDefault();
    } else {
      e.preventDefault();
        openNewPage();
    }
});

function validateInput() {
    let name = document.querySelector('#name');
    let age = document.querySelector('#age');
    let gender = document.querySelector('#gender');
    let email = document.querySelector('#email');
    let phone = document.querySelector('#phone');
    let success = true;

    let nameVal = name.value.trim();
    let ageVal = age.value.trim();
    let genderVal = gender.value.trim();
    let emailVal = email.value.trim();
    let phoneVal = phone.value.trim();

    if (nameVal === '') {
        setError(name, 'Username is required');
        success = false;
    } else {
        setSuccess(name);
    }

    if (ageVal === '') {
        setError(age, 'Age is required');
        success = false;
    } else {
        setSuccess(age);
    }

    if (emailVal === '') {
        setError(email, 'Email is required');
        success = false;
    } else {
        setSuccess(email);
    }

    if (phoneVal === '') {
        setError(phone, 'Contact Number is required');
        success = false;
    } else {
        setSuccess(phone);
    }

    userDetials = {
        name: nameVal,
        age: ageVal,
        gender: genderVal,
        email: emailVal,
        phone: phoneVal
    };

    if (success) {
        let existingData = localStorage.getItem('userDetail');
        let userArry = existingData ? JSON.parse(existingData) : [];

        userArry.push(userDetials);

        let userDetailsString = JSON.stringify(userArry);

        localStorage.setItem('userDetail', userDetailsString);
    }

    return success;
}

function openNewPage() {
    var newPageUrl = './index.html';
    window.location.href = newPageUrl;
}

function setError(element, message) {
    let form = element.parentElement;
    let errorElement = form.querySelector('.error');

    errorElement.innerText = message;
    form.classList.add('error');
    form.classList.remove('success');
}

function setSuccess(element) {
    let form = element.parentElement;
    let errorElement = form.querySelector('.error');

    errorElement.innerText = '';
    form.classList.add('success');
    form.classList.remove('error');
}
