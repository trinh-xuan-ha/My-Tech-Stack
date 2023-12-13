let a = 10;
let b = ++a;
let c = a++;
let d = ++b;
let e = a ** b;
console.log(a); //12
console.log(b); //12
console.log(c); //11
console.log(d); //12
console.log(e);
let firstName = "hà";
let lastName = "trinh";
console.log(firstName + " " + lastName);
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
};
if (check(null)) {
  console.log("dien kien dung");
} else {
  console.log("dien kien sai");
}
//number type
let a1 = 1;
let b2 = 1.5;
let c3 = 1.9;
//string type
let fullName = "Xuan 'Ha";
console.log(fullName);
//boolean type.   'true,false'
var isSuccess = true;
//undefined type. không gán chỉ định nghĩa.
var age;
//Null type. không có gì.
var isNull = null; //nothing. typeof Null = object.
//Symbol
var id = Symbol("id"); //unique
var id1 = Symbol("id");
console.log(id === id1);
//function types.
let myFunction = function () {
  console.log("đây là function");
};
myFunction();
//Object types. + array.
let myObject = {
  myName: "ha",
  age10: 19,
  adress: "hung yen",
  yl: myFunction(),
};
console.log(myObject);
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(typeof myArray);
console.log("check : " + (myArray || myFunction));
console.log(document.all);

//logical if.else
let logical = NaN || "" || "" || "" || null; //&& nhaanj 6 giá trị của falsy không có nhận giá trị cuối.
// `||` nếu trong các giá trị không có giá trị falsy thì sẽ nhận giá trị đầu, không nhận falsy nếu tất cả là falsy thì sẽ trả về giá trị cuối
console.log("logical : ", logical);
// if(logical) {
//     console.log('dieu kien dung');
// }
// else
// {
//     console.log('dieu kien sai');
// }
function f8() {
  console.log("Đây là function!");
}
f8();
let call = function () {
  let string = "";
  let check = arguments.length;
  for (let i of arguments) {
    string += `${i} - `;
  }
  console.log(string);
};
call([4, 5, 6, 7, 8, 9, 10], "dfsdfs");
call(1, 2, 3, 4, 5, 6, 7, "hahahahaha", "fsdf", 6);
// let call = function () {
//     let string = Array.from(arguments).join('-');
//     console.log(string);
// }

// console.log(call([4,5,6,7,8,9,10], 'dfsdfs'));
// console.log(call(1,2,3,4,5,6,7,'hahahahaha','fsdf',6));
//var isConfim = confirm('Bạn có chắc không?');
function checkConfim(isConfim) {
  if (isConfim === true) {
    alert("ok");
  } else {
    console.log("khoomg?");
  }
}
//checkConfim(isConfim);
function cong(a, b) {
  return a.toString() + b.toString();
}
console.log(cong(true, false));
function showMessage(x, y) {
  console.log("đây là message bố.");
  function showMessage2(a, b) {
    return a + b;
  }
  console.log(showMessage2(x, y));
  return (x + y) * 2;
}
let haha = showMessage(2, 4);
console.log(haha);
let myObject1 = {
  tuoi: 30,
  myFunction1: function (a, b) {
    console.log("tong : ", a + b);
  },
};
myObject1.myFunction1(3, 6);
console.log(myObject1);
// console.log(myObject1.myFunction1(6,7));
//làm việc với chuỗi.
/**
 * indexOf--tìm kiếm giá trị nằm ở vị trí bao nhiều từ trái - phải , hỗ trợ giá trị 2
 * lastIndexOf -- tìm kiếm giá trị nằm ở vị trí nào từ phải sang trái, hỗ trợ giá trị 2
 * search -- tìm kiếm theo biểu thức chính quy
 * slice -- cắt trong chuỗi 2 giá trị truyền vào star, kết thúc
 * toUpperCase -- chuyển đổi sang chữ in hoa.
 * toLowerCase() -- chuyển đổi sang chữ viết thường.
 * trim() -- loại bỏ space đầu vè cuối chuỗi.
 * Split() -- biết chuỗi thành array dự trên điểm trung hợp lý để cắt.
 * charAt -- lấy kí tự theo vị trí.
 */
