const text = "Welcome to GitHub! Let's begin the adventure";
const typewriter = document.getElementById('text_welcome');

function type_add() {
  typewriter.innerHTML = '';
  typewriter.classList.add('typing_animation');

  let delay = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "!") {
      setTimeout(function() {
        typewriter.innerHTML += text[i] + "<br>";
      }, delay);
    } else {
      setTimeout(function() {
        typewriter.innerHTML += text[i];
      }, delay);
    }

    delay += 100;
  }
}


type_add();
//change type password <-> text
let check = document.getElementById('check');
let passwordInput = document.getElementById('password_input');
check.addEventListener('change', togglePassword);

function togglePassword() {
  if (check.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
//in người dùng nhập
 function checkInput() {
  let gmail = document.getElementById('gmail_input').value;
  let password = document.getElementById('password_input').value;
  let userName = document.getElementById('username_input').value;
  document.write('<p>Gmail : '+gmail + '</p>');
  document.write('<p>Password : '+password + '</p>');
  document.write('<p>UserName : '+userName + '</p>');
 }
 //checkpassword.
 function checkPasswordError(password) {
  let errorMessages = [];
  if(password.includes(' ')) {
    errorMessages.push('Password cannot contain spaces.');
  }
  if(password.length < 8) {
    errorMessages.push('Minimum password length 8 characters.')
  }
  return errorMessages;
 }
function checkPassword() {
  let password = document.getElementById('password_input').value;
  let passwordError = document.getElementById('password_error');
  let continueButton = document.getElementById('continue_button');
  let er
  if(password.includes(' ')) {
    passwordError.style.display = 'block';
    continueButton.disabled = true;
  }
  else {
    passwordError.style.display = 'none';
    continueButton.disabled = false;
  }
}

