//khai báo đối tượng rỗng.
let names = {};
// conccole.log(typeof names);
console.log(names instanceof Object);
//khai báo đối tượng với các thuộc tính và giá trị.
let information = {
    name:'hà',
    age: 30,
    gender:'nam'
};
console.log(information);
console.log(information.name);
let information1 = {
    name:'Hà1',
    age: 31,
    hello(x) {
        return x + this.age;
    }
};
let 
console.log(information1.hello());