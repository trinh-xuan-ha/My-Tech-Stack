const text = 'Welcome to GitHub!Let<br>\'s begin the adventure';
const typewriter = document.getElementById('text_welcome');
function type_add() {
    typewriter.innerHTML = '';
    typewriter.classList.add('typing_animation');
    let tempText = text.replace(/<br>/g, '<br/>'); // Thay thế <br> bằng <br/>
    let textArr = tempText.split('<br/>'); // Tách chuỗi thành mảng các dòng
    for(let i = 0;i < text.length; i++)
    {
        setTimeout(function() {
            typewriter.innerHTML += textArr[i] + '';
        }, i * 200)
        
    }
}
type_add();