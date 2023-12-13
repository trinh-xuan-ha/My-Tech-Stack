}
// }
function checkPhoneError() {
    let phoneNumberInput = document.getElementById('phone_input');
    let phoneError = document.getElementById('phone_error');
    let continueButton = document.getElementById('continue_button');

    
    let phoneNumber = phoneNumberInput.value.trim();
    let phoneNumberPattern = /^[0-9]+$/;
    
    if (phoneNumber.length !== 11 || !phoneNumberPattern.test(phoneNumber)) {
      phoneError.textContent = 'Số điện thoại bắt buộc là số';
      phoneError.style.display = 'block';
      continueButton.disabled = true;
      continueButton.classList.remove('form_btn_green');
    } else {
      phoneError.style.display = 'none';
      continueButton.disabled = false;
      continueButton.classList.add('form_btn_green');
    }
  }
  
function checkDiemError() {
    let diemInput = document.getElementById('diem_input');
    let diemError = document.getElementById('diem_error');
    let continueButton = document.getElementById('continue_button');
    let diemPattern = /^[0-9]+$/;
    let checkDiem = diemInput.value.trim();
    if(checkDiem.length === 0 ||
        !diemPattern.test(checkDiem) ||
        checkDiem < 0 ||
        checkDiem > 10 ||
        checkDiem.length > 2 ||
        (checkDiem.length === 2 && checkDiem[0] === '1' && checkDiem[1] !== '0')) {
        diemError.textContent = 'điểm đầu vào lớn hơn 0 và nhỏ hơn 10.';
        diemError.style.display = 'block';
        continueButton.disabled = true;
        continueButton.classList.remove('form_btn_green')
    }
    else {
        diemError.style.display = 'none';
        continueButton.disabled = false;
        continueButton.classList.add('form_btn_green');

    }
}
function submitForm(event) {
  event.preventDefault();
  let studenIdInput = document.getElementById('student_input');
  let nameInput = document.getElementById('name_input');
  let dateInput = document.getElementById('date_input');
  let addressInput = document.getElementById('address_input');
  let phoneInput = document.getElementById('phone_input');
  let diemInput = document.getElementById('diem_input');
  let student = {
    studentId : studenIdInput.value.trim(),
    name: nameInput.value.trim(),
    date: dateInput.value,
    address: addressInput.value.trim(),
    phone: phoneInput.value.trim(),
    diem: parseFloat(diemInput.value.trim()),
  };
  fetch('http://localhost:3000/users'),
  {
    method: 'POST',
    headers: {
      'content-Type': 'aplication/json',
    },
    body:JSON.stringify
  }
}
