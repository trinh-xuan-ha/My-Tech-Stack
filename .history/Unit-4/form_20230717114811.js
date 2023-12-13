
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
  let studentIdInput = document.getElementById('student_input');
  let nameInput = document.getElementById('name_input');
  let dateInput = document.getElementById('date_input').value;
  let formatterDate = formatDate(dateInput);
  let addressInput = document.getElementById('address_input');
  let phoneInput = document.getElementById('phone_input');
  let diemInput = document.getElementById('diem_input');
  let student = {
    studentId: studentIdInput.value.trim(),
    fullName: nameInput.value.trim(),
    date: formatterDate,
    address: addressInput.value.trim(),
    numberphone: phoneInput.value.trim(),
    point: diemInput.value.trim(),
  };
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('Sinh viên đã được thêm mới:', data);
      alert('Thêm mới sinh viên thành công!');
    })
    .catch(function (error) {
      console.error('Lỗi khi thêm mới sinh viên:', error);
      alert('Thêm mới sinh viên không thành công!');
    });
}
function formatDate(date) {
  let parts = date.split('-');
  let formattedParts = parts.reverse();
  let formattedDate = formattedParts.join('/');
  return formattedDate;
}
function checkFormFields() {
  let studentIdInput = document.getElementById('student_input');
  let nameInput = document.getElementById('name_input');
  let dateInput = document.getElementById('date_input');
  let addressInput = document.getElementById('address_input');
  let phoneInput = document.getElementById('phone_input');
  let diemInput = document.getElementById('diem_input');
  let errorMessage = document.getElementById('error_message');

  if (
    studentIdInput.value.trim() === '' ||
    nameInput.value.trim() === '' ||
    dateInput.value.trim() === '' ||
    addressInput.value.trim() === '' ||
    phoneInput.value.trim() === '' ||
    diemInput.value.trim() === ''
  ) {
    errorMessage.textContent = 'Vui lòng nhập đầy đủ thông tin';
    errorMessage.style.display = 'block';
    return false;
  }

  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
  return true;
}
Trong hàm checkFormFields(), sau khi hiển thị thông báo lỗi, chúng ta cũng cần thay đổi thuộc tính display của phần tử errorMessage để hiển thị nó trên giao diện. Nếu không có lỗi, chúng ta sẽ đặt display thành 'none' để ẩn thông báo lỗi.

Trong HTML, bạn đã thêm một phần tử span với id="error_message". Đảm bảo rằng phần tử này có CSS display: none; ban đầu để ẩn thông báo lỗi.

Khi người dùng ấn nút "Thêm mới", hàm submitForm() sẽ gọi checkFormFields() trước khi gửi dữ liệu lên server. Nếu có lỗi, thông báo sẽ hiển thị cho người dùng.







