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
var isNull = null; //nothing.
//Symbol
var id = Symbol('id');//unique
var id1 = Symbol('id');
console.log(id === id1);
//function types.
let myFunction = function() {
    console.log('đây là function');
}
myFunction();
//Object types.
let myObject = {
    myName : 'ha',
    age10 :19,
    adress : 'hung yen',
   // function: myFunction()

}
console.log(myObject);


