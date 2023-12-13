//check số điện thoại
function checkPhoneError (phone) {
    let errorMessages = [];
    if(phone.includes('/^\d+$/')) {
        errorMessages.push('Số điện thoại bắt buộc phải là số');
    }
    return errorMessages;
}
function