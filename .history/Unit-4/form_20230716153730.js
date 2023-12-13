function validatePhoneNumber() {
    const phoneInput = document.getElementById('phoneid');
    const phoneError = document.getElementById('phoneError');

    const phoneNumber = phoneInput.value;
    const phoneNumberPattern = /^\d+$/; // Kiểm tra xem chuỗi chỉ chứa các chữ số

    if (!phoneNumberPattern.test(phoneNumber)) {
        phoneError.textContent = 'Số điện thoại bắt buộc là số.';
        phoneError.style.display = 'block';
        return false;
    } else {
        phoneError.style.display = 'none';
        return true;
    }
}
validatePhoneNumber();