let header = document.getElementsByTagName('header')[0];
let menuList = document.getElementsByClassName('list-menu')[0];
let dropdownMenu = document.querySelector('.dropdown_menu');
let btnClose = document.querySelector('.btn__close');
menuList.onclick = function() {
   dropdownMenu.classList.toggle('active');
}
btnClose.onclick = fu

