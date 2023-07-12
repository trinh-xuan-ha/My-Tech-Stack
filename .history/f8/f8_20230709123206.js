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
        // if(i != check)
        // {
        //     string += `${i} -- `;
        // }
        // else
        // {
        //     string += `${i}`;
        // }
        string += `${i} - `
        
    }
    console.log(string);
}
console.log(call([4,5,6,7,8,9,10], 'dfsdfs'));
console.log(call(1,2,3,4,5,6,7,'hahahahaha','fsdf',6));


