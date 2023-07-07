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
let toggle = information1.hello(3);
console.log(toggle);
//sử dụng biến làm tên thuộc tính trong đối tượng:
let nameAge = 'age';
let number = 1000;
const information2 = {
    name: 'hà2',
    [nameAge]: 32 + number

};
console.log(information2);
//kế thừa từ một đối tượng khác.
let information3 = {
    name:'trinh xuân hà23',
    age: 99
};
let child1 = Object.create(information3);
child1.name = 'no name';
child1.age = 435345345345345345;
console.log(child1);
console.log(information3);
//khai báo đối tượng thông qua hàm khởi tạo(contructor function):
function information4(name, age) {
    this.name = name;
    this.age = age;
}
let information4_new = new information4('trịnh xuân hahahaha', 30);
console.log(information4_new);