let myString = "Trinh xuan ha";
let languages = "js, PHP, Rupy";
console.log(myString.length);
console.log(myString.indexOf("a"));
console.log(myString.indexOf("a", 9));
console.log(myString.lastIndexOf("a"));
console.log(myString.slice(4, 7));
console.log(myString.replace(/a/g, "A"));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.trim());
console.log(languages.split(", "));
console.log(languages.charAt(7));
console.log(languages[0]);
let coursesStr = "trịnh, xuân, hà";
function strToArray(str) {
  console.log(str.split(", "));
}
strToArray(coursesStr);
function getContenLength(content) {
  let check = content.length;
  let dem = 0;
  for (let i = 0; i < check; i++) {
    dem += i;
  }

  console.log(check);
}
getContenLength("trịnh vcvcxuân hà");
console.log("sdfsdf3232");

/**
 * Đối tượng Number
Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:

Phương thức                     	Vai trò
*Number.isFinite()	               Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
*Number.isInteger()	               Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
*Number.parseFloat()	           Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
*Number.parseInt()	                Chuyển đổi chuỗi đã cho thành một số nguyên
*Number.prototype.toFixed()	        Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
*Number.prototype.toString()	    Chuyển đổi và trả về số đã cho dưới dạng chuỗi
 */
let number2 = "19.5";
let number3 = 13.65673;
console.log(Number.isInteger(number2));
console.log(Number.isFinite(parseFloat.apply(number2)));
console.log(Number.isFinite(parseInt(number2)));
console.log(Number.parseInt(number2));
console.log(Number.parseFloat(number2));
console.log(number3.toFixed());
console.log(number3.toFixed(1));
console.log(number3.toFixed(100));
/*
 * Number.isFinite(2 / 0); // false
*Number.isFinite(20 / 5); // true
*Number.isFinite(0 / 0); // false

*Number.isInteger(999999999); // true
*Number.isInteger(0.2);       // false
*Number.isInteger(Math.PI);   // false

*Number.parseFloat('10') // 10
*Number.parseFloat('10.00') // 10
*Number.parseFloat('238,21') // 238
*Number.parseFloat('237.22') // 237.22
*Number.parseFloat('34 56 78') // 34
*Number.parseFloat(' 37 ') // 37
*Number.parseFloat('18 is my age') // 18

*Number.parseInt('10') // 10
*Number.parseInt('10.00') // 10
*Number.parseInt('238,21') // 238
*Number.parseInt('237.22') // 237
*Number.parseInt('34 56 78') // 34
*Number.parseInt(' 37 ') // 37
*Number.parseInt('18 is my age') // 18

*var numberObject = 1234.56789;

*numberObject.toFixed(); // '1235' -- typeof = string
*numberObject.toFixed(1); // '1234.6'
*numberObject.toFixed(6); // '1234.567890'

*(11).toString();    // '11'        -- typeof = string
*(18).toString();     // '18' 
*(17.3).toString();   // '17.3'
* *  */
//kiểm tra NaN.
var age1 = 30;
var PI = 3.14;
var kq = 30 / "0.5";
var kq1 = 30 / "a";
console.log(kq);
console.log(isNaN(kq));
console.log(age1.toString());
function isNumber(value) {
  let check = typeof value;
  return check === "number" && !isNaN(value) ? 1 : 0;
}
console.log(isNumber(NaN));
console.log(isNumber(100 / "0e"));
console.log(typeof NaN);
console.log(isNaN(NaN));
//array
console.log(Array.isArray([]));
let languages1 = ["js", "css", "c++", function () {}];
console.log(typeof languages1[3]);
console.log(languages1.toString());
console.log(languages1.join(" - ")); // join thay dấu,  mặc định trong array khi đổi sang chuỗi.
//pop xóa đi phần tử cuối của array và trả về phần tử đã xóa
console.log(languages1.pop()); //khi không còn pt nào thi sẽ trả về undefine và mảng về rỗng.
//push thêm phần tử vào cuối mảng mỗi lần thêm + 1 length

