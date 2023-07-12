let a = 10;
let b = ++a;
let c = a++;
let d = ++b;
let e = a ** b;
console.log(a);//12
console.log(b);//12
console.log(c);//11
console.log(d);//12
console.log(e);
let firstName = 'hà';
let lastName = 'trinh';
console.log(firstName + ' '+ lastName);
/**
 * 0
 * false
 * '', ""
 * undefined
 * NaN
 * null
 * khi cover ->boolean -> false
 */
let check = function name(agy) {
    return agy;
} ;
if(check (null)) {
    console.log('dien kien dung');

}
else {
    console.log('dien kien sai')
}
//number type
let a1 = 1;
let b2 = 1.5;
let c3 = 1.9;
//string type
let fullName = 'Xuan \'Ha';
console.log(fullName);
//boolean type.   'true,false'
var isSuccess = true;
//undefined type. không gán chỉ định nghĩa.
var age;
//Null type. không có gì.
var isNull = null; //nothing. typeof Null = object.
//Symbol
var id = Symbol('id');//unique
var id1 = Symbol('id');
console.log(id === id1);
//function types.
let myFunction = function() {
    console.log('đây là function');
}
myFunction();
//Object types. + array.
let myObject = {
    myName : 'ha',
    age10 :19,
    adress : 'hung yen',
    yl: myFunction()

}
console.log(myObject);
 let myArray = [1,2,3,4,5,6,7,8,9,10];
 console.log(typeof myArray);
 console.log('check : ' + (myArray || myFunction));
 console.log(document.all);
 

//logical if.else
let logical = NaN || '' || '' || '' || null; //&& nhaanj 6 giá trị của falsy không có nhận giá trị cuối.
// `||` nếu trong các giá trị không có giá trị falsy thì sẽ nhận giá trị đầu, không nhận falsy nếu tất cả là falsy thì sẽ trả về giá trị cuối 
console.log('logical : ', logical);
// if(logical) {
//     console.log('dieu kien dung');
// }
// else
// {
//     console.log('dieu kien sai');
// }
function f8() {
    console.log('Đây là function!')
}
f8();
let call = function () {
    let string = '';
    let check = arguments.length;
    for(let i of arguments)
    {
    
        string += `${i} - `;
        
    }
    console.log(string);
}
console.log(call([4,5,6,7,8,9,10], 'dfsdfs'));
console.log(call(1,2,3,4,5,6,7,'hahahahaha','fsdf',6));
// let call = function () {
//     let string = Array.from(arguments).join('-');
//     console.log(string);
// }

// console.log(call([4,5,6,7,8,9,10], 'dfsdfs'));
// console.log(call(1,2,3,4,5,6,7,'hahahahaha','fsdf',6));
//var isConfim = confirm('Bạn có chắc không?');
function checkConfim(isConfim) {
    if(isConfim === true)
    {
        alert('ok');
    }
    else {
        console.log("khoomg?")
    }
}
//checkConfim(isConfim);
function cong(a,b) {
    return a.toString() + b.toString();
}
console.log(cong(true, false))
function showMessage(x,y) {
    console.log('đây là message bố.');
    function showMessage2(a,b) {
        return a + b;
    }
    console.log(showMessage2(x,y));
    return (x + y) * 2;


}
let haha =  showMessage(2,4);
console.log(haha); 
let myObject1 = {
    tuoi: 30,
    myFunction1: function(a, b) {
        console.log('tong : ', (a+b));
    }
}
myObject1.myFunction1(3,6);
console.log(myObject1);
// console.log(myObject1.myFunction1(6,7));
//làm việc với chuỗi.
/**
 * indexOf--tìm kiếm giá trị nằm ở vị trí bao nhiều từ trái - phải , hỗ trợ giá trị 2
 * lastIndexOf -- tìm kiếm giá trị nằm ở vị trí nào từ phải sang trái, hỗ trợ giá trị 2
 * search -- tìm kiếm theo biểu thức chính quy
 * slice -- cắt trong chuỗi 2 giá trị truyền vào star, kết thúc
 * 
 */
let myString = 'Trinh xuan ha';
console.log(myString.indexOf('a'));
console.log(myString.indexOf('a', 9));
console.log(myString.lastIndexOf('a'));
console.log(myString.slice(4, 7));
console.log(myString.replace(/a/g, 'A'));
console.log(myString.toUpperCase());



