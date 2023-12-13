const api = 'http://localhost:3000/users';
//lấy danh sách url của api để lấy danh sách sinh viên.
async function start() {
    try {
        const users = await getUser();
        renderUser(users);
    }catch(error) {
        console.error('không lấy được danh sách:', error);
    }
    
}
//hàm bất đồng bộ hiển thị danh sách sinh viên nên web sửa dụng await để đợi cho đến khi hàm getuser hoàn thành


start();
async function getUser() {
    const response = await fetch(api);
    const users = await response.json();
    return users;
}

/**hàm bất đồng bộ để lấy danh sách sinh viên từ api
 * await để đợi cho đến khi phản hồi từ api để được trả về và sau đó đổi thành đối tượng
 */
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