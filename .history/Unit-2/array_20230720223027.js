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
        coin: 250
    },
    {
        id: 2,
        name : 'css',
        coin: 350
    },
    {
        id: 3,
        name : 'java',
        coin: 450
    },
    {
        id: 14,
        name : 'php',
        coin: 0
    },
    {
        id: 5,
        name : 'java',
        coin: 750
    },
    
    
]
//forEach.
courses.forEach(function(phantu, index) {
    console.log(index, phantu);
})
//every. nếu gặp một trong nhiều mà sai thì trả về false
let check1 =  courses.every(function(phantu) {
   if(phantu.coin > 0)
   {
    return true;
   }
   else
   return false;
})
console.log(check1);
//some ngược lại với every chỉ 1 đúng thì trả về true. sai hết false
let check2 =  courses.some(function(phantu) {
    if(phantu.coin > 0)
    {
     return true;
    }
    else
    return false;
 })
 console.log(check2);
 //find tìm kiếm và trả về 
 let check3 = courses.find(function(check3) {
   return check3.name === 'css';
 });
 console.log( check3);
 //filter tìm kiếm trả về tất cả.
 let check4 = courses.filter(function(check4) {
    return check4.name === 'java';
  });
  console.log(check4);
  let sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
let getMostFavoriteSport = function(a) {
    let check = a.filter(function(element) {
        return element.like > 5;
    });
    return check;
};




// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
// map().
//let newCourses = 
//map() - chỉnh sủa và thay đổi element trong array.
let ktsports = function(sports, element, originArray) {
    return {
        name : sports.name,
        like : sports.like,
        nametext : `Giá : ${sports.like}`,
        element : element,
        originArray: originArray
    };
}
let newSports = sports.map(ktsports);
console.log(newSports);
console.log(newSports.join(''));
//reduce().-- nhận về một giá trị duy nhất. tổng số tiền tất cả.
let sumSports = function(a, b) {
    return a * b.like;
}
let newSumSports = sports.reduce(sumSports, 1)
console.log(newSumSports);
//hàm sâu.
let number5 = [1,2,[3,4],5,6,[7,8,9,10],'abc'];
let array4 = number5.reduce((a,b) => a.concat(b), []);
console.log(array4);
let htmls = sports.map(fullName(sports) {
    return`
        <div>
                <h2
        </div>
    `
})

