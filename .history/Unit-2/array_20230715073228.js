//rỗng
let arr = [];
console.log(arr);
//khai báo mảng các giá trị.
let number = [1, 2, 3, 4, 5];
console.log(number);
//sử dụng array để khởi tạo mảng.
let animals = Array('dog, cat, fish, chicken');
console.log(animals);
//sử dụng từ khóa new để khởi tạo mảng.
let colors = new Array('red, black, while, orange');
console.log(colors);
//khai báo mảng đa chiều(nested array);
let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(numbers);
//sử dụng spred operator để tạo mảng tù mảng khác.
let number1 = [1, 2, 5];
let number1_new = [...number1, 6, 9];
console.log(number1_new);
//sử dụng phương thức array.from để tọa mảng từ một đối tượng tương tự mảng.
let string = 'hi!';
let char = Array.from(string);
console.log(char)
//sử dụng phương thức array.of để tạo mảng từ các đối số.
let account = Array.of('dsd', 4, 6, 8);
console.log(account);
let courses = [
    {
        id: 1,
        name : 'js',
        coin:250
    },
    {
        id: 2,
        name : 'css',
        coin:350
    },
    {
        id: 3,
        name : 'java',
        coin:450
    },
    {
        id: 14,
        name : 'php',
        coin:0
    }
    
]
//forEach.
courses.forEach(function(phantu, index) {
    console.log(index, phantu);
})
//every.
let check1 courses.every(function(phantu, index) {
   if(phantu.coin > 0)
   {
    return true;
   }
   else
   return false;
})