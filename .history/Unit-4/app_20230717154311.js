const api = 'http://localhost:3000/users';
//lấy danh sách ur
async function start() {
    try {
        const users = await getUser();
        renderUser(users);
    }catch(error) {
        console.error('không lấy được danh sách:', error);
    }
    
}


start();
async function getUser() {
    const response = await fetch(api);
    const users = await response.json();
    return users;
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