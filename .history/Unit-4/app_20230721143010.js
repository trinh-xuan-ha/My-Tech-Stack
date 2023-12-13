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
 * await để đợi cho đến khi phản hồi từ api để được trả về và sau đó đổi thành đối tượng json response.json() 
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
        <button onclick="delete_user(${user.id})" > Xóa </button>
        `;
        listsinhvien.appendChild(tr);

    });
   
}
/** hiển thị danh sach sinh viên nên web
 * 
 */
function delete_user(userId) {
    if (confirm('Bạn có chắc muốn xóa sinh viên này không?')) {
      fetch(`http://localhost:3000/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(function (response) {
          if (response.ok) {
            alert('Xóa sinh viên thành công!');
            // Sau khi xóa thành công, bạn có thể làm mới trang hoặc tải lại dữ liệu.
            // Ví dụ: location.reload();
          } else {
            alert('Xóa sinh viên không thành công!');
          }
        })
        .catch(function (error) {
          console.error('Lỗi khi xóa sinh viên:', error);
          alert('Xóa sinh viên không thành công!');
        });
    }
  }
  function update_student(userId) {
  // Lấy thông tin sinh viên cần sửa từ API theo userId
  fetch(`http://localhost:3000/users/${userId}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (student) {
      // Hiển thị form để người dùng nhập thông tin mới
      let fullNameInput = document.getElementById('fullName_input');
      let dateInput = document.getElementById('date_input');
      let addressInput = document.getElementById('address_input');
      let phoneInput = document.getElementById('phone_input');
      let diemInput = document.getElementById('diem_input');

      fullNameInput.value = student.fullName;
      dateInput.value = student.date;
      addressInput.value = student.address;
      phoneInput.value = student.numberphone;
      diemInput.value = student.point;

      // Hiển thị dialog cho người dùng xác nhận cập nhật thông tin
      if (confirm('Bạn có chắc muốn cập nhật thông tin sinh viên này không?')) {
        let updatedStudent = {
          studentId: student.studentId,
          fullName: fullNameInput.value.trim(),
          date: dateInput.value,
          address: addressInput.value.trim(),
          numberphone: phoneInput.value.trim(),
          point: diemInput.value.trim(),
        };

        // Gửi request PUT hoặc PATCH đến API để cập nhật thông tin sinh viên
        fetch(`http://localhost:3000/users/${userId}`, {
          method: 'PUT', // hoặc 'PATCH' nếu bạn sử dụng method PATCH
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedStudent),
        })
          .then(function (response) {
            if (response.ok) {
              alert('Cập nhật thông tin sinh viên thành công!');
              // Sau khi cập nhật thành công, bạn có thể làm mới trang hoặc tải lại dữ liệu.
              // Ví dụ: location.reload();
            } else {
              alert('Cập nhật thông tin sinh viên không thành công!');
            }
          })
          .catch(function (error) {
            console.error('Lỗi khi cập nhật thông tin sinh viên:', error);
            alert('Cập nhật thông tin sinh viên không thành công!');
          });
      }
    })
    .catch(function (error) {
      console.error('Lỗi khi lấy thông tin sinh viên:', error);
      alert('Không thể lấy thông tin sinh viên để cập nhật!');
    });
}