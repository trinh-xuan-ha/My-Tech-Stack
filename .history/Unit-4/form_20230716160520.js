//check số điện thoại
function checkPhoneError(phone) {
    let errorMessages = [];
    let phoneNumberPattern = /^\d+$/;
    if (!phoneNumberPattern.test(phone)) {
        errorMessages.push('Số điện thoại bắt buộc phải là số');
    }
    return errorMessages;
}

function checkPhone() {
    let phoneNumber = document.getElementById('phoneid').value;
    let phoneError = document.getElementById('phone_error');
    let continueButton = document.getElementById('continue_button');
    let errorMessages = checkPhoneError(phoneNumber);

    if (errorMessages.length > 0) {
        phoneError.textContent = errorMessages.join(' ');
        phoneError.style.display = 'block';
        continueButton.disabled = true;
        continueButton.classList.remove('form_btn_green');
    } else {
        phoneError.style.display = 'none';
        continueButton.disabled = false;
        continueButton.classList.add('form_btn_green');
    }
}