let listsinhvien = document.getElementById('bangsinhvien');
let api = 'http://localhost:3000/user';
function start() {
    getUser(function(courses) {
        
    })

}
start();
function getUser(callback) {
    fetch(api)
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}