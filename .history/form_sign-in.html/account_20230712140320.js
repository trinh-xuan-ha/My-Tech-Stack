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
function checkPassword() {
  let password = document.getElementsByTagName('password_input').value;
  let passwordError = document.getElementsByTagName('password_error');
}

