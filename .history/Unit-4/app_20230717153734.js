const api = 'http://localhost:3000/users';
function start() {
    try {
        const users = await getUser();
        renderUser(users);
    }catch(error) {
        console.error
    }
    
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
        tr.innerHTML = `
        <td>${user.studentId}</td>
        <td>${user.fullName}</td>
        <td>${user.date}</td>
        <td>${user.address}</td>
        <td>${user.numberphone}</td>
        <td>${user.point}</td>
        `;
        listsinhvien.appendChild(tr);

    })
   
}