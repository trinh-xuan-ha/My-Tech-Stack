let header = document.getElementsByTagName('header')[0];
let menuList = document.getElementsByClassName('list-menu')[0];
let dropdownMenu = document.querySelector('.')
menuList.onclick = function() {
    menuList.style.color = 'black';
    menuList.style.display = 'block';
}
