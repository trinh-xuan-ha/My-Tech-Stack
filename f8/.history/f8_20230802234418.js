let a = 10;
let b = ++a;
let c = a++;
let d = ++b;
let e = a ** b;
/* eslint-disable */console.log(...oo_oo(`89335377_0`,a)); //12
/* eslint-disable */console.log(...oo_oo(`89335377_1`,b)); //12
/* eslint-disable */console.log(...oo_oo(`89335377_2`,c)); //11
/* eslint-disable */console.log(...oo_oo(`89335377_3`,d)); //12
/* eslint-disable */console.log(...oo_oo(`89335377_4`,e));
let firstName = "hà";
let lastName = "trinh";
/* eslint-disable */console.log(...oo_oo(`89335377_5`,firstName + " " + lastName));
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
  /* eslint-disable */console.log(...oo_oo(`89335377_6`,"dien kien dung"));
} else {
  /* eslint-disable */console.log(...oo_oo(`89335377_7`,"dien kien sai"));
}
//number type
let a1 = 1;
let b2 = 1.5;
let c3 = 1.9;
//string type
let fullName = "Xuan 'Ha";
/* eslint-disable */console.log(...oo_oo(`89335377_8`,fullName));
//boolean type.   'true,false'
var isSuccess = true;
//undefined type. không gán chỉ định nghĩa.
var age;
//Null type. không có gì.
var isNull = null; //nothing. typeof Null = object.
//Symbol
var id = Symbol("id"); //unique
var id1 = Symbol("id");
/* eslint-disable */console.log(...oo_oo(`89335377_9`,id === id1));
//function types.
let myFunction = function () {
  /* eslint-disable */console.log(...oo_oo(`89335377_10`,"đây là function"));
};
myFunction();
//Object types. + array.
let myObject = {
  myName: "ha",
  age10: 19,
  adress: "hung yen",
  yl: myFunction(),
};
/* eslint-disable */console.log(...oo_oo(`89335377_11`,myObject));
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* eslint-disable */console.log(...oo_oo(`89335377_12`,typeof myArray));
/* eslint-disable */console.log(...oo_oo(`89335377_13`,"check : " + (myArray || myFunction)));
/* eslint-disable */console.log(...oo_oo(`89335377_14`,document.all));

//logical if.else
let logical = NaN || "" || "" || "" || null; //&& nhaanj 6 giá trị của falsy không có nhận giá trị cuối.
// `||` nếu trong các giá trị không có giá trị falsy thì sẽ nhận giá trị đầu, không nhận falsy nếu tất cả là falsy thì sẽ trả về giá trị cuối
/* eslint-disable */console.log(...oo_oo(`89335377_15`,"logical : ", logical));
// if(logical) {
//     console.log('dieu kien dung');
// }
// else
// {
//     console.log('dieu kien sai');
// }
function f8() {
  /* eslint-disable */console.log(...oo_oo(`89335377_16`,"Đây là function!"));
}
f8();
let call = function () {
  let string = "";
  let check = arguments.length;
  for (let i of arguments) {
    string += `${i} - `;
  }
  /* eslint-disable */console.log(...oo_oo(`89335377_17`,string));
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
    /* eslint-disable */console.log(...oo_oo(`89335377_18`,"khoomg?"));
  }
}
//checkConfim(isConfim);
function cong(a, b) {
  return a.toString() + b.toString();
}
/* eslint-disable */console.log(...oo_oo(`89335377_19`,cong(true, false)));
function showMessage(x, y) {
  /* eslint-disable */console.log(...oo_oo(`89335377_20`,"đây là message bố."));
  function showMessage2(a, b) {
    return a + b;
  }
  /* eslint-disable */console.log(...oo_oo(`89335377_21`,showMessage2(x, y)));
  return (x + y) * 2;
}
let haha = showMessage(2, 4);
/* eslint-disable */console.log(...oo_oo(`89335377_22`,haha));
let myObject1 = {
  tuoi: 30,
  myFunction1: function (a, b) {
    /* eslint-disable */console.log(...oo_oo(`89335377_23`,"tong : ", a + b));
  },
};
myObject1.myFunction1(3, 6);
/* eslint-disable */console.log(...oo_oo(`89335377_24`,myObject1));
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
/* eslint-disable */console.log(...oo_oo(`89335377_25`,myString.length));
/* eslint-disable */console.log(...oo_oo(`89335377_26`,myString.indexOf("a")));
/* eslint-disable */console.log(...oo_oo(`89335377_27`,myString.indexOf("a", 9)));
/* eslint-disable */console.log(...oo_oo(`89335377_28`,myString.lastIndexOf("a")));
/* eslint-disable */console.log(...oo_oo(`89335377_29`,myString.slice(4, 7)));
/* eslint-disable */console.log(...oo_oo(`89335377_30`,myString.replace(/a/g, "A")));
/* eslint-disable */console.log(...oo_oo(`89335377_31`,myString.toUpperCase()));
/* eslint-disable */console.log(...oo_oo(`89335377_32`,myString.toLowerCase()));
/* eslint-disable */console.log(...oo_oo(`89335377_33`,myString.trim()));
/* eslint-disable */console.log(...oo_oo(`89335377_34`,languages.split(", ")));
/* eslint-disable */console.log(...oo_oo(`89335377_35`,languages.charAt(7)));
/* eslint-disable */console.log(...oo_oo(`89335377_36`,languages[0]));
let coursesStr = "trịnh, xuân, hà";
function strToArray(str) {
  /* eslint-disable */console.log(...oo_oo(`89335377_37`,str.split(", ")));
}
strToArray(coursesStr);
function getContenLength(content) {
  let check = content.length;
  let dem = 0;
  for (let i = 0; i < check; i++) {
    dem += i;
  }

  /* eslint-disable */console.log(...oo_oo(`89335377_38`,check));
}
getContenLength("trịnh vcvcxuân hà");
/* eslint-disable */console.log(...oo_oo(`89335377_39`,"sdfsdf3232"));

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
/* eslint-disable */console.log(...oo_oo(`89335377_40`,Number.isInteger(number2)));
/* eslint-disable */console.log(...oo_oo(`89335377_41`,Number.isFinite(parseFloat.apply(number2))));
/* eslint-disable */console.log(...oo_oo(`89335377_42`,Number.isFinite(parseInt(number2))));
/* eslint-disable */console.log(...oo_oo(`89335377_43`,Number.parseInt(number2)));
/* eslint-disable */console.log(...oo_oo(`89335377_44`,Number.parseFloat(number2)));
/* eslint-disable */console.log(...oo_oo(`89335377_45`,number3.toFixed()));
/* eslint-disable */console.log(...oo_oo(`89335377_46`,number3.toFixed(1)));
/* eslint-disable */console.log(...oo_oo(`89335377_47`,number3.toFixed(100)));
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
/* eslint-disable */console.log(...oo_oo(`89335377_48`,kq));
/* eslint-disable */console.log(...oo_oo(`89335377_49`,isNaN(kq)));
/* eslint-disable */console.log(...oo_oo(`89335377_50`,age1.toString()));
function isNumber(value) {
  let check = typeof value;
  return check === "number" && !isNaN(value) ? 1 : 0;
}
/* eslint-disable */console.log(...oo_oo(`89335377_51`,isNumber(NaN)));
/* eslint-disable */console.log(...oo_oo(`89335377_52`,isNumber(100 / "0e")));
/* eslint-disable */console.log(...oo_oo(`89335377_53`,typeof NaN));
/* eslint-disable */console.log(...oo_oo(`89335377_54`,isNaN(NaN)));
//array
/* eslint-disable */console.log(...oo_oo(`89335377_55`,Array.isArray([])));
let languages1 = ["js", "css", "c++", function () {}];
/* eslint-disable */console.log(...oo_oo(`89335377_56`,typeof languages1[3]));
/* eslint-disable */console.log(...oo_oo(`89335377_57`,languages1.toString()));
/* eslint-disable */console.log(...oo_oo(`89335377_58`,languages1.join(" - "))); // join thay dấu,  mặc định trong array khi đổi sang chuỗi.
//pop xóa đi phần tử cuối của array và trả về phần tử đã xóa
/* eslint-disable */console.log(...oo_oo(`89335377_59`,languages1.pop())); //khi không còn pt nào thi sẽ trả về undefine và mảng về rỗng.
//push thêm phần tử vào cuối mảng mỗi lần thêm + 1 length

/* eslint-disable */console.log(...oo_oo(`89335377_60`,languages1.push("c#", "html", "java")));
//shift xóa đi phần tử đầu mảng
/* eslint-disable */console.log(...oo_oo(`89335377_61`,languages1.shift()));
//unshift -- thêm 1 hoặc nhiều vào đầu mảng
/* eslint-disable */console.log(...oo_oo(`89335377_62`,languages1.unshift("trịnh")));
/* eslint-disable */console.log(...oo_oo(`89335377_63`,languages1));
//splice xóa đi một vị trí bất kì tham số 1 ví trí cần xóa tham số 2 số phần tử xóa. tham số 3 > chèn
let languages2 = ["a", "b", "c"];
/* eslint-disable */console.log(...oo_oo(`89335377_64`,languages2.splice(1, 2, "sdfsdfsdfd g", "rêr")));
/* eslint-disable */console.log(...oo_oo(`89335377_65`,languages2));
//concat -- nối array với nhau.
/* eslint-disable */console.log(...oo_oo(`89335377_66`,languages1.concat(languages1, languages2)));
//slice -- cắt  element chuyền vào -1 lấy giá trị cuối.
/* eslint-disable */console.log(...oo_oo(`89335377_67`,languages1.slice(1, 2)));
/* eslint-disable */console.log(...oo_oo(`89335377_68`,languages2.pop()));
// Viết hàm tại đây
function getLastElement(array) {
  //let check = array.length;
  // return (array[check - 1]);
  return array.slice(0, 1);
}

// Ví dụ sử dụng
var animals = ["Monkey", "Tiger", "Elephant"];
var result = getLastElement(animals);

