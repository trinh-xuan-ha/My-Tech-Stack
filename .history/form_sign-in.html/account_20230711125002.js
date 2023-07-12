const text = "Welcome to GitHub!<br>Let's begin the adventure";
const typewriter = document.getElementById('text_welcome');

function type_add() {
  typewriter.innerHTML = '';
  typewriter.classList.add('typing_animation');

  let parts = text.split('<br>');
  let delay = 0;

  for (let i = 0; i < parts.length; i++) {
    let part = parts[i];

    setTimeout(function() {
      typewriter.innerHTML += part + '<br>';
    }, delay);

    delay += part.length * 200;
  }
}

type_add();