console.log(languages1.push("c#", "html", "java"));
//shift xóa đi phần tử đầu mảng
console.log(languages1.shift());
//unshift -- thêm 1 hoặc nhiều vào đầu mảng
console.log(languages1.unshift("trịnh"));
console.log(languages1);
//splice xóa đi một vị trí bất kì tham số 1 ví trí cần xóa tham số 2 số phần tử xóa. tham số 3 > chèn
let languages2 = ["a", "b", "c"];
console.log(languages2.splice(1, 2, "sdfsdfsdfd g", "rêr"));
console.log(languages2);
//concat -- nối array với nhau.
console.log(languages1.concat(languages1, languages2));
//slice -- cắt  element chuyền vào -1 lấy giá trị cuối.
console.log(languages1.slice(1, 2));
console.log(languages2.pop());
// Viết hàm tại đây
function getLastElement(array) {
  //let check = array.length;
  // return (array[check - 1]);
  return array.slice(0, 1);
}

// Ví dụ sử dụng
var animals = ["Monkey", "Tiger", "Elephant"];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
//object
let emailKey = "email";
var myInfo = {
  name: "123", // key = 'name-ab'; key dạng string.
  age: 14,
  address: "viet nam",
  [emailKey]: "trinhxuanha23@gmail.com",
  getName: function () {
    return this.name;
  },
};
console.log(myInfo);
//key mới.
myInfo.email = "trinhxuanha23@gmail.com";
myInfo["email-home"] = "trinhha@gmail.com";
console.log(myInfo);
console.log(myInfo.name);
var mykey = "address";

console.log(myInfo.mykey); //c1
console.log(myInfo["mykey"]); //c2
console.log(myInfo[mykey]);
delete myInfo.age; //xóa thuộc tính trong object.
console.log(myInfo.getName());
//function trong object --> phương thức. còn lại là thuộc tính.
//object constructor
function User(firstName, lastName, avatar) {
  //mô tả thiết kế của đối tượng - object cóntructor -- hàm tạo.
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
/**
 *let User = function (firstName, lastName, avatar) //mô tả thiết kế của đối tượng - object cóntructor -- hàm tạo.
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}
 */
let author = new User("Ha", "Trinh", "Avatar1");
let user = new User("nguyen", "Ninh", "Avatar2");
author.title = "chia sẻ tại f8"; //thêm thuộc tính và phương thức
user.comment = "liệu có khóa asp.net k ad"; //thêm thuộc tính và phương thức
console.log(author);
console.log(user);
console.log(author.constructor === User);
console.log(author.getName());
let Animal = function (name, leg, speed) {
  this.name = name;
  this.leg = leg;
  this.speed = speed;
};
let parrot = new Animal("vet", "2", "130km/h");
console.log(parrot);
//object prototype.
User.prototype.className = "f0";
User.prototype.getClassName = function () {
  return this.className;
};
console.log(user.className);
console.log(author.getClassName()); //https://fullstack.edu.vn/learning/javascript-co-ban?id=3765b3c4-c503-4626-aed4-60684e56d847
//đối tượng Date.
let checkDate = new Date(); // có từ khóa new. là đối tượng
let date = Date(); //không là đối tượng
console.log(typeof date);
console.log(checkDate);
console.log(checkDate.toString());
console.log(typeof checkDate);
console.log(checkDate.getFullYear());
console.log(checkDate.getMonth() + 1);
console.log(checkDate.getDate());
console.log(checkDate.getDay());
console.log(checkDate.getHours());
console.log(
  typeof `${checkDate.getDate()}/${checkDate.getMonth()}/${checkDate.getFullYear()}`
);

//math object.. không là object constructor.
console.log(Math.PI);
console.log(Math.round(1.5)); //làm tròn.
console.log(Math.abs(-4)); //giá trị tuyệt đối.
console.log(Math.ceil(0.1)); //làm tròn trên.
console.log(Math.floor(7.8)); //làm tròn dưới.
console.log(Math.random()); //sô ngẫu nhiên. < 1.
console.log(Math.floor(Math.random() * 10)); //ramdom từ 0 - 9.
let random = Math.floor(Math.random() * 5);
let bot = ["30 coin", "40 coin", "50 coin", "60 coin", "70 coin", "90 coin"];
console.log(bot[random]);
let tiLe = Math.floor(Math.random() * 100);
if (tiLe < 5) {
  console.log("cường hóa thành công!" + " - " + tiLe);
} else {
  console.log("cường hóa thất bại" + " - " + tiLe);
}
console.log(Math.min("-12", -2, 3, 4, 5, 6, 7));
console.log(Math.max("12", " ", -2, 3, 4, 5, 6, 7));
let getRandomItem = function (check) {
  let a = check.length;
  return check[Math.floor(Math.random() * a)];
};
let checks = ["trúng 30tr", "trúng 50tr", "may mắn", "-10tr"];
console.log(getRandomItem(checks));
function run(a) {
  // function run(a) {
  if (a % 15 == 0) {
    return 3;
  } else if (a % 5 == 0) {
    return 2;
  } else if (a % 3 == 0) {
    return 1;
  }
}

// Kỳ vọng
console.log(run(3)); // 1
console.log(run(5)); // 2
console.log(run(15)); // 3
//switch case

let nameHa = [2, 3];
switch (nameHa) {
  case 2:
    console.log("Hôm này là thứ 2");
    break;
  case 3:
    console.log("Hôm này là thứ 3");
    break;
  case 4:
    console.log("Hôm này là thứ 4");
    break;
  default:
    console.log("không tồn tại.");
}
//toán tử 3 ngôi
let course = {
  name: "javascript",
  coin: 150,
};
console.log(course.coin > 0 ? `${course.coin} coin` : "miễn phí");
// vòng lắp -- loop
/**
 * for - lắp với điều kiện đúng.
 * for/in - lặp qua key của đối tượng.
 * for/of - lắp qua value của đối tượng.
 * while - lắp khi điều kiện đúng.
 * do/while - lắp qua ít nhất 1 lần , sau đó lắp khi điều kiện đúng.
 */
let getRandNumbers = function (min, max, length) {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(Math.random() * (max - min) + min);
  }
  return arr;
};
getRandNumbers(3, 9, 6);
console.log(getRandNumbers(3, 9, 6));
var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];
let getTotal = function (orders) {
  let sum = 0;
  for (let i = 0; i < orders.length; i++) {
    sum += orders[i].price;
  }
  return sum;
};
// Expected results:
console.log(getTotal(orders));
getTotal(orders);
//for /in loop
let myInfo1 = {
  name: "ha",
  age: 18,
  address: "hưng yen",
};
for (let key in myInfo1) {
  console.log(key);
  console.log(`${key}:${myInfo1[key]}`);
}
console.log(myInfo1);
let arr = "trịnh xuân hà";
for (let key in arr) {
  console.log(arr[key]); // In ra từng phần tử của mảng: 1, 2, 3, 4
}
///có thẻ app dụng với string. in ra từng chữ cái một.
let languages3 = ["js", "css", "java", "c#"];
for (let key in languages3) {
  console.log(key);
  console.log(languages3[key]);
}
function run(object) {
  let arr = [];
  for (let key in object) {
    arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return arr;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));
