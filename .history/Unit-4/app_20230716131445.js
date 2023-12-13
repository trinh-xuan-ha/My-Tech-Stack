let api = 'http://localhost:3000/users';
function start() {
    getUser(function(users) {
        renderUser(users)
    });

}
start();
function getUser(callback) {
    fetch(api)
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}
function renderUser(users) {
    let listsinhvien = document.getElementById('bangsinhvien');
    users.forEach(function(user) {
        let tr = document.createElement('tr');
        

    })
   
}