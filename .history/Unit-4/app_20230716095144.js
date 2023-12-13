/**
 * "- Doc: Tóm tắt nội dung các thành phần đã học
- Example: Sử dụng API https://tablebackend.com/ tạo một trang quản lý sinh viên, với form nhập dữ liệu bao gồm các thông tin: Họ tên sinh viên, Mã sinh viên, Ngày sinh, Quê quán, Số điện thoại, điểm đầu vào. Các thông tin này đều là bắt buộc. 
Validate các dữ liệu nhập vào:
- Họ tên không quán 200 ký tự
- ngày tháng năm sinh phải đúng định dạng ngày, ngày sinh phải trong quá khứ
- quê quán không quá 200 ký tự
- số điện thoại đúng định dạng (11 ký tự, là số, bắt đầu là 0)
- điểm đầu vào phải là số không âm từ 0 -> 10

Note: sử dụng fetch method là POST để tạo mới sinh"
 */
// let postApi = 'http://localhost:3000/user';

// fetch(postApi).then(function(response) {
//     return response.json();
// })
// .then(function(comments) {
//     console.log(comments);
// })
// fetch(postApi).forEach(function (phantu, element) {
//     console.log(element, phantu);
// })
async function load() {
    let data = await fetch('http://localhost:3000/user');
    let json = await data.json();
    console.log(typeof json);
    let listHocSinh = json.user;
    // console.log(listHocSinh);
    let bangHocSinh = document.getElementById('banghocsinh');
    for(let i = 0; i < listHocSinh.length; i++) {
        let tr = document.createElement('tr');
        bangHocSinh.append(tr);

        let td0 = document.createElement('td');
        tr.append(td0);
        td1.innerText = listHocSinh[i]['  let td1 = document.createElement('td');
        tr.append(td1);
        td1.innerText = listHocSinh[i]['Họ Và Tên'];'];

        let td1 = document.createElement('td');
        tr.append(td1);
        td1.innerText = listHocSinh[i]['Họ Và Tên'];

        let td2 = document.createElement('td');
        tr.append(td2);
        td2.innerText = listHocSinh[i]['Ngày sinh']

        let td3 = document.createElement('td');
        tr.append(td3);
        td3.innerText = listHocSinh[i]['Quê quán']

        let td4 = document.createElement('td');
        tr.append(td4);
        let sdt = listHocSinh[i]['Số Điện Thoại'];
        td4.innerText = '0' + sdt;

        let td5 = document.createElement('td');
        tr.append(td5);
        td5.innerText = listHocSinh[i]['Điểm đầu vào'];
        
    }
}
load();