const text = 'Welcome to GitHub!Let<br>\'s begin the adventure';
const typewriter = document.getElementById('text_welcome');
function type_add() {
    typewriter.innerHTML='';
    typewriter.classList.add('typing_animation');
    for(let i = 0;i < text.length; i++)
    {
        setTimeout(function() {
            ty.innerHTML += text[i];
        }, i * 200)
        
    }
}
type_add();