/* eslint-disable */console.log(...oo_oo(`89335377_69`,result)); // Expected: "Elephant"
/* eslint-disable */console.log(...oo_oo(`89335377_70`,animals)); // Expected: ['Monkey', 'Tiger', 'Elephant']
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
/* eslint-disable */console.log(...oo_oo(`89335377_71`,myInfo));
//key mới.
myInfo.email = "trinhxuanha23@gmail.com";
myInfo["email-home"] = "trinhha@gmail.com";
/* eslint-disable */console.log(...oo_oo(`89335377_72`,myInfo));
/* eslint-disable */console.log(...oo_oo(`89335377_73`,myInfo.name));
var mykey = "address";

/* eslint-disable */console.log(...oo_oo(`89335377_74`,myInfo.mykey)); //c1
/* eslint-disable */console.log(...oo_oo(`89335377_75`,myInfo["mykey"])); //c2
/* eslint-disable */console.log(...oo_oo(`89335377_76`,myInfo[mykey]));
delete myInfo.age; //xóa thuộc tính trong object.
/* eslint-disable */console.log(...oo_oo(`89335377_77`,myInfo.getName()));
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
/* eslint-disable */console.log(...oo_oo(`89335377_78`,author));
/* eslint-disable */console.log(...oo_oo(`89335377_79`,user));
/* eslint-disable */console.log(...oo_oo(`89335377_80`,author.constructor === User));
/* eslint-disable */console.log(...oo_oo(`89335377_81`,author.getName()));
let Animal = function (name, leg, speed) {
  this.name = name;
  this.leg = leg;
  this.speed = speed;
};
let parrot = new Animal("vet", "2", "130km/h");
/* eslint-disable */console.log(...oo_oo(`89335377_82`,parrot));
//object prototype.
User.prototype.className = "f0";
User.prototype.getClassName = function () {
  return this.className;
};
/* eslint-disable */console.log(...oo_oo(`89335377_83`,user.className));
/* eslint-disable */console.log(...oo_oo(`89335377_84`,author.getClassName())); //https://fullstack.edu.vn/learning/javascript-co-ban?id=3765b3c4-c503-4626-aed4-60684e56d847
//đối tượng Date.
let checkDate = new Date(); // có từ khóa new. là đối tượng
let date = Date(); //không là đối tượng
/* eslint-disable */console.log(...oo_oo(`89335377_85`,typeof date));
/* eslint-disable */console.log(...oo_oo(`89335377_86`,checkDate));
/* eslint-disable */console.log(...oo_oo(`89335377_87`,checkDate.toString()));
/* eslint-disable */console.log(...oo_oo(`89335377_88`,typeof checkDate));
/* eslint-disable */console.log(...oo_oo(`89335377_89`,checkDate.getFullYear()));
/* eslint-disable */console.log(...oo_oo(`89335377_90`,checkDate.getMonth() + 1));
/* eslint-disable */console.log(...oo_oo(`89335377_91`,checkDate.getDate()));
/* eslint-disable */console.log(...oo_oo(`89335377_92`,checkDate.getDay()));
/* eslint-disable */console.log(...oo_oo(`89335377_93`,checkDate.getHours()));
/* eslint-disable */console.log(
  ...oo_oo(`89335377_94`,typeof `${checkDate.getDate()}/${checkDate.getMonth()}/${checkDate.getFullYear()}`)
);

//math object.. không là object constructor.
/* eslint-disable */console.log(...oo_oo(`89335377_95`,Math.PI));
/* eslint-disable */console.log(...oo_oo(`89335377_96`,Math.round(1.5))); //làm tròn.
/* eslint-disable */console.log(...oo_oo(`89335377_97`,Math.abs(-4))); //giá trị tuyệt đối.
/* eslint-disable */console.log(...oo_oo(`89335377_98`,Math.ceil(0.1))); //làm tròn trên.
/* eslint-disable */console.log(...oo_oo(`89335377_99`,Math.floor(7.8))); //làm tròn dưới.
/* eslint-disable */console.log(...oo_oo(`89335377_100`,Math.random())); //sô ngẫu nhiên. < 1.
/* eslint-disable */console.log(...oo_oo(`89335377_101`,Math.floor(Math.random() * 10))); //ramdom từ 0 - 9.
let random = Math.floor(Math.random() * 5);
let bot = ["30 coin", "40 coin", "50 coin", "60 coin", "70 coin", "90 coin"];
/* eslint-disable */console.log(...oo_oo(`89335377_102`,bot[random]));
let tiLe = Math.floor(Math.random() * 100);
if (tiLe < 5) {
  /* eslint-disable */console.log(...oo_oo(`89335377_103`,"cường hóa thành công!" + " - " + tiLe));
} else {
  /* eslint-disable */console.log(...oo_oo(`89335377_104`,"cường hóa thất bại" + " - " + tiLe));
}
/* eslint-disable */console.log(...oo_oo(`89335377_105`,Math.min("-12", -2, 3, 4, 5, 6, 7)));
/* eslint-disable */console.log(...oo_oo(`89335377_106`,Math.max("12", " ", -2, 3, 4, 5, 6, 7)));
let getRandomItem = function (check) {
  let a = check.length;
  return check[Math.floor(Math.random() * a)];
};
let checks = ["trúng 30tr", "trúng 50tr", "may mắn", "-10tr"];
/* eslint-disable */console.log(...oo_oo(`89335377_107`,getRandomItem(checks)));
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
/* eslint-disable */console.log(...oo_oo(`89335377_108`,run(3))); // 1
/* eslint-disable */console.log(...oo_oo(`89335377_109`,run(5))); // 2
/* eslint-disable */console.log(...oo_oo(`89335377_110`,run(15))); // 3
//switch case

