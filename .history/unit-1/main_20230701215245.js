let header = document.getElementsByTagName('header')[0];
let menuList = document.getElementsByClassName('list-menu')[0];
let dropdownMobile = document.querySelector('.dropdown_mobile');
let btnClose = document.querySelector('.btn__close');
let divOverlay = document.querySelector('.div__overlay');


menuList.onclick = function() {
    dropdownMobile.classList.toggle('active');
   divOverlay.style.display = 'block';
//    btnClose.style.display = 'block';

}
btnClose.onclick = function() {
    dropdownMobile.classList.remove('active');
    divOverlay.style.display = 'none';
    // btnClose.style.display = 'none';

}
divOverlay.onclick = function() {
    dropdownMobile.classList.remove('active');
    divOverlay.style.display = 'none';
    // btnClose.style.display = 'none';
}
let navMenu = Document.querySelector('.nav__menu');
    navMenu.onclick = function() {
    dropdownMobile.classList.remove('active');
}



