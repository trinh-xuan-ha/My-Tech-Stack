const text = "Welcome to GitHub! Let's begin the adventure";
const typewriter = document.getElementById('text_welcome');

function type_add() {
  typewriter.innerHTML = '';
  typewriter.classList.add('typing_animation');

  let delay = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === "!") { // Kiểm tra ký tự là dấu chấm than (!)
      setTimeout(function() {
        typewriter.innerHTML += text[i] + "<br>";
      }, delay);
    } else {
      setTimeout(function() {
        typewriter.innerHTML += text[i];
      }, delay);
    }

    delay += 100; // Tăng thời gian chờ lên 200ms cho từng chữ cái
  }
}

type_add();
function togglePassword() {
  if(che)
}