let nameHa = [2, 3];
switch (nameHa) {
  case 2:
    /* eslint-disable */console.log(...oo_oo(`89335377_111`,"Hôm này là thứ 2"));
    break;
  case 3:
    /* eslint-disable */console.log(...oo_oo(`89335377_112`,"Hôm này là thứ 3"));
    break;
  case 4:
    /* eslint-disable */console.log(...oo_oo(`89335377_113`,"Hôm này là thứ 4"));
    break;
  default:
    /* eslint-disable */console.log(...oo_oo(`89335377_114`,"không tồn tại."));
}
//toán tử 3 ngôi
let course = {
  name: "javascript",
  coin: 150,
};
/* eslint-disable */console.log(...oo_oo(`89335377_115`,course.coin > 0 ? `${course.coin} coin` : "miễn phí"));
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
/* eslint-disable */console.log(...oo_oo(`89335377_116`,getRandNumbers(3, 9, 6)));
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
/* eslint-disable */console.log(...oo_oo(`89335377_117`,getTotal(orders)));
getTotal(orders);
//for /in loop
let myInfo1 = {
  name: "ha",
  age: 18,
  address: "hưng yen",
};
for (let key in myInfo1) {
  /* eslint-disable */console.log(...oo_oo(`89335377_118`,key));
  /* eslint-disable */console.log(...oo_oo(`89335377_119`,`${key}:${myInfo1[key]}`));
}
/* eslint-disable */console.log(...oo_oo(`89335377_120`,myInfo1));
let arr = "trịnh xuân hà";
for (let key in arr) {
  /* eslint-disable */console.log(...oo_oo(`89335377_121`,arr[key])); // In ra từng phần tử của mảng: 1, 2, 3, 4
}
///có thẻ app dụng với string. in ra từng chữ cái một.
let languages3 = ["js", "css", "java", "c#"];
for (let key in languages3) {
  /* eslint-disable */console.log(...oo_oo(`89335377_122`,key));
  /* eslint-disable */console.log(...oo_oo(`89335377_123`,languages3[key]));
}
function run(object) {
  let arr = [];
  for (let key in object) {
    arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return arr;
}

// Expected results:
/* eslint-disable */console.log(...oo_oo(`89335377_124`,run({ name: "Nguyen Van A", age: 16 })));
//for/of loop.
for (let value of languages3) {
  /* eslint-disable */console.log(...oo_oo(`89335377_125`,value));
}
for (let value of arr) {
  /* eslint-disable */console.log(...oo_oo(`89335377_126`,value));
}
/* eslint-disable */console.log(...oo_oo(`89335377_127`,Object.keys(myInfo1))); //trả về key.
/* eslint-disable */console.log(...oo_oo(`89335377_128`,Object.values(myInfo1))); //trả về values.
for (let value of Object.keys(myInfo1)) {
  //bỏ myInfo1 thành Object.keys(myInfo1)
  /* eslint-disable */console.log(...oo_oo(`89335377_129`,myInfo1[value]));
}
for (let value of Object.values(myInfo1)) {
  //bỏ myInfo1 thành Object.keys(myInfo1)
  /* eslint-disable */console.log(...oo_oo(`89335377_130`,value));
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
  /* eslint-disable */console.log(...oo_oo(`89335377_131`,i));
}
///loop nồng nhau.
let myArray10 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (let i = 0; i < myArray10.length; i++) {
  for (let j = 0; j < myArray10[i].length; j++) {
    /* eslint-disable */console.log(...oo_oo(`89335377_132`,myArray10[i][j]));
  }
}
//set loc gia tri duy nhat.
var array2 = ["a", "b", "c", "a", "b", "c"];
/* eslint-disable */console.log(...oo_oo(`89335377_133`,[...new Set(array2)]));
//de quy
//! includes tìm có chưa trong chỗi không. true fale đối số 2 là vị trí bắt đầu tìm
let haName = "trinh xuân ahf";
/* eslint-disable */console.log(...oo_oo(`89335377_134`,haName.includes("trinh", 1)));
//todo Callbank?.
/**
 * !là hàm
 * !được truyền qua đối số
 */

function myFunction2(a) {
  if (typeof a === "function") {
    a(123);
  } else {
    /* eslint-disable */console.log(...oo_oo(`89335377_135`,a));
  }
}
function count(b) {
  /* eslint-disable */console.log(...oo_oo(`89335377_136`,"Đây là callBack : " + b));
  // count(console.log("Đây là callBack : " + (b + 1)));
}

myFunction2("count");
myFunction2(count);
let checks1 = ["trúng 30tr", "trúng 50tr", "may mắn", "-10tr"];
Array.prototype.map2 = function (callback) {
  let arr = [],
    arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    let kb = callback(this[i], i);
    arr.push();
  }
  return arr;
};
checks1.map2((animal, index) => {
  /* eslint-disable */console.log(...oo_oo(`89335377_137`,animal, index));
});
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x3128(_0x33fef2,_0x1623a6){var _0x302bd2=_0x302b();return _0x3128=function(_0x31282f,_0x9ad0a5){_0x31282f=_0x31282f-0x175;var _0x1afa95=_0x302bd2[_0x31282f];return _0x1afa95;},_0x3128(_0x33fef2,_0x1623a6);}var _0x198da5=_0x3128;function _0x302b(){var _0x135ced=['console','send','_undefined','NEGATIVE_INFINITY','allStrLength','_additionalMetadata','_getOwnPropertySymbols','POSITIVE_INFINITY','perf_hooks','timeStamp','_isSet','_setNodeExpressionPath','totalStrLength','_objectToString','call','string','_console_ninja_session','message','array','_socket','location','_quotedRegExp','autoExpandPreviousObjects','method','index','_regExpToString','_treeNodePropertiesBeforeFullValue','_sendErrorMessage','timeEnd','time','_connectAttemptCount','18CdQSUp','onerror','parse','_getOwnPropertyNames','127.0.0.1','now','path','current','type','Number','test','ws://','date','_propertyAccessor','count','_cleanNode','undefined','426590zioQOr','set','root_exp_id','unref','elements','_capIfString','_isUndefined','getOwnPropertySymbols','indexOf','symbol','negativeZero','1.0.0','_numberRegExp','object','number','port','onmessage','3878680GyuBbs','_setNodeQueryPath','parent',\"c:\\\\Users\\\\trinh\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.188\\\\node_modules\",'pop','versions','_consoleNinjaAllowedToStart','function','_hasSetOnItsPath','disabledLog','valueOf','substr','strLength','trace','null','hasOwnProperty','_isMap','concat','length','push','[object\\x20BigInt]','autoExpandMaxDepth','process','props','_console_ninja','rootExpression','_isPrimitiveType','cappedElements','Map','warn','[object\\x20Map]','cappedProps','_allowedToSend','_addLoadNode','_connecting','nan','[object\\x20Array]','_addObjectProperty','482881RQSLnM','_maxConnectAttemptCount','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','_type','log','[object\\x20Date]','constructor','165VGgJoX','disabledTrace','name','WebSocket','global','_disposeWebsocket','_WebSocketClass','url','replace','autoExpandPropertyCount','resolveGetters','_setNodeId','getter','_isNegativeZero','564422lkNsDr','error','logger\\x20websocket\\x20error','root_exp','_setNodePermissions','_blacklistedProperty','stringify','_Symbol','default','_dateToString','toString','1690993019978','_addFunctionsNode','reduceLimits','_getOwnPropertyDescriptor','noFunctions','nuxt','_setNodeLabel','split','_propertyName','host','close','getWebSocketClass','node','onclose','Symbol','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','nodeModules','expressionsToEvaluate','get','prototype','38392jsGBHv','_webSocketErrorDocsLink','isExpressionToEvaluate','_p_name','stackTraceLimit','then','_treeNodePropertiesAfterFullValue','forEach','_WebSocket','elapsed','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','Buffer','level','reload','sort','_processTreeNodeResult','slice','match','_attemptToReconnectShortly','HTMLAllCollection','_p_','sortProps','_sortProps','6DHihzs','performance','getPrototypeOf','_hasMapOnItsPath','capped','_reconnectTimeout','live-server-extension','autoExpand','join','autoExpandLimit','serialize','bind','_hasSymbolPropertyOnItsPath','_ws','_addProperty','_HTMLAllCollection','hits','9486180ryGLtY','[object\\x20Set]','Error','stack','value','getOwnPropertyNames','unknown','_allowedToConnectOnSend','_keyStrRegExp','bigint','_inBrowser','_connectToHostNow','1962RXGvBI','hrtime','_connected','1twePuv','catch','funcName','data','depth','992pkXnTe','String','remix','_property','RegExp','hostname','Set','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','ws/index.js','_setNodeExpandableState',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"xuan-ha\",\"192.168.1.105\"]];_0x302b=function(){return _0x135ced;};return _0x302b();}(function(_0x242d46,_0x590dd8){var _0x24d20e=_0x3128,_0x15d973=_0x242d46();while(!![]){try{var _0x128a33=parseInt(_0x24d20e(0x1e3))/0x1*(-parseInt(_0x24d20e(0x18c))/0x2)+parseInt(_0x24d20e(0x1c3))/0x3*(-parseInt(_0x24d20e(0x1ab))/0x4)+parseInt(_0x24d20e(0x234))/0x5+-parseInt(_0x24d20e(0x212))/0x6*(parseInt(_0x24d20e(0x177))/0x7)+parseInt(_0x24d20e(0x1e8))/0x8*(-parseInt(_0x24d20e(0x1e0))/0x9)+-parseInt(_0x24d20e(0x223))/0xa*(parseInt(_0x24d20e(0x17e))/0xb)+parseInt(_0x24d20e(0x1d4))/0xc;if(_0x128a33===_0x590dd8)break;else _0x15d973['push'](_0x15d973['shift']());}catch(_0xbd4646){_0x15d973['push'](_0x15d973['shift']());}}}(_0x302b,0x5f742));var ue=Object['create'],te=Object['defineProperty'],he=Object['getOwnPropertyDescriptor'],le=Object[_0x198da5(0x1d9)],fe=Object[_0x198da5(0x1c5)],_e=Object[_0x198da5(0x1aa)][_0x198da5(0x243)],pe=(_0x5b0b2d,_0x296852,_0x566f5f,_0x5f33f5)=>{var _0x4c2b30=_0x198da5;if(_0x296852&&typeof _0x296852==_0x4c2b30(0x230)||typeof _0x296852==_0x4c2b30(0x23b)){for(let _0x320383 of le(_0x296852))!_e[_0x4c2b30(0x201)](_0x5b0b2d,_0x320383)&&_0x320383!==_0x566f5f&&te(_0x5b0b2d,_0x320383,{'get':()=>_0x296852[_0x320383],'enumerable':!(_0x5f33f5=he(_0x296852,_0x320383))||_0x5f33f5['enumerable']});}return _0x5b0b2d;},ne=(_0x312bef,_0x5ac06f,_0x314004)=>(_0x314004=_0x312bef!=null?ue(fe(_0x312bef)):{},pe(_0x5ac06f||!_0x312bef||!_0x312bef['__es'+'Module']?te(_0x314004,_0x198da5(0x194),{'value':_0x312bef,'enumerable':!0x0}):_0x314004,_0x312bef)),Q=class{constructor(_0x421446,_0x4aafd6,_0x380d86,_0x26cdc2){var _0x45cb36=_0x198da5;this[_0x45cb36(0x182)]=_0x421446,this['host']=_0x4aafd6,this[_0x45cb36(0x232)]=_0x380d86,this['nodeModules']=_0x26cdc2,this['_allowedToSend']=!0x0,this[_0x45cb36(0x1db)]=!0x0,this[_0x45cb36(0x1e2)]=!0x1,this['_connecting']=!0x1,this[_0x45cb36(0x1de)]=!!this['global'][_0x45cb36(0x181)],this[_0x45cb36(0x184)]=null,this['_connectAttemptCount']=0x0,this[_0x45cb36(0x178)]=0x14,this[_0x45cb36(0x1ac)]='https://tinyurl.com/37x8b79t',this['_sendErrorMessage']=(this[_0x45cb36(0x1de)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x45cb36(0x1ef))+this[_0x45cb36(0x1ac)];}async[_0x198da5(0x1a2)](){var _0x291a32=_0x198da5;if(this[_0x291a32(0x184)])return this[_0x291a32(0x184)];let _0x32bb49;if(this[_0x291a32(0x1de)])_0x32bb49=this['global'][_0x291a32(0x181)];else{if(this[_0x291a32(0x182)]['process']?.[_0x291a32(0x1b3)])_0x32bb49=this[_0x291a32(0x182)][_0x291a32(0x24a)]?.[_0x291a32(0x1b3)];else try{let _0x376ac6=await import('path');_0x32bb49=(await import((await import(_0x291a32(0x185)))['pathToFileURL'](_0x376ac6[_0x291a32(0x1cb)](this[_0x291a32(0x1a7)],_0x291a32(0x1f0)))['toString']()))['default'];}catch{try{_0x32bb49=require(require(_0x291a32(0x218))[_0x291a32(0x1cb)](this['nodeModules'],'ws'));}catch{throw new Error(_0x291a32(0x179));}}}return this['_WebSocketClass']=_0x32bb49,_0x32bb49;}[_0x198da5(0x1df)](){var _0x149ff7=_0x198da5;this[_0x149ff7(0x256)]||this['_connected']||this[_0x149ff7(0x211)]>=this[_0x149ff7(0x178)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x149ff7(0x256)]=!0x0,this[_0x149ff7(0x211)]++,this[_0x149ff7(0x1d0)]=new Promise((_0x1a382c,_0xa23aa6)=>{var _0xb7d940=_0x149ff7;this['getWebSocketClass']()['then'](_0x2c48ee=>{var _0x57951f=_0x3128;let _0x9d1ac9=new _0x2c48ee(_0x57951f(0x21d)+this[_0x57951f(0x1a0)]+':'+this['port']);_0x9d1ac9[_0x57951f(0x213)]=()=>{var _0x5bbd7c=_0x57951f;this[_0x5bbd7c(0x254)]=!0x1,this[_0x5bbd7c(0x183)](_0x9d1ac9),this[_0x5bbd7c(0x1be)](),_0xa23aa6(new Error(_0x5bbd7c(0x18e)));},_0x9d1ac9['onopen']=()=>{var _0x105076=_0x57951f;this[_0x105076(0x1de)]||_0x9d1ac9[_0x105076(0x206)]&&_0x9d1ac9[_0x105076(0x206)][_0x105076(0x226)]&&_0x9d1ac9['_socket']['unref'](),_0x1a382c(_0x9d1ac9);},_0x9d1ac9['onclose']=()=>{var _0x5d0a12=_0x57951f;this[_0x5d0a12(0x1db)]=!0x0,this[_0x5d0a12(0x183)](_0x9d1ac9),this[_0x5d0a12(0x1be)]();},_0x9d1ac9[_0x57951f(0x233)]=_0x303762=>{var _0x32a9d5=_0x57951f;try{_0x303762&&_0x303762[_0x32a9d5(0x1e6)]&&this['_inBrowser']&&JSON[_0x32a9d5(0x214)](_0x303762[_0x32a9d5(0x1e6)])[_0x32a9d5(0x20a)]==='reload'&&this[_0x32a9d5(0x182)][_0x32a9d5(0x207)][_0x32a9d5(0x1b9)]();}catch{}};})[_0xb7d940(0x1b0)](_0x1815fe=>(this['_connected']=!0x0,this[_0xb7d940(0x256)]=!0x1,this[_0xb7d940(0x1db)]=!0x1,this[_0xb7d940(0x254)]=!0x0,this[_0xb7d940(0x211)]=0x0,_0x1815fe))[_0xb7d940(0x1e4)](_0x1341c2=>(this['_connected']=!0x1,this[_0xb7d940(0x256)]=!0x1,console[_0xb7d940(0x251)](_0xb7d940(0x1b6)+this[_0xb7d940(0x1ac)]),_0xa23aa6(new Error(_0xb7d940(0x1a6)+(_0x1341c2&&_0x1341c2[_0xb7d940(0x204)])))));}));}['_disposeWebsocket'](_0x2a7b41){var _0x41fbe4=_0x198da5;this[_0x41fbe4(0x1e2)]=!0x1,this[_0x41fbe4(0x256)]=!0x1;try{_0x2a7b41[_0x41fbe4(0x1a4)]=null,_0x2a7b41[_0x41fbe4(0x213)]=null,_0x2a7b41['onopen']=null;}catch{}try{_0x2a7b41['readyState']<0x2&&_0x2a7b41[_0x41fbe4(0x1a1)]();}catch{}}['_attemptToReconnectShortly'](){var _0x459436=_0x198da5;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this[_0x459436(0x178)])&&(this[_0x459436(0x1c8)]=setTimeout(()=>{var _0x4f9e33=_0x459436;this[_0x4f9e33(0x1e2)]||this[_0x4f9e33(0x256)]||(this[_0x4f9e33(0x1df)](),this[_0x4f9e33(0x1d0)]?.[_0x4f9e33(0x1e4)](()=>this[_0x4f9e33(0x1be)]()));},0x1f4),this[_0x459436(0x1c8)]['unref']&&this[_0x459436(0x1c8)]['unref']());}async[_0x198da5(0x1f4)](_0x4d6fa2){var _0x406f0=_0x198da5;try{if(!this[_0x406f0(0x254)])return;this[_0x406f0(0x1db)]&&this['_connectToHostNow'](),(await this[_0x406f0(0x1d0)])[_0x406f0(0x1f4)](JSON[_0x406f0(0x192)](_0x4d6fa2));}catch(_0x28ff2f){console[_0x406f0(0x251)](this[_0x406f0(0x20e)]+':\\x20'+(_0x28ff2f&&_0x28ff2f[_0x406f0(0x204)])),this[_0x406f0(0x254)]=!0x1,this[_0x406f0(0x1be)]();}}};function V(_0x59b09b,_0x12630e,_0x1fde10,_0x24c076,_0x4bbb9d){var _0x429ab9=_0x198da5;let _0x2d1a43=_0x1fde10[_0x429ab9(0x19e)](',')['map'](_0x527209=>{var _0x50ce5a=_0x429ab9;try{_0x59b09b[_0x50ce5a(0x203)]||((_0x4bbb9d==='next.js'||_0x4bbb9d===_0x50ce5a(0x1ea)||_0x4bbb9d==='astro')&&(_0x4bbb9d+=_0x59b09b['process']?.[_0x50ce5a(0x239)]?.[_0x50ce5a(0x1a3)]?'\\x20server':'\\x20browser'),_0x59b09b[_0x50ce5a(0x203)]={'id':+new Date(),'tool':_0x4bbb9d});let _0x3b3646=new Q(_0x59b09b,_0x12630e,_0x527209,_0x24c076);return _0x3b3646[_0x50ce5a(0x1f4)][_0x50ce5a(0x1ce)](_0x3b3646);}catch(_0x7328f5){return console[_0x50ce5a(0x251)](_0x50ce5a(0x1b5),_0x7328f5&&_0x7328f5[_0x50ce5a(0x204)]),()=>{};}});return _0x3df3d4=>_0x2d1a43[_0x429ab9(0x1b2)](_0x2d7488=>_0x2d7488(_0x3df3d4));}function H(_0x244f9e){var _0x4c26b1=_0x198da5;let _0x441b73=function(_0xa17b1e,_0x2cc956){return _0x2cc956-_0xa17b1e;},_0x1629e2;if(_0x244f9e['performance'])_0x1629e2=function(){var _0x6a7ebb=_0x3128;return _0x244f9e[_0x6a7ebb(0x1c4)]['now']();};else{if(_0x244f9e['process']&&_0x244f9e[_0x4c26b1(0x24a)][_0x4c26b1(0x1e1)])_0x1629e2=function(){var _0x1c3b5b=_0x4c26b1;return _0x244f9e[_0x1c3b5b(0x24a)][_0x1c3b5b(0x1e1)]();},_0x441b73=function(_0x567aa4,_0x8c3a06){return 0x3e8*(_0x8c3a06[0x0]-_0x567aa4[0x0])+(_0x8c3a06[0x1]-_0x567aa4[0x1])/0xf4240;};else try{let {performance:_0x2cc570}=require(_0x4c26b1(0x1fb));_0x1629e2=function(){var _0x121f00=_0x4c26b1;return _0x2cc570[_0x121f00(0x217)]();};}catch{_0x1629e2=function(){return+new Date();};}}return{'elapsed':_0x441b73,'timeStamp':_0x1629e2,'now':()=>Date[_0x4c26b1(0x217)]()};}function X(_0x164790,_0x39d933,_0x5b3582){var _0x10f823=_0x198da5;if(_0x164790[_0x10f823(0x23a)]!==void 0x0)return _0x164790[_0x10f823(0x23a)];let _0x408c0b=_0x164790[_0x10f823(0x24a)]?.[_0x10f823(0x239)]?.[_0x10f823(0x1a3)];return _0x408c0b&&_0x5b3582===_0x10f823(0x19c)?_0x164790['_consoleNinjaAllowedToStart']=!0x1:_0x164790[_0x10f823(0x23a)]=_0x408c0b||!_0x39d933||_0x164790[_0x10f823(0x207)]?.[_0x10f823(0x1ed)]&&_0x39d933['includes'](_0x164790['location']['hostname']),_0x164790[_0x10f823(0x23a)];}((_0x215b52,_0x38d7e7,_0x9b4512,_0x5bbb24,_0x272fdb,_0x12d5de,_0x10fa0b,_0x4aae4f,_0x33c390)=>{var _0x401f13=_0x198da5;if(_0x215b52[_0x401f13(0x24c)])return _0x215b52[_0x401f13(0x24c)];if(!X(_0x215b52,_0x4aae4f,_0x272fdb))return _0x215b52[_0x401f13(0x24c)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x215b52['_console_ninja'];let _0x4c74f6={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x571eca={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x2a2f2b=H(_0x215b52),_0xa9ec19=_0x2a2f2b[_0x401f13(0x1b4)],_0x5c2a75=_0x2a2f2b[_0x401f13(0x1fc)],_0x5ec0a2=_0x2a2f2b['now'],_0x386186={'hits':{},'ts':{}},_0x5ce2cb=_0x23f022=>{_0x386186['ts'][_0x23f022]=_0x5c2a75();},_0x5d952d=(_0x291e68,_0x1bcbad)=>{var _0x1dee1c=_0x401f13;let _0x554733=_0x386186['ts'][_0x1bcbad];if(delete _0x386186['ts'][_0x1bcbad],_0x554733){let _0x6ba052=_0xa9ec19(_0x554733,_0x5c2a75());_0xc209bd(_0x5361a1(_0x1dee1c(0x210),_0x291e68,_0x5ec0a2(),_0x5ec4b3,[_0x6ba052],_0x1bcbad));}},_0x4f88c8=_0x404b79=>_0x2d7c2f=>{var _0x3a1b67=_0x401f13;try{_0x5ce2cb(_0x2d7c2f),_0x404b79(_0x2d7c2f);}finally{_0x215b52[_0x3a1b67(0x1f3)]['time']=_0x404b79;}},_0x1a5e03=_0x5894be=>_0x524f60=>{var _0x21c5dc=_0x401f13;try{let [_0x31ea49,_0x21de7a]=_0x524f60[_0x21c5dc(0x19e)](':logPointId:');_0x5d952d(_0x21de7a,_0x31ea49),_0x5894be(_0x31ea49);}finally{_0x215b52[_0x21c5dc(0x1f3)]['timeEnd']=_0x5894be;}};_0x215b52[_0x401f13(0x24c)]={'consoleLog':(_0x190129,_0x4fa1b1)=>{var _0x302a32=_0x401f13;_0x215b52['console'][_0x302a32(0x17b)][_0x302a32(0x180)]!==_0x302a32(0x23d)&&_0xc209bd(_0x5361a1(_0x302a32(0x17b),_0x190129,_0x5ec0a2(),_0x5ec4b3,_0x4fa1b1));},'consoleTrace':(_0x56f265,_0x41b90f)=>{var _0x422d4c=_0x401f13;_0x215b52[_0x422d4c(0x1f3)][_0x422d4c(0x17b)][_0x422d4c(0x180)]!==_0x422d4c(0x17f)&&_0xc209bd(_0x5361a1('trace',_0x56f265,_0x5ec0a2(),_0x5ec4b3,_0x41b90f));},'consoleTime':()=>{var _0x145cb1=_0x401f13;_0x215b52['console'][_0x145cb1(0x210)]=_0x4f88c8(_0x215b52[_0x145cb1(0x1f3)][_0x145cb1(0x210)]);},'consoleTimeEnd':()=>{var _0x2c5ebf=_0x401f13;_0x215b52[_0x2c5ebf(0x1f3)][_0x2c5ebf(0x20f)]=_0x1a5e03(_0x215b52['console'][_0x2c5ebf(0x20f)]);},'autoLog':(_0x31a8b8,_0x15f803)=>{var _0x11cb61=_0x401f13;_0xc209bd(_0x5361a1(_0x11cb61(0x17b),_0x15f803,_0x5ec0a2(),_0x5ec4b3,[_0x31a8b8]));},'autoLogMany':(_0x503fdb,_0x15cff4)=>{var _0xb66d23=_0x401f13;_0xc209bd(_0x5361a1(_0xb66d23(0x17b),_0x503fdb,_0x5ec0a2(),_0x5ec4b3,_0x15cff4));},'autoTrace':(_0x1dfe09,_0x1d6b94)=>{_0xc209bd(_0x5361a1('trace',_0x1d6b94,_0x5ec0a2(),_0x5ec4b3,[_0x1dfe09]));},'autoTraceMany':(_0x570e6d,_0x268758)=>{var _0x50bebd=_0x401f13;_0xc209bd(_0x5361a1(_0x50bebd(0x241),_0x570e6d,_0x5ec0a2(),_0x5ec4b3,_0x268758));},'autoTime':(_0x246eb2,_0x485c2f,_0x4bc456)=>{_0x5ce2cb(_0x4bc456);},'autoTimeEnd':(_0x3c391c,_0x56055a,_0x43789d)=>{_0x5d952d(_0x56055a,_0x43789d);}};let _0xc209bd=V(_0x215b52,_0x38d7e7,_0x9b4512,_0x5bbb24,_0x272fdb),_0x5ec4b3=_0x215b52[_0x401f13(0x203)];class _0x43c10b{constructor(){var _0xaca562=_0x401f13;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0xaca562(0x208)]=/'([^\\\\']|\\\\')*'/,this[_0xaca562(0x1f5)]=_0x215b52['undefined'],this[_0xaca562(0x1d2)]=_0x215b52[_0xaca562(0x1bf)],this[_0xaca562(0x19a)]=Object['getOwnPropertyDescriptor'],this[_0xaca562(0x215)]=Object['getOwnPropertyNames'],this[_0xaca562(0x193)]=_0x215b52[_0xaca562(0x1a5)],this[_0xaca562(0x20c)]=RegExp[_0xaca562(0x1aa)][_0xaca562(0x196)],this[_0xaca562(0x195)]=Date[_0xaca562(0x1aa)][_0xaca562(0x196)];}['serialize'](_0x522423,_0x4659fa,_0x198ca4,_0x503fbd){var _0x12361b=_0x401f13,_0xab73a9=this,_0x23a15a=_0x198ca4[_0x12361b(0x1ca)];function _0x5cfd53(_0x4790bf,_0x4d002a,_0x3f08f4){var _0x2812eb=_0x12361b;_0x4d002a['type']=_0x2812eb(0x1da),_0x4d002a['error']=_0x4790bf[_0x2812eb(0x204)],_0x46b0ad=_0x3f08f4[_0x2812eb(0x1a3)]['current'],_0x3f08f4[_0x2812eb(0x1a3)][_0x2812eb(0x219)]=_0x4d002a,_0xab73a9['_treeNodePropertiesBeforeFullValue'](_0x4d002a,_0x3f08f4);}try{_0x198ca4[_0x12361b(0x1b8)]++,_0x198ca4[_0x12361b(0x1ca)]&&_0x198ca4['autoExpandPreviousObjects'][_0x12361b(0x247)](_0x4659fa);var _0x4127ff,_0x2f5980,_0x5969f3,_0x33c4d2,_0x50b9e2=[],_0x3f47ed=[],_0x46c7da,_0x2f8d31=this['_type'](_0x4659fa),_0x210641=_0x2f8d31==='array',_0x5e41c0=!0x1,_0x22321f=_0x2f8d31===_0x12361b(0x23b),_0x4ed8b2=this['_isPrimitiveType'](_0x2f8d31),_0x466869=this['_isPrimitiveWrapperType'](_0x2f8d31),_0x926583=_0x4ed8b2||_0x466869,_0xd631b4={},_0x38d82d=0x0,_0x2bcff8=!0x1,_0x46b0ad,_0x583ff2=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x198ca4['depth']){if(_0x210641){if(_0x2f5980=_0x4659fa['length'],_0x2f5980>_0x198ca4['elements']){for(_0x5969f3=0x0,_0x33c4d2=_0x198ca4[_0x12361b(0x227)],_0x4127ff=_0x5969f3;_0x4127ff<_0x33c4d2;_0x4127ff++)_0x3f47ed[_0x12361b(0x247)](_0xab73a9['_addProperty'](_0x50b9e2,_0x4659fa,_0x2f8d31,_0x4127ff,_0x198ca4));_0x522423[_0x12361b(0x24f)]=!0x0;}else{for(_0x5969f3=0x0,_0x33c4d2=_0x2f5980,_0x4127ff=_0x5969f3;_0x4127ff<_0x33c4d2;_0x4127ff++)_0x3f47ed['push'](_0xab73a9[_0x12361b(0x1d1)](_0x50b9e2,_0x4659fa,_0x2f8d31,_0x4127ff,_0x198ca4));}_0x198ca4[_0x12361b(0x187)]+=_0x3f47ed[_0x12361b(0x246)];}if(!(_0x2f8d31===_0x12361b(0x242)||_0x2f8d31===_0x12361b(0x222))&&!_0x4ed8b2&&_0x2f8d31!==_0x12361b(0x1e9)&&_0x2f8d31!==_0x12361b(0x1b7)&&_0x2f8d31!==_0x12361b(0x1dd)){var _0x122b94=_0x503fbd['props']||_0x198ca4[_0x12361b(0x24b)];if(this[_0x12361b(0x1fd)](_0x4659fa)?(_0x4127ff=0x0,_0x4659fa[_0x12361b(0x1b2)](function(_0x3ffd37){var _0x488e51=_0x12361b;if(_0x38d82d++,_0x198ca4[_0x488e51(0x187)]++,_0x38d82d>_0x122b94){_0x2bcff8=!0x0;return;}if(!_0x198ca4[_0x488e51(0x1ad)]&&_0x198ca4['autoExpand']&&_0x198ca4[_0x488e51(0x187)]>_0x198ca4[_0x488e51(0x1cc)]){_0x2bcff8=!0x0;return;}_0x3f47ed['push'](_0xab73a9[_0x488e51(0x1d1)](_0x50b9e2,_0x4659fa,_0x488e51(0x1ee),_0x4127ff++,_0x198ca4,function(_0x34ffd3){return function(){return _0x34ffd3;};}(_0x3ffd37)));})):this[_0x12361b(0x244)](_0x4659fa)&&_0x4659fa[_0x12361b(0x1b2)](function(_0x1882fb,_0x227bda){var _0x386232=_0x12361b;if(_0x38d82d++,_0x198ca4[_0x386232(0x187)]++,_0x38d82d>_0x122b94){_0x2bcff8=!0x0;return;}if(!_0x198ca4['isExpressionToEvaluate']&&_0x198ca4[_0x386232(0x1ca)]&&_0x198ca4[_0x386232(0x187)]>_0x198ca4[_0x386232(0x1cc)]){_0x2bcff8=!0x0;return;}var _0xdeca49=_0x227bda[_0x386232(0x196)]();_0xdeca49['length']>0x64&&(_0xdeca49=_0xdeca49[_0x386232(0x1bc)](0x0,0x64)+'...'),_0x3f47ed[_0x386232(0x247)](_0xab73a9[_0x386232(0x1d1)](_0x50b9e2,_0x4659fa,_0x386232(0x250),_0xdeca49,_0x198ca4,function(_0x32e351){return function(){return _0x32e351;};}(_0x1882fb)));}),!_0x5e41c0){try{for(_0x46c7da in _0x4659fa)if(!(_0x210641&&_0x583ff2['test'](_0x46c7da))&&!this[_0x12361b(0x191)](_0x4659fa,_0x46c7da,_0x198ca4)){if(_0x38d82d++,_0x198ca4[_0x12361b(0x187)]++,_0x38d82d>_0x122b94){_0x2bcff8=!0x0;break;}if(!_0x198ca4['isExpressionToEvaluate']&&_0x198ca4[_0x12361b(0x1ca)]&&_0x198ca4[_0x12361b(0x187)]>_0x198ca4[_0x12361b(0x1cc)]){_0x2bcff8=!0x0;break;}_0x3f47ed['push'](_0xab73a9[_0x12361b(0x176)](_0x50b9e2,_0xd631b4,_0x4659fa,_0x2f8d31,_0x46c7da,_0x198ca4));}}catch{}if(_0xd631b4['_p_length']=!0x0,_0x22321f&&(_0xd631b4[_0x12361b(0x1ae)]=!0x0),!_0x2bcff8){var _0x51e875=[][_0x12361b(0x245)](this[_0x12361b(0x215)](_0x4659fa))[_0x12361b(0x245)](this[_0x12361b(0x1f9)](_0x4659fa));for(_0x4127ff=0x0,_0x2f5980=_0x51e875['length'];_0x4127ff<_0x2f5980;_0x4127ff++)if(_0x46c7da=_0x51e875[_0x4127ff],!(_0x210641&&_0x583ff2[_0x12361b(0x21c)](_0x46c7da[_0x12361b(0x196)]()))&&!this[_0x12361b(0x191)](_0x4659fa,_0x46c7da,_0x198ca4)&&!_0xd631b4[_0x12361b(0x1c0)+_0x46c7da[_0x12361b(0x196)]()]){if(_0x38d82d++,_0x198ca4[_0x12361b(0x187)]++,_0x38d82d>_0x122b94){_0x2bcff8=!0x0;break;}if(!_0x198ca4[_0x12361b(0x1ad)]&&_0x198ca4['autoExpand']&&_0x198ca4[_0x12361b(0x187)]>_0x198ca4[_0x12361b(0x1cc)]){_0x2bcff8=!0x0;break;}_0x3f47ed[_0x12361b(0x247)](_0xab73a9[_0x12361b(0x176)](_0x50b9e2,_0xd631b4,_0x4659fa,_0x2f8d31,_0x46c7da,_0x198ca4));}}}}}if(_0x522423[_0x12361b(0x21a)]=_0x2f8d31,_0x926583?(_0x522423['value']=_0x4659fa['valueOf'](),this[_0x12361b(0x228)](_0x2f8d31,_0x522423,_0x198ca4,_0x503fbd)):_0x2f8d31===_0x12361b(0x21e)?_0x522423[_0x12361b(0x1d8)]=this[_0x12361b(0x195)][_0x12361b(0x201)](_0x4659fa):_0x2f8d31===_0x12361b(0x1dd)?_0x522423[_0x12361b(0x1d8)]=_0x4659fa[_0x12361b(0x196)]():_0x2f8d31===_0x12361b(0x1ec)?_0x522423[_0x12361b(0x1d8)]=this[_0x12361b(0x20c)][_0x12361b(0x201)](_0x4659fa):_0x2f8d31==='symbol'&&this[_0x12361b(0x193)]?_0x522423[_0x12361b(0x1d8)]=this[_0x12361b(0x193)]['prototype'][_0x12361b(0x196)][_0x12361b(0x201)](_0x4659fa):!_0x198ca4[_0x12361b(0x1e7)]&&!(_0x2f8d31==='null'||_0x2f8d31===_0x12361b(0x222))&&(delete _0x522423[_0x12361b(0x1d8)],_0x522423['capped']=!0x0),_0x2bcff8&&(_0x522423[_0x12361b(0x253)]=!0x0),_0x46b0ad=_0x198ca4[_0x12361b(0x1a3)][_0x12361b(0x219)],_0x198ca4[_0x12361b(0x1a3)][_0x12361b(0x219)]=_0x522423,this[_0x12361b(0x20d)](_0x522423,_0x198ca4),_0x3f47ed[_0x12361b(0x246)]){for(_0x4127ff=0x0,_0x2f5980=_0x3f47ed[_0x12361b(0x246)];_0x4127ff<_0x2f5980;_0x4127ff++)_0x3f47ed[_0x4127ff](_0x4127ff);}_0x50b9e2['length']&&(_0x522423[_0x12361b(0x24b)]=_0x50b9e2);}catch(_0x347450){_0x5cfd53(_0x347450,_0x522423,_0x198ca4);}return this[_0x12361b(0x1f8)](_0x4659fa,_0x522423),this[_0x12361b(0x1b1)](_0x522423,_0x198ca4),_0x198ca4[_0x12361b(0x1a3)]['current']=_0x46b0ad,_0x198ca4[_0x12361b(0x1b8)]--,_0x198ca4[_0x12361b(0x1ca)]=_0x23a15a,_0x198ca4[_0x12361b(0x1ca)]&&_0x198ca4[_0x12361b(0x209)][_0x12361b(0x238)](),_0x522423;}[_0x401f13(0x1f9)](_0x33c1ba){var _0xab1e32=_0x401f13;return Object[_0xab1e32(0x22a)]?Object[_0xab1e32(0x22a)](_0x33c1ba):[];}['_isSet'](_0x1110fa){var _0x39f2ae=_0x401f13;return!!(_0x1110fa&&_0x215b52[_0x39f2ae(0x1ee)]&&this[_0x39f2ae(0x200)](_0x1110fa)===_0x39f2ae(0x1d5)&&_0x1110fa[_0x39f2ae(0x1b2)]);}[_0x401f13(0x191)](_0x4fb04b,_0x44d532,_0x44d596){var _0x473ca7=_0x401f13;return _0x44d596['noFunctions']?typeof _0x4fb04b[_0x44d532]==_0x473ca7(0x23b):!0x1;}[_0x401f13(0x17a)](_0x206dda){var _0x528152=_0x401f13,_0x55368e='';return _0x55368e=typeof _0x206dda,_0x55368e===_0x528152(0x230)?this[_0x528152(0x200)](_0x206dda)===_0x528152(0x175)?_0x55368e=_0x528152(0x205):this[_0x528152(0x200)](_0x206dda)===_0x528152(0x17c)?_0x55368e=_0x528152(0x21e):this[_0x528152(0x200)](_0x206dda)===_0x528152(0x248)?_0x55368e='bigint':_0x206dda===null?_0x55368e=_0x528152(0x242):_0x206dda['constructor']&&(_0x55368e=_0x206dda[_0x528152(0x17d)][_0x528152(0x180)]||_0x55368e):_0x55368e===_0x528152(0x222)&&this['_HTMLAllCollection']&&_0x206dda instanceof this[_0x528152(0x1d2)]&&(_0x55368e='HTMLAllCollection'),_0x55368e;}[_0x401f13(0x200)](_0xd0180a){var _0x189acc=_0x401f13;return Object[_0x189acc(0x1aa)][_0x189acc(0x196)]['call'](_0xd0180a);}[_0x401f13(0x24e)](_0x7816d0){var _0x17096c=_0x401f13;return _0x7816d0==='boolean'||_0x7816d0==='string'||_0x7816d0===_0x17096c(0x231);}['_isPrimitiveWrapperType'](_0x10b36e){var _0x25eabe=_0x401f13;return _0x10b36e==='Boolean'||_0x10b36e==='String'||_0x10b36e===_0x25eabe(0x21b);}[_0x401f13(0x1d1)](_0x4e0237,_0x34fc05,_0x51b86d,_0x1c749a,_0x5e9ff1,_0x32679f){var _0x260053=this;return function(_0x57486f){var _0x3de0a8=_0x3128,_0x263fe3=_0x5e9ff1[_0x3de0a8(0x1a3)][_0x3de0a8(0x219)],_0x3cc506=_0x5e9ff1[_0x3de0a8(0x1a3)][_0x3de0a8(0x20b)],_0x5a7843=_0x5e9ff1['node'][_0x3de0a8(0x236)];_0x5e9ff1['node'][_0x3de0a8(0x236)]=_0x263fe3,_0x5e9ff1[_0x3de0a8(0x1a3)][_0x3de0a8(0x20b)]=typeof _0x1c749a=='number'?_0x1c749a:_0x57486f,_0x4e0237[_0x3de0a8(0x247)](_0x260053['_property'](_0x34fc05,_0x51b86d,_0x1c749a,_0x5e9ff1,_0x32679f)),_0x5e9ff1[_0x3de0a8(0x1a3)][_0x3de0a8(0x236)]=_0x5a7843,_0x5e9ff1[_0x3de0a8(0x1a3)][_0x3de0a8(0x20b)]=_0x3cc506;};}[_0x401f13(0x176)](_0x1b13b5,_0x3bd0ee,_0x19fdc7,_0x3e0e6b,_0xa58106,_0x241e51,_0x372c52){var _0x13c9ad=_0x401f13,_0x6cfe43=this;return _0x3bd0ee[_0x13c9ad(0x1c0)+_0xa58106[_0x13c9ad(0x196)]()]=!0x0,function(_0x213b6f){var _0x48a74=_0x13c9ad,_0x589603=_0x241e51[_0x48a74(0x1a3)][_0x48a74(0x219)],_0x2a56e7=_0x241e51[_0x48a74(0x1a3)][_0x48a74(0x20b)],_0x44af41=_0x241e51[_0x48a74(0x1a3)][_0x48a74(0x236)];_0x241e51[_0x48a74(0x1a3)][_0x48a74(0x236)]=_0x589603,_0x241e51[_0x48a74(0x1a3)][_0x48a74(0x20b)]=_0x213b6f,_0x1b13b5[_0x48a74(0x247)](_0x6cfe43[_0x48a74(0x1eb)](_0x19fdc7,_0x3e0e6b,_0xa58106,_0x241e51,_0x372c52)),_0x241e51['node'][_0x48a74(0x236)]=_0x44af41,_0x241e51[_0x48a74(0x1a3)][_0x48a74(0x20b)]=_0x2a56e7;};}[_0x401f13(0x1eb)](_0x4290c6,_0x56967d,_0x299d84,_0x5a331d,_0xeb248f){var _0x16afc1=_0x401f13,_0x13a705=this;_0xeb248f||(_0xeb248f=function(_0x541f68,_0x16f881){return _0x541f68[_0x16f881];});var _0x341cd5=_0x299d84[_0x16afc1(0x196)](),_0x27ef97=_0x5a331d[_0x16afc1(0x1a8)]||{},_0x429173=_0x5a331d['depth'],_0x32cdfe=_0x5a331d[_0x16afc1(0x1ad)];try{var _0x433856=this[_0x16afc1(0x244)](_0x4290c6),_0x1865d2=_0x341cd5;_0x433856&&_0x1865d2[0x0]==='\\x27'&&(_0x1865d2=_0x1865d2[_0x16afc1(0x23f)](0x1,_0x1865d2[_0x16afc1(0x246)]-0x2));var _0x524185=_0x5a331d[_0x16afc1(0x1a8)]=_0x27ef97[_0x16afc1(0x1c0)+_0x1865d2];_0x524185&&(_0x5a331d[_0x16afc1(0x1e7)]=_0x5a331d[_0x16afc1(0x1e7)]+0x1),_0x5a331d[_0x16afc1(0x1ad)]=!!_0x524185;var _0x268757=typeof _0x299d84==_0x16afc1(0x22c),_0x3d0f8d={'name':_0x268757||_0x433856?_0x341cd5:this[_0x16afc1(0x19f)](_0x341cd5)};if(_0x268757&&(_0x3d0f8d['symbol']=!0x0),!(_0x56967d===_0x16afc1(0x205)||_0x56967d===_0x16afc1(0x1d6))){var _0xedf1f9=this['_getOwnPropertyDescriptor'](_0x4290c6,_0x299d84);if(_0xedf1f9&&(_0xedf1f9[_0x16afc1(0x224)]&&(_0x3d0f8d['setter']=!0x0),_0xedf1f9[_0x16afc1(0x1a9)]&&!_0x524185&&!_0x5a331d[_0x16afc1(0x188)]))return _0x3d0f8d[_0x16afc1(0x18a)]=!0x0,this[_0x16afc1(0x1bb)](_0x3d0f8d,_0x5a331d),_0x3d0f8d;}var _0x1021aa;try{_0x1021aa=_0xeb248f(_0x4290c6,_0x299d84);}catch(_0x345384){return _0x3d0f8d={'name':_0x341cd5,'type':_0x16afc1(0x1da),'error':_0x345384[_0x16afc1(0x204)]},this[_0x16afc1(0x1bb)](_0x3d0f8d,_0x5a331d),_0x3d0f8d;}var _0x448f0e=this[_0x16afc1(0x17a)](_0x1021aa),_0x433812=this['_isPrimitiveType'](_0x448f0e);if(_0x3d0f8d[_0x16afc1(0x21a)]=_0x448f0e,_0x433812)this[_0x16afc1(0x1bb)](_0x3d0f8d,_0x5a331d,_0x1021aa,function(){var _0x310481=_0x16afc1;_0x3d0f8d[_0x310481(0x1d8)]=_0x1021aa[_0x310481(0x23e)](),!_0x524185&&_0x13a705[_0x310481(0x228)](_0x448f0e,_0x3d0f8d,_0x5a331d,{});});else{var _0x25efc9=_0x5a331d[_0x16afc1(0x1ca)]&&_0x5a331d[_0x16afc1(0x1b8)]<_0x5a331d[_0x16afc1(0x249)]&&_0x5a331d[_0x16afc1(0x209)][_0x16afc1(0x22b)](_0x1021aa)<0x0&&_0x448f0e!==_0x16afc1(0x23b)&&_0x5a331d['autoExpandPropertyCount']<_0x5a331d['autoExpandLimit'];_0x25efc9||_0x5a331d[_0x16afc1(0x1b8)]<_0x429173||_0x524185?(this[_0x16afc1(0x1cd)](_0x3d0f8d,_0x1021aa,_0x5a331d,_0x524185||{}),this[_0x16afc1(0x1f8)](_0x1021aa,_0x3d0f8d)):this[_0x16afc1(0x1bb)](_0x3d0f8d,_0x5a331d,_0x1021aa,function(){var _0x4e04c6=_0x16afc1;_0x448f0e==='null'||_0x448f0e===_0x4e04c6(0x222)||(delete _0x3d0f8d[_0x4e04c6(0x1d8)],_0x3d0f8d[_0x4e04c6(0x1c7)]=!0x0);});}return _0x3d0f8d;}finally{_0x5a331d[_0x16afc1(0x1a8)]=_0x27ef97,_0x5a331d[_0x16afc1(0x1e7)]=_0x429173,_0x5a331d[_0x16afc1(0x1ad)]=_0x32cdfe;}}[_0x401f13(0x228)](_0x5505d5,_0x4cb10c,_0x417122,_0x2e32c9){var _0x4b0bb6=_0x401f13,_0x1019e1=_0x2e32c9[_0x4b0bb6(0x240)]||_0x417122['strLength'];if((_0x5505d5===_0x4b0bb6(0x202)||_0x5505d5===_0x4b0bb6(0x1e9))&&_0x4cb10c['value']){let _0x2d3817=_0x4cb10c['value']['length'];_0x417122[_0x4b0bb6(0x1f7)]+=_0x2d3817,_0x417122[_0x4b0bb6(0x1f7)]>_0x417122[_0x4b0bb6(0x1ff)]?(_0x4cb10c[_0x4b0bb6(0x1c7)]='',delete _0x4cb10c[_0x4b0bb6(0x1d8)]):_0x2d3817>_0x1019e1&&(_0x4cb10c[_0x4b0bb6(0x1c7)]=_0x4cb10c[_0x4b0bb6(0x1d8)]['substr'](0x0,_0x1019e1),delete _0x4cb10c[_0x4b0bb6(0x1d8)]);}}[_0x401f13(0x244)](_0x49bef9){var _0x114f60=_0x401f13;return!!(_0x49bef9&&_0x215b52[_0x114f60(0x250)]&&this[_0x114f60(0x200)](_0x49bef9)===_0x114f60(0x252)&&_0x49bef9[_0x114f60(0x1b2)]);}['_propertyName'](_0x52f5d3){var _0x444795=_0x401f13;if(_0x52f5d3[_0x444795(0x1bd)](/^\\d+$/))return _0x52f5d3;var _0x2fc14d;try{_0x2fc14d=JSON[_0x444795(0x192)](''+_0x52f5d3);}catch{_0x2fc14d='\\x22'+this[_0x444795(0x200)](_0x52f5d3)+'\\x22';}return _0x2fc14d['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x2fc14d=_0x2fc14d[_0x444795(0x23f)](0x1,_0x2fc14d[_0x444795(0x246)]-0x2):_0x2fc14d=_0x2fc14d['replace'](/'/g,'\\x5c\\x27')[_0x444795(0x186)](/\\\\\"/g,'\\x22')[_0x444795(0x186)](/(^\"|\"$)/g,'\\x27'),_0x2fc14d;}['_processTreeNodeResult'](_0x1ebba4,_0x80c0c8,_0x18a7ac,_0x4699bd){var _0x5ddf2b=_0x401f13;this[_0x5ddf2b(0x20d)](_0x1ebba4,_0x80c0c8),_0x4699bd&&_0x4699bd(),this['_additionalMetadata'](_0x18a7ac,_0x1ebba4),this[_0x5ddf2b(0x1b1)](_0x1ebba4,_0x80c0c8);}[_0x401f13(0x20d)](_0x348e29,_0x391689){var _0xad02de=_0x401f13;this[_0xad02de(0x189)](_0x348e29,_0x391689),this[_0xad02de(0x235)](_0x348e29,_0x391689),this[_0xad02de(0x1fe)](_0x348e29,_0x391689),this[_0xad02de(0x190)](_0x348e29,_0x391689);}[_0x401f13(0x189)](_0x166c40,_0x4feb87){}[_0x401f13(0x235)](_0x5ba2e3,_0x425cb1){}[_0x401f13(0x19d)](_0x212222,_0xedda1a){}[_0x401f13(0x229)](_0x2a57e7){var _0x49ede9=_0x401f13;return _0x2a57e7===this[_0x49ede9(0x1f5)];}[_0x401f13(0x1b1)](_0x12f89f,_0x36acc6){var _0x25d99b=_0x401f13;this[_0x25d99b(0x19d)](_0x12f89f,_0x36acc6),this[_0x25d99b(0x1f1)](_0x12f89f),_0x36acc6[_0x25d99b(0x1c1)]&&this[_0x25d99b(0x1c2)](_0x12f89f),this['_addFunctionsNode'](_0x12f89f,_0x36acc6),this[_0x25d99b(0x255)](_0x12f89f,_0x36acc6),this['_cleanNode'](_0x12f89f);}[_0x401f13(0x1f8)](_0x7b96b8,_0x2d717e){var _0x711e0b=_0x401f13;let _0x339ff0;try{_0x215b52[_0x711e0b(0x1f3)]&&(_0x339ff0=_0x215b52[_0x711e0b(0x1f3)][_0x711e0b(0x18d)],_0x215b52[_0x711e0b(0x1f3)][_0x711e0b(0x18d)]=function(){}),_0x7b96b8&&typeof _0x7b96b8[_0x711e0b(0x246)]==_0x711e0b(0x231)&&(_0x2d717e[_0x711e0b(0x246)]=_0x7b96b8[_0x711e0b(0x246)]);}catch{}finally{_0x339ff0&&(_0x215b52[_0x711e0b(0x1f3)]['error']=_0x339ff0);}if(_0x2d717e[_0x711e0b(0x21a)]==='number'||_0x2d717e['type']===_0x711e0b(0x21b)){if(isNaN(_0x2d717e[_0x711e0b(0x1d8)]))_0x2d717e[_0x711e0b(0x257)]=!0x0,delete _0x2d717e[_0x711e0b(0x1d8)];else switch(_0x2d717e[_0x711e0b(0x1d8)]){case Number[_0x711e0b(0x1fa)]:_0x2d717e['positiveInfinity']=!0x0,delete _0x2d717e[_0x711e0b(0x1d8)];break;case Number[_0x711e0b(0x1f6)]:_0x2d717e['negativeInfinity']=!0x0,delete _0x2d717e[_0x711e0b(0x1d8)];break;case 0x0:this[_0x711e0b(0x18b)](_0x2d717e[_0x711e0b(0x1d8)])&&(_0x2d717e[_0x711e0b(0x22d)]=!0x0);break;}}else _0x2d717e[_0x711e0b(0x21a)]===_0x711e0b(0x23b)&&typeof _0x7b96b8[_0x711e0b(0x180)]==_0x711e0b(0x202)&&_0x7b96b8[_0x711e0b(0x180)]&&_0x2d717e['name']&&_0x7b96b8[_0x711e0b(0x180)]!==_0x2d717e['name']&&(_0x2d717e[_0x711e0b(0x1e5)]=_0x7b96b8[_0x711e0b(0x180)]);}[_0x401f13(0x18b)](_0x5e5525){return 0x1/_0x5e5525===Number['NEGATIVE_INFINITY'];}[_0x401f13(0x1c2)](_0x2ef586){var _0x18f502=_0x401f13;!_0x2ef586['props']||!_0x2ef586[_0x18f502(0x24b)][_0x18f502(0x246)]||_0x2ef586[_0x18f502(0x21a)]===_0x18f502(0x205)||_0x2ef586['type']===_0x18f502(0x250)||_0x2ef586[_0x18f502(0x21a)]===_0x18f502(0x1ee)||_0x2ef586['props'][_0x18f502(0x1ba)](function(_0x120298,_0x1f1bab){var _0x188272=_0x18f502,_0x2f2b82=_0x120298[_0x188272(0x180)]['toLowerCase'](),_0x4e0350=_0x1f1bab[_0x188272(0x180)]['toLowerCase']();return _0x2f2b82<_0x4e0350?-0x1:_0x2f2b82>_0x4e0350?0x1:0x0;});}[_0x401f13(0x198)](_0x43e64a,_0x10179f){var _0x194c72=_0x401f13;if(!(_0x10179f[_0x194c72(0x19b)]||!_0x43e64a[_0x194c72(0x24b)]||!_0x43e64a[_0x194c72(0x24b)][_0x194c72(0x246)])){for(var _0x581102=[],_0x275966=[],_0x31441e=0x0,_0x37c72f=_0x43e64a[_0x194c72(0x24b)]['length'];_0x31441e<_0x37c72f;_0x31441e++){var _0x2bd0ad=_0x43e64a[_0x194c72(0x24b)][_0x31441e];_0x2bd0ad[_0x194c72(0x21a)]===_0x194c72(0x23b)?_0x581102[_0x194c72(0x247)](_0x2bd0ad):_0x275966[_0x194c72(0x247)](_0x2bd0ad);}if(!(!_0x275966[_0x194c72(0x246)]||_0x581102[_0x194c72(0x246)]<=0x1)){_0x43e64a[_0x194c72(0x24b)]=_0x275966;var _0x28dfc9={'functionsNode':!0x0,'props':_0x581102};this[_0x194c72(0x189)](_0x28dfc9,_0x10179f),this[_0x194c72(0x19d)](_0x28dfc9,_0x10179f),this[_0x194c72(0x1f1)](_0x28dfc9),this['_setNodePermissions'](_0x28dfc9,_0x10179f),_0x28dfc9['id']+='\\x20f',_0x43e64a[_0x194c72(0x24b)]['unshift'](_0x28dfc9);}}}[_0x401f13(0x255)](_0x41b5d5,_0x1058e3){}[_0x401f13(0x1f1)](_0x559418){}['_isArray'](_0x1f44eb){var _0x1ca4f6=_0x401f13;return Array['isArray'](_0x1f44eb)||typeof _0x1f44eb==_0x1ca4f6(0x230)&&this[_0x1ca4f6(0x200)](_0x1f44eb)===_0x1ca4f6(0x175);}[_0x401f13(0x190)](_0x1c3189,_0x110f78){}[_0x401f13(0x221)](_0x1d8acc){var _0x3f2e2e=_0x401f13;delete _0x1d8acc[_0x3f2e2e(0x1cf)],delete _0x1d8acc[_0x3f2e2e(0x23c)],delete _0x1d8acc[_0x3f2e2e(0x1c6)];}[_0x401f13(0x1fe)](_0x35bbe5,_0x336079){}[_0x401f13(0x21f)](_0x30b8d8){var _0x3deac4=_0x401f13;return _0x30b8d8?_0x30b8d8['match'](this[_0x3deac4(0x22f)])?'['+_0x30b8d8+']':_0x30b8d8[_0x3deac4(0x1bd)](this[_0x3deac4(0x1dc)])?'.'+_0x30b8d8:_0x30b8d8[_0x3deac4(0x1bd)](this[_0x3deac4(0x208)])?'['+_0x30b8d8+']':'[\\x27'+_0x30b8d8+'\\x27]':'';}}let _0x35007d=new _0x43c10b();function _0x5361a1(_0x44c395,_0x563346,_0x2f5ec2,_0x17c82c,_0x1fbd61,_0x5ca88c){var _0x377fd4=_0x401f13;let _0x4e85c2,_0x233b34;try{_0x233b34=_0x5c2a75(),_0x4e85c2=_0x386186[_0x563346],!_0x4e85c2||_0x233b34-_0x4e85c2['ts']>0x1f4&&_0x4e85c2[_0x377fd4(0x220)]&&_0x4e85c2[_0x377fd4(0x210)]/_0x4e85c2[_0x377fd4(0x220)]<0x64?(_0x386186[_0x563346]=_0x4e85c2={'count':0x0,'time':0x0,'ts':_0x233b34},_0x386186[_0x377fd4(0x1d3)]={}):_0x233b34-_0x386186['hits']['ts']>0x32&&_0x386186[_0x377fd4(0x1d3)][_0x377fd4(0x220)]&&_0x386186[_0x377fd4(0x1d3)][_0x377fd4(0x210)]/_0x386186[_0x377fd4(0x1d3)][_0x377fd4(0x220)]<0x64&&(_0x386186[_0x377fd4(0x1d3)]={});let _0x40e198=[],_0x4e9017=_0x4e85c2['reduceLimits']||_0x386186[_0x377fd4(0x1d3)][_0x377fd4(0x199)]?_0x571eca:_0x4c74f6,_0x417b97=_0x5a157c=>{var _0x1323c2=_0x377fd4;let _0x59d612={};return _0x59d612['props']=_0x5a157c[_0x1323c2(0x24b)],_0x59d612[_0x1323c2(0x227)]=_0x5a157c[_0x1323c2(0x227)],_0x59d612[_0x1323c2(0x240)]=_0x5a157c[_0x1323c2(0x240)],_0x59d612[_0x1323c2(0x1ff)]=_0x5a157c[_0x1323c2(0x1ff)],_0x59d612[_0x1323c2(0x1cc)]=_0x5a157c[_0x1323c2(0x1cc)],_0x59d612[_0x1323c2(0x249)]=_0x5a157c['autoExpandMaxDepth'],_0x59d612[_0x1323c2(0x1c1)]=!0x1,_0x59d612['noFunctions']=!_0x33c390,_0x59d612['depth']=0x1,_0x59d612[_0x1323c2(0x1b8)]=0x0,_0x59d612['expId']=_0x1323c2(0x225),_0x59d612[_0x1323c2(0x24d)]=_0x1323c2(0x18f),_0x59d612[_0x1323c2(0x1ca)]=!0x0,_0x59d612[_0x1323c2(0x209)]=[],_0x59d612[_0x1323c2(0x187)]=0x0,_0x59d612[_0x1323c2(0x188)]=!0x0,_0x59d612['allStrLength']=0x0,_0x59d612[_0x1323c2(0x1a3)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x59d612;};for(var _0x274761=0x0;_0x274761<_0x1fbd61[_0x377fd4(0x246)];_0x274761++)_0x40e198['push'](_0x35007d[_0x377fd4(0x1cd)]({'timeNode':_0x44c395==='time'||void 0x0},_0x1fbd61[_0x274761],_0x417b97(_0x4e9017),{}));if(_0x44c395===_0x377fd4(0x241)){let _0x55385c=Error[_0x377fd4(0x1af)];try{Error[_0x377fd4(0x1af)]=0x1/0x0,_0x40e198[_0x377fd4(0x247)](_0x35007d['serialize']({'stackNode':!0x0},new Error()[_0x377fd4(0x1d7)],_0x417b97(_0x4e9017),{'strLength':0x1/0x0}));}finally{Error[_0x377fd4(0x1af)]=_0x55385c;}}return{'method':_0x377fd4(0x17b),'version':_0x12d5de,'args':[{'ts':_0x2f5ec2,'session':_0x17c82c,'args':_0x40e198,'id':_0x563346,'context':_0x5ca88c}]};}catch(_0xe16010){return{'method':_0x377fd4(0x17b),'version':_0x12d5de,'args':[{'ts':_0x2f5ec2,'session':_0x17c82c,'args':[{'type':_0x377fd4(0x1da),'error':_0xe16010&&_0xe16010[_0x377fd4(0x204)]}],'id':_0x563346,'context':_0x5ca88c}]};}finally{try{if(_0x4e85c2&&_0x233b34){let _0x11081a=_0x5c2a75();_0x4e85c2[_0x377fd4(0x220)]++,_0x4e85c2[_0x377fd4(0x210)]+=_0xa9ec19(_0x233b34,_0x11081a),_0x4e85c2['ts']=_0x11081a,_0x386186[_0x377fd4(0x1d3)][_0x377fd4(0x220)]++,_0x386186[_0x377fd4(0x1d3)][_0x377fd4(0x210)]+=_0xa9ec19(_0x233b34,_0x11081a),_0x386186[_0x377fd4(0x1d3)]['ts']=_0x11081a,(_0x4e85c2[_0x377fd4(0x220)]>0x32||_0x4e85c2[_0x377fd4(0x210)]>0x64)&&(_0x4e85c2[_0x377fd4(0x199)]=!0x0),(_0x386186['hits'][_0x377fd4(0x220)]>0x3e8||_0x386186[_0x377fd4(0x1d3)]['time']>0x12c)&&(_0x386186[_0x377fd4(0x1d3)]['reduceLimits']=!0x0);}}catch{}}}return _0x215b52['_console_ninja'];})(globalThis,_0x198da5(0x216),'53779',_0x198da5(0x237),_0x198da5(0x1c9),_0x198da5(0x22e),_0x198da5(0x197),_0x198da5(0x1f2),'');");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/