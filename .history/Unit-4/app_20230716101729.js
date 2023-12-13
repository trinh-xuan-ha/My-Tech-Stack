let listsinhvien = document.getElementById('bangsinhvien');
let api = 'http://localhost:3000/user';
function start() {

}
start();
function getUser(callba) {
    fetch(api)
    .then(function(api) {
        return api.json();
    })
    .then(function(api) {

    })
}