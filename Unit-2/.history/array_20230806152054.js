//rỗng
let arr = [];
console.log(arr);
//khai báo mảng các giá trị.
let number = [1, 2, 3, 4, 5];
console.log(number);
//sử dụng array để khởi tạo mảng.
let animals = Array("dog, cat, fish, chicken");
console.log(animals);
//sử dụng từ khóa new để khởi tạo mảng.
let colors = new Array("red, black, while, orange");
console.log(colors);
//khai báo mảng đa chiều(nested array);
let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(numbers);
//sử dụng spred operator để tạo mảng tù mảng khác.
let number1 = [1, 2, 5];
let number1_new = [...number1, 6, 9];
console.log(number1_new);
//sử dụng phương thức array.from để tọa mảng từ một đối tượng tương tự mảng.
let string = "hi!";
let char = Array.from(string);
console.log(char);
//sử dụng phương thức array.of để tạo mảng từ các đối số.
let account = Array.of("dsd", 4, 6, 8);
console.log(account);
let courses = [
  {
    id: 1,
    name: "js",
    coin: 250,
  },
  {
    id: 2,
    name: "css",
    coin: 350,
  },
  {
    id: 3,
    name: "java",
    coin: 450,
  },
  {
    id: 14,
    name: "php",
    coin: 0,
  },
  {
    id: 5,
    name: "java",
    coin: 750,
  },
];
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
//
/**
 * !Phương thức reduce() trong JavaScript được sử dụng để tính tổng hợp các phần tử trong mảng thành một giá trị duy nhất. Nó hoạt động bằng cách lặp qua từng phần tử trong mảng và tích lũy giá trị của phần tử hiện tại vào một biến tổng hợp (accumulator). Kết quả tổng hợp này được trả về cuối cùng sau khi lặp qua tất cả các phần tử.
 * todo array.reduce(callback, initialValue);
Trong đó:

array: Mảng gốc mà bạn muốn tính tổng hợp.
callback: Hàm callback được thực thi cho mỗi phần tử trong mảng, nhận các tham số sau:
accumulator: Giá trị tổng hợp tính đến thời điểm hiện tại.
currentValue: Giá trị của phần tử hiện tại trong mảng.
currentIndex (tùy chọn): Chỉ số của phần tử hiện tại trong mảng.
array (tùy chọn): Mảng gốc mà phương thức reduce đang được gọi.
initialValue (tùy chọn): Giá trị khởi tạo của biến tổng hợp (accumulator). Nếu không được cung cấp, thì phần tử đầu tiên trong mảng sẽ được sử dụng làm giá trị khởi tạo.
Phương thức reduce rất linh hoạt và có thể được sử dụng để tính toán nhiều loại tổng hợp khác nhau, chẳng hạn như tổng giá trị, giá trị lớn nhất, giá trị nhỏ nhất, tích, thống kê và nhiều tính toán khác. Nó là một công cụ mạnh mẽ giúp bạn thao tác dữ liệu trong mảng một cách hiệu quả.
 */
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
let check = number10.reduce2((a, b) => {
  return a + b;
}, 0);

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
let checks1 = ["trúng 30tr", "trúng 50tr", "may mắn", "-10tr"];
Array.prototype.map2 = function (callback) {
  let arr = [],
    arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    let kb = callback(this[i], i, this);
    arr.push(kb);
  }
  return arr;
};
let htmlss = checks1.map2((animal, index) => {
  return `<h1>${animal}</h1>`;
});
console.log(htmlss.join(""));

