let api = 'http://localhost:3000/user';
function start() {
    getUser(function(usser) {
        renderUser(usser)
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
function renderUser(usser) {
    let listsinhvien = document.getElementById('bangsinhvien');
    let htmls = usser.map(function() {
        return `
        <tr>
            <td>${course.fullName}</td>
            <td>${course.date}</td>
        </tr>
        
        `
    });

}