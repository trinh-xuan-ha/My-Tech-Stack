//check số điện thoại
function checkPhoneError (phone) {
    let errorMessages = [];
    if(phone.includes('/^\d+$/')) {
        errorMessages.push('Số điện thoại bắt buộc phải là số');
    }
    return errorMessages;
}
function checkphone() {
    let phoneNumber = document.getElementById('phoneid').value;
    let phoneError = document.getElementById('phone_error');
    let continueButton = document.getElementById('continue_button');
    let errorMessages = checkPhoneError(phoneNumber);
    if(errorMessages.length > 0) {
        phoneError.innerHTML = errorMessages;
        phoneError.style.display = 'block';
        continueButton.disabled = true;
        continueButton.classList.remove
    }
}