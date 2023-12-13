let api = 'http://localhost:3000/user';
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
    let htmls = users.map(function(course) {
        return `
        <tr>
            <td>${course.fullName}</td>
            <td>${course.date}</td>
        </tr>
        
        `
    });

}