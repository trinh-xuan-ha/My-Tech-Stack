let api = 'http://localhost:3000/user';
function start() {
    getUser(function(courses) {
        renderUser(courses)
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
function renderUser(courses) {
    let listsinhvien = document.getElementById('bangsinhvien');
    let htmls = courses.map(function(course) {
        return
    });

}