//!Array.prototype.forEach2
Array.prototype.forEach2 = function (callback) {
  // let arr = [],
  //let arrLength = this.length;
  // for (let i = 0; i < arrLength; i++) {
  // arr.push(callback(this[i], i));
  //  callback(this[i], i, this);
  //! nên dùng for in thay vì for thường để tránh lặp các phần tử không có trong array
  for (let index in this) {
    //!hasOwnProperty kiểm tra xem một đối tượng có phải là thuộc tính cụ thể hay không trả về boolean
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
};
// return arr;

let sum = 0;
checksss = courses.forEach2((course, index) => {
  sum += course.coin;
});
console.log(sum);
courses.forEach2(function (phantu, index) {
  console.log(index, phantu);
});
courses.forEach2(function (phantu, index) {
  if (phantu.coin >= 1) {
    console.log(phantu.id + "có coin thỏa mãi >=1");
  }
});
courses.forEach(function (phantu, index) {
  console.log(index, phantu);
});
//
/**
 * !Phương thức reduce() trong JavaScript được sử dụng để tính tổng hợp các phần tử trong mảng thành một giá trị duy nhất. Nó hoạt động bằng cách lặp qua từng phần tử trong mảng và tích lũy giá trị của phần tử hiện tại vào một biến tổng hợp (accumulator). Kết quả tổng hợp này được trả về cuối cùng sau khi lặp qua tất cả các phần tử.
 * todo array.reduce(callback, initialValue);
Trong đó:

array: Mảng gốc mà bạn muốn tính tổng hợp.
callback: Hàm callback được thực thi cho mỗi phần tử trong mảng, nhận các tham số sau:
accumulator: Giá trị tổng hợp tính đến thời điểm hiện tại.
currentValue: Giá trị của phần tử hiện tại trong mảng.
currentIndex (tùy chọn): Chỉ số của phần tử hiện tại trong mảng.
array (tùy chọn): Mảng gốc mà phương thức reduce đang được gọi.
initialValue (tùy chọn): Giá trị khởi tạo của biến tổng hợp (accumulator). Nếu không được cung cấp, thì phần tử đầu tiên trong mảng sẽ được sử dụng làm giá trị khởi tạo.
Phương thức reduce rất linh hoạt và có thể được sử dụng để tính toán nhiều loại tổng hợp khác nhau, chẳng hạn như tổng giá trị, giá trị lớn nhất, giá trị nhỏ nhất, tích, thống kê và nhiều tính toán khác. Nó là một công cụ mạnh mẽ giúp bạn thao tác dữ liệu trong mảng một cách hiệu quả.
 */
Array.prototype.reduce3 = function (accumulators, currentValues) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    currentValues = this[0];
  }
  for (; i < this.length; i++) {
    currentValues = accumulators(currentValues, this[i], i, this);
  }
  return currentValues;
};
let number11 = [11, 21, 31, 41, 51, 4, 6];
let check5 = number11.reduce3((accumulators, currentValues) => {
  return accumulators + currentValues;
});
console.log(check5);
//!find2
Array.prototype.find2 = function (callbank) {
  for (let i in this) {
    if (callbank(this[i], i, this)) {
      return this[i];
    }
  }
};
let check6 = number11.find2((num) => num % 2 === 0);
console.log(check6);
//!filter
Array.prototype.filter2 = function (callbank) {
  let arr = [];
  for (let i in this) {
    if (callbank(this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};
let check7 = number11.filter2((num) => num % 2 !== 0);
console.log(check7);
//!some chỉ cần 1 phẩn từ đúng thì sẽ trả về true không trả về false.
Array.prototype.some2 = function (callback, check) {
  for (let i in this) {
    if (this.hasOwnProperty(i)) {
      if (callback(this[i], i, this)) {
        return check || true;
      }
    }
  }
  return check || false;
};
let check8 = number11.some((num) => num !== 11);
console.log(check8);
//!every tất cả đúng trả về true 1 sai thì trả về false.

Array.prototype.every2 = function (callback) {
  for (let i in this) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
let check9 = number11.every((num) => num % 2 === 0);
console.log(check9);
//todo for(let index in courses) lấy ra phần tử thực trong mảng.

//todo  HTML: DOM
/**
 * 1. Elemant: ID,class, tag,css celector
 *
 */
let headingNode = document.getElementById("heading");
console.log([headingNode]);
let text = document.getElementsByClassName("text");
console.log([text]);
let text1 = document.querySelector(".text");
console.log([text1]);
//!document.forms tả về html  collection [0], hoặc [.class]
//todo thêm attributes cho element.

let text2 = document.querySelector(".text");
console.log([text2]);
text2.Title = "trịnh xuân hà";
text2.className = "text_2";
text2.setAttribute("class", "text_3");
text2.setAttribute("hatrinhxyuan", "text_4"); //!  có thể tạo arttrinute  mà thẻ đó không có.
//todo  lấy ra value của element

console.log(text2.getAttribute("hatrinhxyuan"));
//!lất   textNode trong element
console.log(text2.innerText);
console.log(text2.textContent);
text2.innerText = " 1đây là  text node của element  text2";
text2.textContent = " 2đây là  text node của element  text2";
console.log(text2.innerText);
console.log(text2.textContent);
//!thêm element vào doccument.
text2.innerHTML = "<h1>Trinhhj xuaabn ahf</h1>";
//!innerHTML thêm vào bên trong.
//!outterHTML chèn vào thay thế chính nó.
//! DOM stype
Object.assign(text2.style, {
  with: "200px",
  height: "300px",
  backgroundColor: "red",
});
console.log(text2.style.width);