//for/of loop.
for (let value of languages3) {
  console.log(value);
}
for (let value of arr) {
  console.log(value);
}
console.log(Object.keys(myInfo1)); //trả về key.
console.log(Object.values(myInfo1)); //trả về values.
for (let value of Object.keys(myInfo1)) {
  //bỏ myInfo1 thành Object.keys(myInfo1)
  console.log(myInfo1[value]);
}
for (let value of Object.values(myInfo1)) {
  //bỏ myInfo1 thành Object.keys(myInfo1)
  console.log(value);
}
//vòng lặp while. while loop.
let is = 0;
while (is < 1000) {
  is++;
  // console.log(is);
}
//do while loop.
do {
  //code
  is++;
} while (is < 10);
//continue
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue; //bỏ qua bước dưới và nhảy lên bước trên.
  }
  console.log(i);
}
///loop nồng nhau.
let myArray10 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (let i = 0; i < myArray10.length; i++) {
  for (let j = 0; j < myArray10[i].length; j++) {
    console.log(myArray10[i][j]);
  }
}
//set loc gia tri duy nhat.
var array2 = ["a", "b", "c", "a", "b", "c"];
console.log([...new Set(array2)]);
//forEach.
courses.forEach(function (phantu, index) {
  console.log(index, phantu);
});
//every. nếu gặp một trong nhiều mà sai thì trả về false
let check1 = courses.every(function (phantu) {
  if (phantu.coin > 0) {
    return true;
  } else return false;
});
console.log(check1);
//some ngược lại với every chỉ 1 đúng thì trả về true. sai hết false
let check2 = courses.some(function (phantu) {
  if (phantu.coin > 0) {
    return true;
  } else return false;
});
console.log(check2);
//find tìm kiếm và trả về
let check3 = courses.find(function (check3) {
  return check3.name === "css";
});
console.log(check3);
//filter tìm kiếm trả về tất cả.
let check4 = courses.filter(function (check4) {
  return check4.name === "java";
});
console.log(check4);
let sports = [
  {
    name: "Bóng rổ",
    like: 6,
  },
  {
    name: "Bơi lội",
    like: 5,
  },
  {
    name: "Bóng đá",
    like: 10,
  },
];
let getMostFavoriteSport = function (a) {
  let check = a.filter(function (element) {
    return element.like > 5;
  });
  return check;
};

