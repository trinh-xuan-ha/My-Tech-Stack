let api = 'http://localhost:3000/user';
function start() {
    getUser(function() {
        renderUser()
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
function renderUser() {
    let listsinhvien = document.getElementById('bangsinhvien');
    let htmls = .map(function(course) {
        return `
        <tr>
            <td>${course.fullName}</td>
            <td>${course.date}</td>
        </tr>
        
        `
    });

}