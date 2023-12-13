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
    let htmls = users.map(function(user) {
        return `
        <tr>
            <td>${user.id}</td>
            <td>${user.fullName}</td>
            <td>${user.date}</td>
            <td>${user.address}</td>
            <td>${user.numberphone}</td>
            <td>${user.point}</td>
        </tr>
        
        `;
    });
    listsinhvien.innerHTML = htmls.join('');
}