// Kỳ vọng
console.log(getMostFavoriteSport(sports));
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
// map().
//let newCourses =
//map() - chỉnh sủa và thay đổi element trong array.
let ktsports = function (sports, element, originArray) {
  return {
    name: sports.name,
    like: sports.like,
    nametext: `Giá : ${sports.like}`,
    element: element,
    originArray: originArray,
  };
};
let newSports = sports.map(ktsports);
console.log(newSports);
console.log(newSports.join(""));
//reduce().-- nhận về một giá trị duy nhất. tổng số tiền tất cả.
let sumSports = function (a, b) {
  return a * b.like;
};
let newSumSports = sports.reduce(sumSports, 1);
console.log(newSumSports);
//hàm sâu.
let number5 = [1, 2, [3, 4], 5, 6, [7, 8, 9, 10], "abc"];
let array4 = number5.reduce((a, b) => a.concat(b), []);
console.log(array4);
let htmls = sports.map(function (sports) {
  return `
      <div>
              <h2>${sports.name}</h2>
              <p>${sports.like}</p>
      </div>
  `;
});
console.log(htmls.join("")); //hiểm thị nên html.

var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given  the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];
function checkWriter(watchList) {
  return watchList.Writer === "Christopher Nolan";
}
function calculateRating(watchList) {
  let checkWriter = watchList.filter(function (checkWriter) {
    return checkWriter.Director === "Christopher Nolan";
  });
  let sum = checkWriter.reduce(
    (a, b) => parseFloat(a) + parseFloat(b.imdbRating),
    0
  );
  let i = checkWriter.length;
  return sum / i;
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675

//tạo reduce.
Array.prototype.reduce2 = function (a, b) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    b = this[0];
  }
  for (; i < this.length; i++) {
    b = a(b, this[i], i, this);
  }
  return b;
};
let number10 = [1, 2, 3, 4, 5];
let check11 = number10.reduce2((a, b) => {
  return a + b;
});

console.log(check);
// function arrToObj(arr) {
//     const result = {};
//     for(let i = 0; i<arr.length;i++) {
//       const key = arr[i][0];
//       const value = arr[i][1];
//       result[key] = value;
//     }
//   return result;
// }
function arrToObj(arr) {
  return arr.reduce((result, [key, value]) => {
    result[key] = value;
    return result;
  }, {});
}

// Expected results:
var arr1 = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];
console.log(arrToObj(arr1)); // { name: 'Sơn Đặng', age: 18 }
//de quy
//! includes tìm có chưa trong chỗi không. true fale đối số 2 là vị trí bắt đầu tìm
let haName = "trinh xuân ahf";
console.log(haName.includes("trinh", 1));
//todo Callbank?.
/**
 * !là hàm
 * !được truyền qua đối số
 */

function myFunction2(a) {
  if (typeof a === "function") {
    a(123);
  } else {
    console.log(a);
  }
}
function count(b) {
  console.log("Đây là callBack : " + b);
  // count(console.log("Đây là callBack : " + (b + 1)));
}

myFunction2("count");
myFunction2(count);
function caculate(a, b, cb) {
  return cb(a, b);
}
let aa = caculate(1, 2, 3);
console.log(aa);
//!callBank_lv2
let map2 = (callBack) => {
  let arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    callBack(this[i], i);
  }
};
