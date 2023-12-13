//check số điện thoại
// function checkPhoneError (phone) {
//     let errorMessages = [];
//     let phoneNumberPattern = /^[0-9]+$/;
//     if(!phoneNumberPattern.test(phone)) {
//         errorMessages.push('Số điện thoại bắt buộc phải là số');
//     }
//     return errorMessages;
// }
// function checkphone() {
//     let phoneNumber = document.getElementById('phoneid').value;
//     let phoneError = document.getElementById('phone_error');
//     let continueButton = document.getElementById('continue_button');
//     let errorMessages = checkPhoneError(phoneNumber);
//     if(errorMessages.length > 0) {
//         phoneError.innerHTML = errorMessages.join('<br>');
//         console.log(errorMessages)
//       //  phoneError.innerHTML = errorMessages;
//         phoneError.style.display = 'block';
//         continueButton.disabled = true;
//         continueButton.classList.remove('form_btn_green');
//     }
//     else
//     {
//         phoneError.style.display = 'none';
//         continueButton.disabled = false;
//         continueButton.classList.add('form_btn_green');
//     }
// }
function checkPhoneError() {
    let phoneNumberInput = document.getElementById('phoneid');
    let phoneError = document.getElementById('phone_error');
    let continueButton = document.getElementById('continue_button');
    
    let phoneNumber = phoneNumberInput.value.trim();
    let phoneNumberPattern = /^[0-9]+$/;
    
    if (phoneNumber.length === 0 || !phoneNumberPattern.test(phoneNumber)) {
      phoneError.textContent = 'Số điện thoại bắt buộc là số';
      phoneError.style.display = 'block';
      continueButton.disabled = true;
    } else {
      phoneError.style.display = 'none';
      continueButton.disabled = false;
    }
  }
  
  // Gắn kết sự kiện "oninput" cho ô số điện thoại
  let phoneNumberInput = document.getElementById('phoneid');
  phoneNumberInput.addEventListener('input', checkPhoneError);
