let header = document.getElementsByTagName('header')[0];
let menuList = document.getElementsByClassName('list-menu')[0];
let dropdownMenu = document.querySelector('.dropdown_menu');
let btnClose = document.querySelector('.btn__close');
let divOverlay = document.querySelector('.div__overlay');
menuList.onclick = function() {
   dropdownMenu.classList.toggle('active');
   d.classList.add('div__overlay')
}
btnClose.onclick = function() {
    dropdownMenu.classList.remove('active');

}

