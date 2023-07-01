let header = document.getElementsByTagName('header')[0];
let menuList = document.getElementsByClassName('list-menu')[0];
menuList.onclick = function() {
    console.log(header.clientHeight);
}

