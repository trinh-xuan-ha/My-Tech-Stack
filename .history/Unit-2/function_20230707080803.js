//function Declaration: khai báo thông qua từ khoas`function`.
function names() {
    console.log('Trịnh xuân hà');

}
names();
//function Expression: khai báo hàm bằng cách gán một biểu thức hàm cho một biến.
const age = function(age) {
    console.log(typeof age);
}
let agenumber = 30;
agenumber = '30';
age(agenumber)
//arrow function: khai báo hàm sử dụng cú pháp mũi tên(=>).
const school = (a,b) => {
    console.log(a+b);
}
school(1,'ha');
school(1,5);
const schools = () => {
    console.log('Hello');
}
school(1,'ha');
school(1,5);
schools();
//Immediately In