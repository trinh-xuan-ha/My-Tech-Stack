//rỗng
let arr = [];
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_0`,arr));
//khai báo mảng các giá trị.
let number = [1, 2, 3, 4, 5];
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_1`,number));
//sử dụng array để khởi tạo mảng.
let animals = Array("dog, cat, fish, chicken");
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_2`,animals));
//sử dụng từ khóa new để khởi tạo mảng.
let colors = new Array("red, black, while, orange");
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_3`,colors));
//khai báo mảng đa chiều(nested array);
let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_4`,numbers));
//sử dụng spred operator để tạo mảng tù mảng khác.
let number1 = [1, 2, 5];
let number1_new = [...number1, 6, 9];
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_5`,number1_new));
//sử dụng phương thức array.from để tọa mảng từ một đối tượng tương tự mảng.
let string = "hi!";
let char = Array.from(string);
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_6`,char));
//sử dụng phương thức array.of để tạo mảng từ các đối số.
let account = Array.of("dsd", 4, 6, 8);
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_7`,account));
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
  /* eslint-disable */console.log(...oo_oo(`bf3d40a5_8`,index, phantu));
});
//every. nếu gặp một trong nhiều mà sai thì trả về false
let check1 = courses.every(function (phantu) {
  if (phantu.coin > 0) {
    return true;
  } else return false;
});
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_9`,check1));
//some ngược lại với every chỉ 1 đúng thì trả về true. sai hết false
let check2 = courses.some(function (phantu) {
  if (phantu.coin > 0) {
    return true;
  } else return false;
});
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_10`,check2));
//find tìm kiếm và trả về
let check3 = courses.find(function (check3) {
  return check3.name === "css";
});
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_11`,check3));
//filter tìm kiếm trả về tất cả.
let check4 = courses.filter(function (check4) {
  return check4.name === "java";
});
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_12`,check4));
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
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_13`,getMostFavoriteSport(sports)));
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
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_14`,newSports));
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_15`,newSports.join("")));
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
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_16`,newSumSports));
//hàm sâu.
let number5 = [1, 2, [3, 4], 5, 6, [7, 8, 9, 10], "abc"];
let array4 = number5.reduce((a, b) => a.concat(b), []);
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_17`,array4));
let htmls = sports.map(function (sports) {
  return `
        <div>
                <h2>${sports.name}</h2>
                <p>${sports.like}</p>
        </div>
    `;
});
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_18`,htmls.join(""))); //hiểm thị nên html.

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
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_19`,calculateRating(watchList))); // Output: 8.675

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

/* eslint-disable */console.log(...oo_oo(`bf3d40a5_20`,check));
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
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_21`,arrToObj(arr1))); // { name: 'Sơn Đặng', age: 18 }
//! includes tìm có chưa trong chỗi không. true fale đối số 2 là vị trí bắt đầu tìm
let haName = "trinh xuân ahf";
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_22`,haName.includes("trinh", 1)));
//todo Callbank?.
/**
 * !là hàm
 * !được truyền qua đối số
 */

function myFunction2(a) {
  if (typeof a === "function") {
    a(123);
  } else {
    /* eslint-disable */console.log(...oo_oo(`bf3d40a5_23`,a));
  }
}
function count(b) {
  /* eslint-disable */console.log(...oo_oo(`bf3d40a5_24`,"Đây là callBack : " + b));
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
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_25`,htmlss.join("")));

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
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_26`,sum));
courses.forEach2(function (phantu, index) {
  /* eslint-disable */console.log(...oo_oo(`bf3d40a5_27`,index, phantu));
});
courses.forEach2(function (phantu, index) {
  if (phantu.coin >= 1) {
    /* eslint-disable */console.log(...oo_oo(`bf3d40a5_28`,phantu.id + "có coin thỏa mãi >=1"));
  }
});
courses.forEach(function (phantu, index) {
  /* eslint-disable */console.log(...oo_oo(`bf3d40a5_29`,index, phantu));
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
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_30`,check5));
//!find2
Array.prototype.find2 = function (callbank) {
  for (let i in this) {
    if (callbank(this[i], i, this)) {
      return this[i];
    }
  }
};
let check6 = number11.find2((num) => num % 2 === 0);
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_31`,check6));
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
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_32`,check7));
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
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_33`,check8));
//!every tất cả đúng trả về true 1 sai thì trả về false.

Array.prototype.every2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};
let check9 = number11.every((num) => num % 2 === 0);
/* eslint-disable */console.log(...oo_oo(`bf3d40a5_34`,check9));
//todo for(let index in courses) lấy ra phần tử thực trong mảng.
/* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x452e92=_0xd3ad;(function(_0x15d541,_0x2a56da){var _0x169242=_0xd3ad,_0x55e3e1=_0x15d541();while(!![]){try{var _0x12fc1c=parseInt(_0x169242(0x225))/0x1*(-parseInt(_0x169242(0x29f))/0x2)+-parseInt(_0x169242(0x2ab))/0x3*(parseInt(_0x169242(0x274))/0x4)+-parseInt(_0x169242(0x24c))/0x5+-parseInt(_0x169242(0x2c4))/0x6*(-parseInt(_0x169242(0x243))/0x7)+-parseInt(_0x169242(0x2ba))/0x8*(parseInt(_0x169242(0x289))/0x9)+-parseInt(_0x169242(0x269))/0xa+parseInt(_0x169242(0x254))/0xb*(parseInt(_0x169242(0x2ce))/0xc);if(_0x12fc1c===_0x2a56da)break;else _0x55e3e1['push'](_0x55e3e1['shift']());}catch(_0x17d3bf){_0x55e3e1['push'](_0x55e3e1['shift']());}}}(_0x434c,0x98409));function _0x434c(){var _0x1c5095=['onmessage',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"xuan-ha\",\"192.168.1.16\"],'split','root_exp_id','_capIfString','includes','803kMFOiI','send','type','[object\\x20BigInt]','WebSocket','node','_getOwnPropertySymbols','name','unknown','elements','rootExpression','join','set','expressionsToEvaluate','create','parent','capped','get','isExpressionToEvaluate','prototype','_isArray','1338220TZrCbe','unref','count','_propertyName','symbol','_webSocketErrorDocsLink','error','_disposeWebsocket','length','allStrLength','_cleanNode','8AHeYTK','_sendErrorMessage','_additionalMetadata','_ws','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','1691169529895','disabledLog','performance','hrtime','null','HTMLAllCollection','_connected','_connecting','sort','_addFunctionsNode','indexOf','nuxt','isArray','getWebSocketClass','live-server-extension','hostname','72mOKDLD','_getOwnPropertyDescriptor','autoExpandMaxDepth','_socket','Set','_objectToString','','_connectAttemptCount','_allowedToSend','https://tinyurl.com/37x8b79t','String','undefined','parse','cappedProps','value','close','55579','totalStrLength','_addProperty','constructor','stackTraceLimit','reduceLimits','1603678ipTCgh','bigint','_setNodeExpandableState','_isPrimitiveType','_property','pop','function','warn','_setNodeId','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','toLowerCase','onerror','1276734sZFAUY','array','negativeZero','valueOf','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','[object\\x20Map]','getOwnPropertySymbols','reload','pathToFileURL','depth','getter','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','timeEnd','_p_name','toString','1070016yWmHEy','_WebSocket','autoExpandPropertyCount','level','_undefined','getOwnPropertyDescriptor','autoExpandLimit','\\x20browser','_connectToHostNow','_console_ninja','4731438jPDdcS','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_isMap','strLength','_attemptToReconnectShortly','slice','_getOwnPropertyNames','trace','_p_','astro','612984FtzWav','_hasSymbolPropertyOnItsPath','...','_Symbol','getPrototypeOf','_isNegativeZero','global','noFunctions','onclose','_addObjectProperty','date','Map','substr','_keyStrRegExp','_reconnectTimeout','process','push','now','_isSet','_sortProps','_dateToString','RegExp','nodeModules','_console_ninja_session','_treeNodePropertiesAfterFullValue','host','getOwnPropertyNames','hits','root_exp','catch','_addLoadNode','positiveInfinity','[object\\x20Array]','_WebSocketClass','resolveGetters','next.js','bind','1.0.0','then','location','onopen','object','_regExpToString','log','enumerable','call','stringify','_processTreeNodeResult','perf_hooks','defineProperty','port','versions','_setNodePermissions','__es'+'Module','path','nan','ws://','sortProps','serialize','string','_setNodeLabel','_setNodeExpressionPath','_propertyAccessor','_quotedRegExp','1RgbBtb','Number','number','_treeNodePropertiesBeforeFullValue','_consoleNinjaAllowedToStart','logger\\x20websocket\\x20error','negativeInfinity','Buffer','_setNodeQueryPath','elapsed','Boolean','forEach','console','concat','current','_hasMapOnItsPath','props','_numberRegExp','autoExpandPreviousObjects','[object\\x20Date]','remix','POSITIVE_INFINITY','data','_allowedToConnectOnSend','index','message','_HTMLAllCollection','match','_inBrowser','NEGATIVE_INFINITY','7eqzRUA','_maxConnectAttemptCount','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','hasOwnProperty','autoExpand','replace','timeStamp','_type','time','5185505UJNJEV','_blacklistedProperty'];_0x434c=function(){return _0x1c5095;};return _0x434c();}var ue=Object[_0x452e92(0x262)],te=Object[_0x452e92(0x216)],he=Object[_0x452e92(0x2bf)],le=Object[_0x452e92(0x1ff)],fe=Object[_0x452e92(0x2d2)],_e=Object['prototype'][_0x452e92(0x246)],pe=(_0x25ac0e,_0x3ba71f,_0x52346d,_0x33bc75)=>{var _0x5e58aa=_0x452e92;if(_0x3ba71f&&typeof _0x3ba71f==_0x5e58aa(0x20e)||typeof _0x3ba71f==_0x5e58aa(0x2a5)){for(let _0x3f6236 of le(_0x3ba71f))!_e[_0x5e58aa(0x212)](_0x25ac0e,_0x3f6236)&&_0x3f6236!==_0x52346d&&te(_0x25ac0e,_0x3f6236,{'get':()=>_0x3ba71f[_0x3f6236],'enumerable':!(_0x33bc75=he(_0x3ba71f,_0x3f6236))||_0x33bc75[_0x5e58aa(0x211)]});}return _0x25ac0e;},ne=(_0x142c65,_0x3ab264,_0x44b2ee)=>(_0x44b2ee=_0x142c65!=null?ue(fe(_0x142c65)):{},pe(_0x3ab264||!_0x142c65||!_0x142c65[_0x452e92(0x21a)]?te(_0x44b2ee,'default',{'value':_0x142c65,'enumerable':!0x0}):_0x44b2ee,_0x142c65)),Q=class{constructor(_0x4b2f0,_0x31781b,_0x3f34c1,_0x2b3d9d){var _0x4911aa=_0x452e92;this[_0x4911aa(0x2d4)]=_0x4b2f0,this[_0x4911aa(0x1fe)]=_0x31781b,this[_0x4911aa(0x217)]=_0x3f34c1,this['nodeModules']=_0x2b3d9d,this[_0x4911aa(0x291)]=!0x0,this[_0x4911aa(0x23c)]=!0x0,this[_0x4911aa(0x27f)]=!0x1,this[_0x4911aa(0x280)]=!0x1,this[_0x4911aa(0x241)]=!!this['global']['WebSocket'],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4911aa(0x244)]=0x14,this[_0x4911aa(0x26e)]=_0x4911aa(0x292),this[_0x4911aa(0x275)]=(this[_0x4911aa(0x241)]?_0x4911aa(0x245):_0x4911aa(0x2af))+this['_webSocketErrorDocsLink'];}async[_0x452e92(0x286)](){var _0x3776df=_0x452e92;if(this[_0x3776df(0x206)])return this[_0x3776df(0x206)];let _0x2d2827;if(this['_inBrowser'])_0x2d2827=this[_0x3776df(0x2d4)][_0x3776df(0x258)];else{if(this[_0x3776df(0x2d4)][_0x3776df(0x1f4)]?.[_0x3776df(0x2bb)])_0x2d2827=this[_0x3776df(0x2d4)][_0x3776df(0x1f4)]?.['_WebSocket'];else try{let _0x12df8c=await import('path');_0x2d2827=(await import((await import('url'))[_0x3776df(0x2b3)](_0x12df8c[_0x3776df(0x25f)](this[_0x3776df(0x1fb)],'ws/index.js'))[_0x3776df(0x2b9)]()))['default'];}catch{try{_0x2d2827=require(require(_0x3776df(0x21b))[_0x3776df(0x25f)](this['nodeModules'],'ws'));}catch{throw new Error(_0x3776df(0x2a8));}}}return this[_0x3776df(0x206)]=_0x2d2827,_0x2d2827;}[_0x452e92(0x2c2)](){var _0x26179c=_0x452e92;this[_0x26179c(0x280)]||this[_0x26179c(0x27f)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x26179c(0x23c)]=!0x1,this[_0x26179c(0x280)]=!0x0,this['_connectAttemptCount']++,this['_ws']=new Promise((_0x467aff,_0x437745)=>{var _0x2e02b3=_0x26179c;this[_0x2e02b3(0x286)]()[_0x2e02b3(0x20b)](_0x167873=>{var _0x269f5b=_0x2e02b3;let _0x53837a=new _0x167873(_0x269f5b(0x21d)+this[_0x269f5b(0x1fe)]+':'+this[_0x269f5b(0x217)]);_0x53837a['onerror']=()=>{var _0x138df6=_0x269f5b;this[_0x138df6(0x291)]=!0x1,this['_disposeWebsocket'](_0x53837a),this['_attemptToReconnectShortly'](),_0x437745(new Error(_0x138df6(0x22a)));},_0x53837a['onopen']=()=>{var _0x239b8a=_0x269f5b;this[_0x239b8a(0x241)]||_0x53837a[_0x239b8a(0x28c)]&&_0x53837a[_0x239b8a(0x28c)][_0x239b8a(0x26a)]&&_0x53837a[_0x239b8a(0x28c)][_0x239b8a(0x26a)](),_0x467aff(_0x53837a);},_0x53837a[_0x269f5b(0x1ed)]=()=>{var _0x3dd645=_0x269f5b;this[_0x3dd645(0x23c)]=!0x0,this[_0x3dd645(0x270)](_0x53837a),this[_0x3dd645(0x2c8)]();},_0x53837a[_0x269f5b(0x24e)]=_0x230e7b=>{var _0x2a37b3=_0x269f5b;try{_0x230e7b&&_0x230e7b[_0x2a37b3(0x23b)]&&this[_0x2a37b3(0x241)]&&JSON[_0x2a37b3(0x295)](_0x230e7b[_0x2a37b3(0x23b)])['method']==='reload'&&this[_0x2a37b3(0x2d4)][_0x2a37b3(0x20c)][_0x2a37b3(0x2b2)]();}catch{}};})['then'](_0x49eae0=>(this[_0x2e02b3(0x27f)]=!0x0,this['_connecting']=!0x1,this[_0x2e02b3(0x23c)]=!0x1,this['_allowedToSend']=!0x0,this[_0x2e02b3(0x290)]=0x0,_0x49eae0))[_0x2e02b3(0x202)](_0x409c53=>(this[_0x2e02b3(0x27f)]=!0x1,this[_0x2e02b3(0x280)]=!0x1,console['warn'](_0x2e02b3(0x2b6)+this[_0x2e02b3(0x26e)]),_0x437745(new Error(_0x2e02b3(0x2c5)+(_0x409c53&&_0x409c53[_0x2e02b3(0x23e)])))));}));}[_0x452e92(0x270)](_0xbfd6de){var _0x5ee13d=_0x452e92;this[_0x5ee13d(0x27f)]=!0x1,this[_0x5ee13d(0x280)]=!0x1;try{_0xbfd6de[_0x5ee13d(0x1ed)]=null,_0xbfd6de[_0x5ee13d(0x2aa)]=null,_0xbfd6de[_0x5ee13d(0x20d)]=null;}catch{}try{_0xbfd6de['readyState']<0x2&&_0xbfd6de[_0x5ee13d(0x298)]();}catch{}}[_0x452e92(0x2c8)](){var _0x3c9819=_0x452e92;clearTimeout(this[_0x3c9819(0x1f3)]),!(this[_0x3c9819(0x290)]>=this['_maxConnectAttemptCount'])&&(this[_0x3c9819(0x1f3)]=setTimeout(()=>{var _0x10ebfb=_0x3c9819;this['_connected']||this[_0x10ebfb(0x280)]||(this[_0x10ebfb(0x2c2)](),this[_0x10ebfb(0x277)]?.[_0x10ebfb(0x202)](()=>this[_0x10ebfb(0x2c8)]()));},0x1f4),this[_0x3c9819(0x1f3)]['unref']&&this[_0x3c9819(0x1f3)][_0x3c9819(0x26a)]());}async[_0x452e92(0x255)](_0x9761e6){var _0x332545=_0x452e92;try{if(!this[_0x332545(0x291)])return;this[_0x332545(0x23c)]&&this[_0x332545(0x2c2)](),(await this[_0x332545(0x277)])[_0x332545(0x255)](JSON[_0x332545(0x213)](_0x9761e6));}catch(_0xde9764){console[_0x332545(0x2a6)](this[_0x332545(0x275)]+':\\x20'+(_0xde9764&&_0xde9764[_0x332545(0x23e)])),this['_allowedToSend']=!0x1,this[_0x332545(0x2c8)]();}}};function V(_0xb46c26,_0x124447,_0x4bfe71,_0x565501,_0x1a8e7a){let _0x4cd182=_0x4bfe71['split'](',')['map'](_0x328dfd=>{var _0x5563e7=_0xd3ad;try{_0xb46c26[_0x5563e7(0x1fc)]||((_0x1a8e7a===_0x5563e7(0x208)||_0x1a8e7a===_0x5563e7(0x239)||_0x1a8e7a===_0x5563e7(0x2cd))&&(_0x1a8e7a+=_0xb46c26['process']?.[_0x5563e7(0x218)]?.['node']?'\\x20server':_0x5563e7(0x2c1)),_0xb46c26[_0x5563e7(0x1fc)]={'id':+new Date(),'tool':_0x1a8e7a});let _0x1f1fe9=new Q(_0xb46c26,_0x124447,_0x328dfd,_0x565501);return _0x1f1fe9[_0x5563e7(0x255)][_0x5563e7(0x209)](_0x1f1fe9);}catch(_0x11aea2){return console[_0x5563e7(0x2a6)](_0x5563e7(0x278),_0x11aea2&&_0x11aea2[_0x5563e7(0x23e)]),()=>{};}});return _0x4ae1ae=>_0x4cd182['forEach'](_0x52729e=>_0x52729e(_0x4ae1ae));}function H(_0x192483){var _0x1e9dcf=_0x452e92;let _0x2a084d=function(_0x3209c7,_0x2c73b9){return _0x2c73b9-_0x3209c7;},_0x3741d2;if(_0x192483[_0x1e9dcf(0x27b)])_0x3741d2=function(){var _0x4d6790=_0x1e9dcf;return _0x192483['performance'][_0x4d6790(0x1f6)]();};else{if(_0x192483[_0x1e9dcf(0x1f4)]&&_0x192483['process'][_0x1e9dcf(0x27c)])_0x3741d2=function(){var _0x287767=_0x1e9dcf;return _0x192483[_0x287767(0x1f4)][_0x287767(0x27c)]();},_0x2a084d=function(_0xde221,_0x452b6b){return 0x3e8*(_0x452b6b[0x0]-_0xde221[0x0])+(_0x452b6b[0x1]-_0xde221[0x1])/0xf4240;};else try{let {performance:_0x16b593}=require(_0x1e9dcf(0x215));_0x3741d2=function(){var _0x20d5bb=_0x1e9dcf;return _0x16b593[_0x20d5bb(0x1f6)]();};}catch{_0x3741d2=function(){return+new Date();};}}return{'elapsed':_0x2a084d,'timeStamp':_0x3741d2,'now':()=>Date[_0x1e9dcf(0x1f6)]()};}function X(_0x281347,_0x2a3196,_0x5922b6){var _0x3c2e05=_0x452e92;if(_0x281347[_0x3c2e05(0x229)]!==void 0x0)return _0x281347[_0x3c2e05(0x229)];let _0x556af6=_0x281347['process']?.['versions']?.[_0x3c2e05(0x259)];return _0x556af6&&_0x5922b6===_0x3c2e05(0x284)?_0x281347[_0x3c2e05(0x229)]=!0x1:_0x281347[_0x3c2e05(0x229)]=_0x556af6||!_0x2a3196||_0x281347[_0x3c2e05(0x20c)]?.[_0x3c2e05(0x288)]&&_0x2a3196[_0x3c2e05(0x253)](_0x281347['location']['hostname']),_0x281347[_0x3c2e05(0x229)];}function _0xd3ad(_0x1f57bd,_0x48ff48){var _0x434ca1=_0x434c();return _0xd3ad=function(_0xd3ad48,_0x32832b){_0xd3ad48=_0xd3ad48-0x1ed;var _0xe82c0b=_0x434ca1[_0xd3ad48];return _0xe82c0b;},_0xd3ad(_0x1f57bd,_0x48ff48);}((_0x297f55,_0xdee050,_0x15a7c7,_0x15cdf3,_0x4318eb,_0x1413e4,_0x3858a7,_0x62f057,_0x53ed3a)=>{var _0x319813=_0x452e92;if(_0x297f55[_0x319813(0x2c3)])return _0x297f55[_0x319813(0x2c3)];if(!X(_0x297f55,_0x62f057,_0x4318eb))return _0x297f55[_0x319813(0x2c3)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x297f55[_0x319813(0x2c3)];let _0x3d2413={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x333990={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2},_0x3a067e=H(_0x297f55),_0x36c28f=_0x3a067e[_0x319813(0x22e)],_0x2b0921=_0x3a067e[_0x319813(0x249)],_0x72f1bc=_0x3a067e[_0x319813(0x1f6)],_0xde8c09={'hits':{},'ts':{}},_0x473979=_0xc52325=>{_0xde8c09['ts'][_0xc52325]=_0x2b0921();},_0xc3a5af=(_0x1813d6,_0x2c643b)=>{let _0x1a54ef=_0xde8c09['ts'][_0x2c643b];if(delete _0xde8c09['ts'][_0x2c643b],_0x1a54ef){let _0x26548d=_0x36c28f(_0x1a54ef,_0x2b0921());_0x51c9b5(_0x7c6ce('time',_0x1813d6,_0x72f1bc(),_0x173cc,[_0x26548d],_0x2c643b));}},_0x33f615=_0x364446=>_0x2d18df=>{var _0x206113=_0x319813;try{_0x473979(_0x2d18df),_0x364446(_0x2d18df);}finally{_0x297f55['console'][_0x206113(0x24b)]=_0x364446;}},_0x218048=_0x40797e=>_0x45d1b4=>{var _0x337809=_0x319813;try{let [_0x287e15,_0x1a2403]=_0x45d1b4[_0x337809(0x250)](':logPointId:');_0xc3a5af(_0x1a2403,_0x287e15),_0x40797e(_0x287e15);}finally{_0x297f55[_0x337809(0x231)][_0x337809(0x2b7)]=_0x40797e;}};_0x297f55[_0x319813(0x2c3)]={'consoleLog':(_0x4cb2cf,_0x486867)=>{var _0x3df143=_0x319813;_0x297f55[_0x3df143(0x231)][_0x3df143(0x210)][_0x3df143(0x25b)]!==_0x3df143(0x27a)&&_0x51c9b5(_0x7c6ce(_0x3df143(0x210),_0x4cb2cf,_0x72f1bc(),_0x173cc,_0x486867));},'consoleTrace':(_0x1e7362,_0x1ba0c4)=>{var _0x5af504=_0x319813;_0x297f55[_0x5af504(0x231)]['log'][_0x5af504(0x25b)]!=='disabledTrace'&&_0x51c9b5(_0x7c6ce(_0x5af504(0x2cb),_0x1e7362,_0x72f1bc(),_0x173cc,_0x1ba0c4));},'consoleTime':()=>{var _0x31fade=_0x319813;_0x297f55[_0x31fade(0x231)]['time']=_0x33f615(_0x297f55[_0x31fade(0x231)][_0x31fade(0x24b)]);},'consoleTimeEnd':()=>{var _0x2ec537=_0x319813;_0x297f55['console'][_0x2ec537(0x2b7)]=_0x218048(_0x297f55[_0x2ec537(0x231)][_0x2ec537(0x2b7)]);},'autoLog':(_0x1f7f93,_0x350ba3)=>{var _0x22967d=_0x319813;_0x51c9b5(_0x7c6ce(_0x22967d(0x210),_0x350ba3,_0x72f1bc(),_0x173cc,[_0x1f7f93]));},'autoLogMany':(_0x2b4708,_0x5d74a2)=>{var _0x49c10c=_0x319813;_0x51c9b5(_0x7c6ce(_0x49c10c(0x210),_0x2b4708,_0x72f1bc(),_0x173cc,_0x5d74a2));},'autoTrace':(_0x4173a2,_0x29e4ba)=>{_0x51c9b5(_0x7c6ce('trace',_0x29e4ba,_0x72f1bc(),_0x173cc,[_0x4173a2]));},'autoTraceMany':(_0x382e34,_0x3ae0b0)=>{var _0x28b6f0=_0x319813;_0x51c9b5(_0x7c6ce(_0x28b6f0(0x2cb),_0x382e34,_0x72f1bc(),_0x173cc,_0x3ae0b0));},'autoTime':(_0x158aab,_0x5bb89d,_0x171b5a)=>{_0x473979(_0x171b5a);},'autoTimeEnd':(_0xa9c8bb,_0x451453,_0x5ed308)=>{_0xc3a5af(_0x451453,_0x5ed308);}};let _0x51c9b5=V(_0x297f55,_0xdee050,_0x15a7c7,_0x15cdf3,_0x4318eb),_0x173cc=_0x297f55[_0x319813(0x1fc)];class _0x23b763{constructor(){var _0xceaff7=_0x319813;this[_0xceaff7(0x1f2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0xceaff7(0x236)]=/^(0|[1-9][0-9]*)$/,this[_0xceaff7(0x224)]=/'([^\\\\']|\\\\')*'/,this[_0xceaff7(0x2be)]=_0x297f55[_0xceaff7(0x294)],this[_0xceaff7(0x23f)]=_0x297f55[_0xceaff7(0x27e)],this['_getOwnPropertyDescriptor']=Object['getOwnPropertyDescriptor'],this['_getOwnPropertyNames']=Object[_0xceaff7(0x1ff)],this['_Symbol']=_0x297f55['Symbol'],this['_regExpToString']=RegExp[_0xceaff7(0x267)]['toString'],this['_dateToString']=Date[_0xceaff7(0x267)][_0xceaff7(0x2b9)];}[_0x319813(0x21f)](_0x55e0c9,_0x309663,_0x584091,_0x1c57f6){var _0x28a3fe=_0x319813,_0x3681d0=this,_0x114fe6=_0x584091[_0x28a3fe(0x247)];function _0xf8a81a(_0x372fd1,_0x1fbb8f,_0x374e47){var _0x5cd913=_0x28a3fe;_0x1fbb8f['type']=_0x5cd913(0x25c),_0x1fbb8f[_0x5cd913(0x26f)]=_0x372fd1[_0x5cd913(0x23e)],_0x132da3=_0x374e47[_0x5cd913(0x259)][_0x5cd913(0x233)],_0x374e47[_0x5cd913(0x259)]['current']=_0x1fbb8f,_0x3681d0['_treeNodePropertiesBeforeFullValue'](_0x1fbb8f,_0x374e47);}try{_0x584091[_0x28a3fe(0x2bd)]++,_0x584091[_0x28a3fe(0x247)]&&_0x584091[_0x28a3fe(0x237)][_0x28a3fe(0x1f5)](_0x309663);var _0x1167fc,_0x53449c,_0x125091,_0xe68ba5,_0x267053=[],_0x350ce3=[],_0x5de494,_0x284273=this['_type'](_0x309663),_0x438389=_0x284273===_0x28a3fe(0x2ac),_0x42c96f=!0x1,_0x8ac5a2=_0x284273===_0x28a3fe(0x2a5),_0x1edcdd=this[_0x28a3fe(0x2a2)](_0x284273),_0x7ec536=this['_isPrimitiveWrapperType'](_0x284273),_0x71d33f=_0x1edcdd||_0x7ec536,_0x4568d4={},_0x56176f=0x0,_0x2b4fdb=!0x1,_0x132da3,_0x3801a8=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x584091[_0x28a3fe(0x2b4)]){if(_0x438389){if(_0x53449c=_0x309663['length'],_0x53449c>_0x584091[_0x28a3fe(0x25d)]){for(_0x125091=0x0,_0xe68ba5=_0x584091[_0x28a3fe(0x25d)],_0x1167fc=_0x125091;_0x1167fc<_0xe68ba5;_0x1167fc++)_0x350ce3['push'](_0x3681d0[_0x28a3fe(0x29b)](_0x267053,_0x309663,_0x284273,_0x1167fc,_0x584091));_0x55e0c9['cappedElements']=!0x0;}else{for(_0x125091=0x0,_0xe68ba5=_0x53449c,_0x1167fc=_0x125091;_0x1167fc<_0xe68ba5;_0x1167fc++)_0x350ce3['push'](_0x3681d0['_addProperty'](_0x267053,_0x309663,_0x284273,_0x1167fc,_0x584091));}_0x584091[_0x28a3fe(0x2bc)]+=_0x350ce3[_0x28a3fe(0x271)];}if(!(_0x284273===_0x28a3fe(0x27d)||_0x284273==='undefined')&&!_0x1edcdd&&_0x284273!==_0x28a3fe(0x293)&&_0x284273!==_0x28a3fe(0x22c)&&_0x284273!==_0x28a3fe(0x2a0)){var _0x4e95ab=_0x1c57f6[_0x28a3fe(0x235)]||_0x584091[_0x28a3fe(0x235)];if(this[_0x28a3fe(0x1f7)](_0x309663)?(_0x1167fc=0x0,_0x309663[_0x28a3fe(0x230)](function(_0x3329ec){var _0x1eeee0=_0x28a3fe;if(_0x56176f++,_0x584091[_0x1eeee0(0x2bc)]++,_0x56176f>_0x4e95ab){_0x2b4fdb=!0x0;return;}if(!_0x584091[_0x1eeee0(0x266)]&&_0x584091[_0x1eeee0(0x247)]&&_0x584091[_0x1eeee0(0x2bc)]>_0x584091['autoExpandLimit']){_0x2b4fdb=!0x0;return;}_0x350ce3[_0x1eeee0(0x1f5)](_0x3681d0[_0x1eeee0(0x29b)](_0x267053,_0x309663,_0x1eeee0(0x28d),_0x1167fc++,_0x584091,function(_0x2a2b48){return function(){return _0x2a2b48;};}(_0x3329ec)));})):this[_0x28a3fe(0x2c6)](_0x309663)&&_0x309663[_0x28a3fe(0x230)](function(_0x1449f8,_0x1222cd){var _0x55c01b=_0x28a3fe;if(_0x56176f++,_0x584091[_0x55c01b(0x2bc)]++,_0x56176f>_0x4e95ab){_0x2b4fdb=!0x0;return;}if(!_0x584091[_0x55c01b(0x266)]&&_0x584091[_0x55c01b(0x247)]&&_0x584091[_0x55c01b(0x2bc)]>_0x584091[_0x55c01b(0x2c0)]){_0x2b4fdb=!0x0;return;}var _0x1ad706=_0x1222cd[_0x55c01b(0x2b9)]();_0x1ad706[_0x55c01b(0x271)]>0x64&&(_0x1ad706=_0x1ad706[_0x55c01b(0x2c9)](0x0,0x64)+_0x55c01b(0x2d0)),_0x350ce3[_0x55c01b(0x1f5)](_0x3681d0[_0x55c01b(0x29b)](_0x267053,_0x309663,'Map',_0x1ad706,_0x584091,function(_0x1092ca){return function(){return _0x1092ca;};}(_0x1449f8)));}),!_0x42c96f){try{for(_0x5de494 in _0x309663)if(!(_0x438389&&_0x3801a8['test'](_0x5de494))&&!this[_0x28a3fe(0x24d)](_0x309663,_0x5de494,_0x584091)){if(_0x56176f++,_0x584091[_0x28a3fe(0x2bc)]++,_0x56176f>_0x4e95ab){_0x2b4fdb=!0x0;break;}if(!_0x584091['isExpressionToEvaluate']&&_0x584091[_0x28a3fe(0x247)]&&_0x584091[_0x28a3fe(0x2bc)]>_0x584091[_0x28a3fe(0x2c0)]){_0x2b4fdb=!0x0;break;}_0x350ce3['push'](_0x3681d0[_0x28a3fe(0x1ee)](_0x267053,_0x4568d4,_0x309663,_0x284273,_0x5de494,_0x584091));}}catch{}if(_0x4568d4['_p_length']=!0x0,_0x8ac5a2&&(_0x4568d4[_0x28a3fe(0x2b8)]=!0x0),!_0x2b4fdb){var _0x59df1a=[][_0x28a3fe(0x232)](this[_0x28a3fe(0x2ca)](_0x309663))['concat'](this['_getOwnPropertySymbols'](_0x309663));for(_0x1167fc=0x0,_0x53449c=_0x59df1a['length'];_0x1167fc<_0x53449c;_0x1167fc++)if(_0x5de494=_0x59df1a[_0x1167fc],!(_0x438389&&_0x3801a8['test'](_0x5de494[_0x28a3fe(0x2b9)]()))&&!this['_blacklistedProperty'](_0x309663,_0x5de494,_0x584091)&&!_0x4568d4[_0x28a3fe(0x2cc)+_0x5de494[_0x28a3fe(0x2b9)]()]){if(_0x56176f++,_0x584091[_0x28a3fe(0x2bc)]++,_0x56176f>_0x4e95ab){_0x2b4fdb=!0x0;break;}if(!_0x584091[_0x28a3fe(0x266)]&&_0x584091[_0x28a3fe(0x247)]&&_0x584091[_0x28a3fe(0x2bc)]>_0x584091[_0x28a3fe(0x2c0)]){_0x2b4fdb=!0x0;break;}_0x350ce3[_0x28a3fe(0x1f5)](_0x3681d0[_0x28a3fe(0x1ee)](_0x267053,_0x4568d4,_0x309663,_0x284273,_0x5de494,_0x584091));}}}}}if(_0x55e0c9['type']=_0x284273,_0x71d33f?(_0x55e0c9[_0x28a3fe(0x297)]=_0x309663[_0x28a3fe(0x2ae)](),this['_capIfString'](_0x284273,_0x55e0c9,_0x584091,_0x1c57f6)):_0x284273==='date'?_0x55e0c9['value']=this[_0x28a3fe(0x1f9)][_0x28a3fe(0x212)](_0x309663):_0x284273===_0x28a3fe(0x2a0)?_0x55e0c9[_0x28a3fe(0x297)]=_0x309663['toString']():_0x284273===_0x28a3fe(0x1fa)?_0x55e0c9[_0x28a3fe(0x297)]=this[_0x28a3fe(0x20f)][_0x28a3fe(0x212)](_0x309663):_0x284273===_0x28a3fe(0x26d)&&this[_0x28a3fe(0x2d1)]?_0x55e0c9[_0x28a3fe(0x297)]=this[_0x28a3fe(0x2d1)][_0x28a3fe(0x267)][_0x28a3fe(0x2b9)]['call'](_0x309663):!_0x584091[_0x28a3fe(0x2b4)]&&!(_0x284273===_0x28a3fe(0x27d)||_0x284273==='undefined')&&(delete _0x55e0c9[_0x28a3fe(0x297)],_0x55e0c9[_0x28a3fe(0x264)]=!0x0),_0x2b4fdb&&(_0x55e0c9[_0x28a3fe(0x296)]=!0x0),_0x132da3=_0x584091[_0x28a3fe(0x259)][_0x28a3fe(0x233)],_0x584091[_0x28a3fe(0x259)][_0x28a3fe(0x233)]=_0x55e0c9,this['_treeNodePropertiesBeforeFullValue'](_0x55e0c9,_0x584091),_0x350ce3['length']){for(_0x1167fc=0x0,_0x53449c=_0x350ce3[_0x28a3fe(0x271)];_0x1167fc<_0x53449c;_0x1167fc++)_0x350ce3[_0x1167fc](_0x1167fc);}_0x267053[_0x28a3fe(0x271)]&&(_0x55e0c9['props']=_0x267053);}catch(_0x2b9d5f){_0xf8a81a(_0x2b9d5f,_0x55e0c9,_0x584091);}return this[_0x28a3fe(0x276)](_0x309663,_0x55e0c9),this[_0x28a3fe(0x1fd)](_0x55e0c9,_0x584091),_0x584091['node'][_0x28a3fe(0x233)]=_0x132da3,_0x584091[_0x28a3fe(0x2bd)]--,_0x584091[_0x28a3fe(0x247)]=_0x114fe6,_0x584091[_0x28a3fe(0x247)]&&_0x584091['autoExpandPreviousObjects'][_0x28a3fe(0x2a4)](),_0x55e0c9;}[_0x319813(0x25a)](_0x371483){var _0x5eccbf=_0x319813;return Object[_0x5eccbf(0x2b1)]?Object[_0x5eccbf(0x2b1)](_0x371483):[];}[_0x319813(0x1f7)](_0x12729b){var _0x18631c=_0x319813;return!!(_0x12729b&&_0x297f55[_0x18631c(0x28d)]&&this['_objectToString'](_0x12729b)==='[object\\x20Set]'&&_0x12729b[_0x18631c(0x230)]);}['_blacklistedProperty'](_0x385cad,_0x42d650,_0x77ca4){var _0x1aa8f5=_0x319813;return _0x77ca4[_0x1aa8f5(0x2d5)]?typeof _0x385cad[_0x42d650]==_0x1aa8f5(0x2a5):!0x1;}['_type'](_0x24b01b){var _0x3062cd=_0x319813,_0x431a38='';return _0x431a38=typeof _0x24b01b,_0x431a38===_0x3062cd(0x20e)?this[_0x3062cd(0x28e)](_0x24b01b)===_0x3062cd(0x205)?_0x431a38=_0x3062cd(0x2ac):this[_0x3062cd(0x28e)](_0x24b01b)===_0x3062cd(0x238)?_0x431a38=_0x3062cd(0x1ef):this['_objectToString'](_0x24b01b)===_0x3062cd(0x257)?_0x431a38=_0x3062cd(0x2a0):_0x24b01b===null?_0x431a38=_0x3062cd(0x27d):_0x24b01b[_0x3062cd(0x29c)]&&(_0x431a38=_0x24b01b[_0x3062cd(0x29c)][_0x3062cd(0x25b)]||_0x431a38):_0x431a38==='undefined'&&this[_0x3062cd(0x23f)]&&_0x24b01b instanceof this[_0x3062cd(0x23f)]&&(_0x431a38=_0x3062cd(0x27e)),_0x431a38;}[_0x319813(0x28e)](_0x29d529){var _0x1ba34b=_0x319813;return Object['prototype'][_0x1ba34b(0x2b9)]['call'](_0x29d529);}[_0x319813(0x2a2)](_0x427137){var _0x211c66=_0x319813;return _0x427137==='boolean'||_0x427137===_0x211c66(0x220)||_0x427137==='number';}['_isPrimitiveWrapperType'](_0x2abc8d){var _0x5ccc75=_0x319813;return _0x2abc8d===_0x5ccc75(0x22f)||_0x2abc8d==='String'||_0x2abc8d==='Number';}['_addProperty'](_0x486301,_0x564b38,_0x1fac71,_0x1e8896,_0x3cd91b,_0x30cf14){var _0x563852=this;return function(_0x3681b3){var _0x500571=_0xd3ad,_0x302e2f=_0x3cd91b[_0x500571(0x259)][_0x500571(0x233)],_0x26ec43=_0x3cd91b[_0x500571(0x259)][_0x500571(0x23d)],_0x2b5397=_0x3cd91b['node'][_0x500571(0x263)];_0x3cd91b[_0x500571(0x259)]['parent']=_0x302e2f,_0x3cd91b[_0x500571(0x259)]['index']=typeof _0x1e8896==_0x500571(0x227)?_0x1e8896:_0x3681b3,_0x486301[_0x500571(0x1f5)](_0x563852['_property'](_0x564b38,_0x1fac71,_0x1e8896,_0x3cd91b,_0x30cf14)),_0x3cd91b['node'][_0x500571(0x263)]=_0x2b5397,_0x3cd91b[_0x500571(0x259)]['index']=_0x26ec43;};}[_0x319813(0x1ee)](_0x344dd2,_0x3c7813,_0x421563,_0x3b6937,_0xcc9ec2,_0x27e436,_0x476a40){var _0x54ae24=_0x319813,_0x1136b5=this;return _0x3c7813['_p_'+_0xcc9ec2[_0x54ae24(0x2b9)]()]=!0x0,function(_0x72922){var _0xd78657=_0x54ae24,_0x177c14=_0x27e436[_0xd78657(0x259)]['current'],_0x51f735=_0x27e436[_0xd78657(0x259)][_0xd78657(0x23d)],_0x9f4f06=_0x27e436[_0xd78657(0x259)]['parent'];_0x27e436['node'][_0xd78657(0x263)]=_0x177c14,_0x27e436[_0xd78657(0x259)][_0xd78657(0x23d)]=_0x72922,_0x344dd2[_0xd78657(0x1f5)](_0x1136b5['_property'](_0x421563,_0x3b6937,_0xcc9ec2,_0x27e436,_0x476a40)),_0x27e436['node']['parent']=_0x9f4f06,_0x27e436[_0xd78657(0x259)]['index']=_0x51f735;};}[_0x319813(0x2a3)](_0xfd99b1,_0x1f2825,_0x3c3387,_0x32adee,_0x1dc856){var _0x136827=_0x319813,_0x3eb493=this;_0x1dc856||(_0x1dc856=function(_0x3a936d,_0x41fc20){return _0x3a936d[_0x41fc20];});var _0x46d2fc=_0x3c3387[_0x136827(0x2b9)](),_0x122dfb=_0x32adee['expressionsToEvaluate']||{},_0x24103f=_0x32adee[_0x136827(0x2b4)],_0x75f095=_0x32adee[_0x136827(0x266)];try{var _0x49c4e2=this[_0x136827(0x2c6)](_0xfd99b1),_0x569cb0=_0x46d2fc;_0x49c4e2&&_0x569cb0[0x0]==='\\x27'&&(_0x569cb0=_0x569cb0[_0x136827(0x1f1)](0x1,_0x569cb0[_0x136827(0x271)]-0x2));var _0x1d9e58=_0x32adee[_0x136827(0x261)]=_0x122dfb[_0x136827(0x2cc)+_0x569cb0];_0x1d9e58&&(_0x32adee[_0x136827(0x2b4)]=_0x32adee[_0x136827(0x2b4)]+0x1),_0x32adee[_0x136827(0x266)]=!!_0x1d9e58;var _0x41616c=typeof _0x3c3387=='symbol',_0x2f294e={'name':_0x41616c||_0x49c4e2?_0x46d2fc:this[_0x136827(0x26c)](_0x46d2fc)};if(_0x41616c&&(_0x2f294e[_0x136827(0x26d)]=!0x0),!(_0x1f2825===_0x136827(0x2ac)||_0x1f2825==='Error')){var _0x3e68f0=this[_0x136827(0x28a)](_0xfd99b1,_0x3c3387);if(_0x3e68f0&&(_0x3e68f0[_0x136827(0x260)]&&(_0x2f294e['setter']=!0x0),_0x3e68f0[_0x136827(0x265)]&&!_0x1d9e58&&!_0x32adee['resolveGetters']))return _0x2f294e[_0x136827(0x2b5)]=!0x0,this[_0x136827(0x214)](_0x2f294e,_0x32adee),_0x2f294e;}var _0x5bb4fc;try{_0x5bb4fc=_0x1dc856(_0xfd99b1,_0x3c3387);}catch(_0x597000){return _0x2f294e={'name':_0x46d2fc,'type':_0x136827(0x25c),'error':_0x597000[_0x136827(0x23e)]},this[_0x136827(0x214)](_0x2f294e,_0x32adee),_0x2f294e;}var _0x327880=this[_0x136827(0x24a)](_0x5bb4fc),_0x1349b9=this[_0x136827(0x2a2)](_0x327880);if(_0x2f294e[_0x136827(0x256)]=_0x327880,_0x1349b9)this[_0x136827(0x214)](_0x2f294e,_0x32adee,_0x5bb4fc,function(){var _0x53b7c4=_0x136827;_0x2f294e[_0x53b7c4(0x297)]=_0x5bb4fc[_0x53b7c4(0x2ae)](),!_0x1d9e58&&_0x3eb493[_0x53b7c4(0x252)](_0x327880,_0x2f294e,_0x32adee,{});});else{var _0x3c88c2=_0x32adee[_0x136827(0x247)]&&_0x32adee[_0x136827(0x2bd)]<_0x32adee['autoExpandMaxDepth']&&_0x32adee[_0x136827(0x237)][_0x136827(0x283)](_0x5bb4fc)<0x0&&_0x327880!==_0x136827(0x2a5)&&_0x32adee[_0x136827(0x2bc)]<_0x32adee[_0x136827(0x2c0)];_0x3c88c2||_0x32adee[_0x136827(0x2bd)]<_0x24103f||_0x1d9e58?(this['serialize'](_0x2f294e,_0x5bb4fc,_0x32adee,_0x1d9e58||{}),this[_0x136827(0x276)](_0x5bb4fc,_0x2f294e)):this['_processTreeNodeResult'](_0x2f294e,_0x32adee,_0x5bb4fc,function(){var _0x456308=_0x136827;_0x327880==='null'||_0x327880===_0x456308(0x294)||(delete _0x2f294e[_0x456308(0x297)],_0x2f294e[_0x456308(0x264)]=!0x0);});}return _0x2f294e;}finally{_0x32adee[_0x136827(0x261)]=_0x122dfb,_0x32adee[_0x136827(0x2b4)]=_0x24103f,_0x32adee[_0x136827(0x266)]=_0x75f095;}}[_0x319813(0x252)](_0x3faf7b,_0x37b5f1,_0x4b5e7c,_0x3e6180){var _0xa69532=_0x319813,_0x3fa0b1=_0x3e6180['strLength']||_0x4b5e7c['strLength'];if((_0x3faf7b==='string'||_0x3faf7b==='String')&&_0x37b5f1[_0xa69532(0x297)]){let _0x451782=_0x37b5f1[_0xa69532(0x297)]['length'];_0x4b5e7c[_0xa69532(0x272)]+=_0x451782,_0x4b5e7c[_0xa69532(0x272)]>_0x4b5e7c[_0xa69532(0x29a)]?(_0x37b5f1['capped']='',delete _0x37b5f1[_0xa69532(0x297)]):_0x451782>_0x3fa0b1&&(_0x37b5f1[_0xa69532(0x264)]=_0x37b5f1[_0xa69532(0x297)][_0xa69532(0x1f1)](0x0,_0x3fa0b1),delete _0x37b5f1[_0xa69532(0x297)]);}}[_0x319813(0x2c6)](_0x2917cd){var _0x470a2c=_0x319813;return!!(_0x2917cd&&_0x297f55[_0x470a2c(0x1f0)]&&this[_0x470a2c(0x28e)](_0x2917cd)===_0x470a2c(0x2b0)&&_0x2917cd[_0x470a2c(0x230)]);}[_0x319813(0x26c)](_0x1d16e4){var _0x36fa02=_0x319813;if(_0x1d16e4['match'](/^\\d+$/))return _0x1d16e4;var _0x294dc9;try{_0x294dc9=JSON[_0x36fa02(0x213)](''+_0x1d16e4);}catch{_0x294dc9='\\x22'+this['_objectToString'](_0x1d16e4)+'\\x22';}return _0x294dc9[_0x36fa02(0x240)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x294dc9=_0x294dc9[_0x36fa02(0x1f1)](0x1,_0x294dc9[_0x36fa02(0x271)]-0x2):_0x294dc9=_0x294dc9[_0x36fa02(0x248)](/'/g,'\\x5c\\x27')['replace'](/\\\\\"/g,'\\x22')[_0x36fa02(0x248)](/(^\"|\"$)/g,'\\x27'),_0x294dc9;}[_0x319813(0x214)](_0x2cef8c,_0x150fd6,_0x2d62a3,_0x1fd291){var _0x171c5e=_0x319813;this[_0x171c5e(0x228)](_0x2cef8c,_0x150fd6),_0x1fd291&&_0x1fd291(),this[_0x171c5e(0x276)](_0x2d62a3,_0x2cef8c),this[_0x171c5e(0x1fd)](_0x2cef8c,_0x150fd6);}[_0x319813(0x228)](_0x2c9336,_0x38e496){var _0x4287c0=_0x319813;this['_setNodeId'](_0x2c9336,_0x38e496),this[_0x4287c0(0x22d)](_0x2c9336,_0x38e496),this[_0x4287c0(0x222)](_0x2c9336,_0x38e496),this[_0x4287c0(0x219)](_0x2c9336,_0x38e496);}['_setNodeId'](_0x4b382d,_0x44d613){}[_0x319813(0x22d)](_0x1f04c3,_0x3fa6b7){}[_0x319813(0x221)](_0x1bb531,_0x352bc1){}['_isUndefined'](_0xc61b5c){var _0x5a596f=_0x319813;return _0xc61b5c===this[_0x5a596f(0x2be)];}['_treeNodePropertiesAfterFullValue'](_0x34a13a,_0x4d6d34){var _0x25fb13=_0x319813;this[_0x25fb13(0x221)](_0x34a13a,_0x4d6d34),this[_0x25fb13(0x2a1)](_0x34a13a),_0x4d6d34[_0x25fb13(0x21e)]&&this[_0x25fb13(0x1f8)](_0x34a13a),this[_0x25fb13(0x282)](_0x34a13a,_0x4d6d34),this[_0x25fb13(0x203)](_0x34a13a,_0x4d6d34),this[_0x25fb13(0x273)](_0x34a13a);}[_0x319813(0x276)](_0x549a40,_0x1ff069){var _0x2e04f6=_0x319813;let _0x291640;try{_0x297f55[_0x2e04f6(0x231)]&&(_0x291640=_0x297f55[_0x2e04f6(0x231)][_0x2e04f6(0x26f)],_0x297f55[_0x2e04f6(0x231)][_0x2e04f6(0x26f)]=function(){}),_0x549a40&&typeof _0x549a40[_0x2e04f6(0x271)]==_0x2e04f6(0x227)&&(_0x1ff069['length']=_0x549a40[_0x2e04f6(0x271)]);}catch{}finally{_0x291640&&(_0x297f55['console']['error']=_0x291640);}if(_0x1ff069[_0x2e04f6(0x256)]===_0x2e04f6(0x227)||_0x1ff069['type']===_0x2e04f6(0x226)){if(isNaN(_0x1ff069[_0x2e04f6(0x297)]))_0x1ff069[_0x2e04f6(0x21c)]=!0x0,delete _0x1ff069[_0x2e04f6(0x297)];else switch(_0x1ff069[_0x2e04f6(0x297)]){case Number[_0x2e04f6(0x23a)]:_0x1ff069[_0x2e04f6(0x204)]=!0x0,delete _0x1ff069[_0x2e04f6(0x297)];break;case Number['NEGATIVE_INFINITY']:_0x1ff069[_0x2e04f6(0x22b)]=!0x0,delete _0x1ff069['value'];break;case 0x0:this[_0x2e04f6(0x2d3)](_0x1ff069[_0x2e04f6(0x297)])&&(_0x1ff069[_0x2e04f6(0x2ad)]=!0x0);break;}}else _0x1ff069[_0x2e04f6(0x256)]==='function'&&typeof _0x549a40[_0x2e04f6(0x25b)]==_0x2e04f6(0x220)&&_0x549a40[_0x2e04f6(0x25b)]&&_0x1ff069[_0x2e04f6(0x25b)]&&_0x549a40[_0x2e04f6(0x25b)]!==_0x1ff069['name']&&(_0x1ff069['funcName']=_0x549a40[_0x2e04f6(0x25b)]);}[_0x319813(0x2d3)](_0x26fcc8){var _0x1a1495=_0x319813;return 0x1/_0x26fcc8===Number[_0x1a1495(0x242)];}['_sortProps'](_0x274db2){var _0x49d911=_0x319813;!_0x274db2['props']||!_0x274db2[_0x49d911(0x235)][_0x49d911(0x271)]||_0x274db2['type']===_0x49d911(0x2ac)||_0x274db2['type']===_0x49d911(0x1f0)||_0x274db2[_0x49d911(0x256)]===_0x49d911(0x28d)||_0x274db2[_0x49d911(0x235)][_0x49d911(0x281)](function(_0x3e5e62,_0x6750a3){var _0x389f92=_0x49d911,_0x33411e=_0x3e5e62[_0x389f92(0x25b)][_0x389f92(0x2a9)](),_0x58afcd=_0x6750a3[_0x389f92(0x25b)][_0x389f92(0x2a9)]();return _0x33411e<_0x58afcd?-0x1:_0x33411e>_0x58afcd?0x1:0x0;});}[_0x319813(0x282)](_0x1d2b63,_0x329f22){var _0x3862c6=_0x319813;if(!(_0x329f22[_0x3862c6(0x2d5)]||!_0x1d2b63['props']||!_0x1d2b63['props'][_0x3862c6(0x271)])){for(var _0x2f4240=[],_0x2ede99=[],_0x60eec=0x0,_0x49e04d=_0x1d2b63['props'][_0x3862c6(0x271)];_0x60eec<_0x49e04d;_0x60eec++){var _0x2a32cd=_0x1d2b63[_0x3862c6(0x235)][_0x60eec];_0x2a32cd[_0x3862c6(0x256)]==='function'?_0x2f4240[_0x3862c6(0x1f5)](_0x2a32cd):_0x2ede99['push'](_0x2a32cd);}if(!(!_0x2ede99[_0x3862c6(0x271)]||_0x2f4240['length']<=0x1)){_0x1d2b63[_0x3862c6(0x235)]=_0x2ede99;var _0x3bc5d4={'functionsNode':!0x0,'props':_0x2f4240};this[_0x3862c6(0x2a7)](_0x3bc5d4,_0x329f22),this[_0x3862c6(0x221)](_0x3bc5d4,_0x329f22),this[_0x3862c6(0x2a1)](_0x3bc5d4),this[_0x3862c6(0x219)](_0x3bc5d4,_0x329f22),_0x3bc5d4['id']+='\\x20f',_0x1d2b63['props']['unshift'](_0x3bc5d4);}}}[_0x319813(0x203)](_0x4d6091,_0x168232){}[_0x319813(0x2a1)](_0x4c7f9c){}[_0x319813(0x268)](_0x59357a){var _0x1f40f0=_0x319813;return Array[_0x1f40f0(0x285)](_0x59357a)||typeof _0x59357a=='object'&&this[_0x1f40f0(0x28e)](_0x59357a)===_0x1f40f0(0x205);}['_setNodePermissions'](_0x302590,_0x5c62d7){}[_0x319813(0x273)](_0xa9389f){var _0x4289ad=_0x319813;delete _0xa9389f[_0x4289ad(0x2cf)],delete _0xa9389f['_hasSetOnItsPath'],delete _0xa9389f[_0x4289ad(0x234)];}['_setNodeExpressionPath'](_0x5029da,_0x3e1815){}[_0x319813(0x223)](_0x6b4382){var _0x21e7f5=_0x319813;return _0x6b4382?_0x6b4382[_0x21e7f5(0x240)](this[_0x21e7f5(0x236)])?'['+_0x6b4382+']':_0x6b4382[_0x21e7f5(0x240)](this[_0x21e7f5(0x1f2)])?'.'+_0x6b4382:_0x6b4382['match'](this[_0x21e7f5(0x224)])?'['+_0x6b4382+']':'[\\x27'+_0x6b4382+'\\x27]':'';}}let _0x42634f=new _0x23b763();function _0x7c6ce(_0x5bba14,_0x15eed6,_0x2e974a,_0x55999a,_0x43cf7a,_0x67ff5){var _0x1779d9=_0x319813;let _0x26fd64,_0x2d3028;try{_0x2d3028=_0x2b0921(),_0x26fd64=_0xde8c09[_0x15eed6],!_0x26fd64||_0x2d3028-_0x26fd64['ts']>0x1f4&&_0x26fd64[_0x1779d9(0x26b)]&&_0x26fd64[_0x1779d9(0x24b)]/_0x26fd64[_0x1779d9(0x26b)]<0x64?(_0xde8c09[_0x15eed6]=_0x26fd64={'count':0x0,'time':0x0,'ts':_0x2d3028},_0xde8c09[_0x1779d9(0x200)]={}):_0x2d3028-_0xde8c09[_0x1779d9(0x200)]['ts']>0x32&&_0xde8c09[_0x1779d9(0x200)]['count']&&_0xde8c09[_0x1779d9(0x200)][_0x1779d9(0x24b)]/_0xde8c09[_0x1779d9(0x200)]['count']<0x64&&(_0xde8c09[_0x1779d9(0x200)]={});let _0x3aafb9=[],_0x37c417=_0x26fd64[_0x1779d9(0x29e)]||_0xde8c09[_0x1779d9(0x200)]['reduceLimits']?_0x333990:_0x3d2413,_0x167e45=_0x31be77=>{var _0x58c659=_0x1779d9;let _0x1781f0={};return _0x1781f0['props']=_0x31be77[_0x58c659(0x235)],_0x1781f0['elements']=_0x31be77[_0x58c659(0x25d)],_0x1781f0['strLength']=_0x31be77[_0x58c659(0x2c7)],_0x1781f0['totalStrLength']=_0x31be77[_0x58c659(0x29a)],_0x1781f0[_0x58c659(0x2c0)]=_0x31be77[_0x58c659(0x2c0)],_0x1781f0[_0x58c659(0x28b)]=_0x31be77[_0x58c659(0x28b)],_0x1781f0[_0x58c659(0x21e)]=!0x1,_0x1781f0['noFunctions']=!_0x53ed3a,_0x1781f0[_0x58c659(0x2b4)]=0x1,_0x1781f0['level']=0x0,_0x1781f0['expId']=_0x58c659(0x251),_0x1781f0[_0x58c659(0x25e)]=_0x58c659(0x201),_0x1781f0['autoExpand']=!0x0,_0x1781f0[_0x58c659(0x237)]=[],_0x1781f0[_0x58c659(0x2bc)]=0x0,_0x1781f0[_0x58c659(0x207)]=!0x0,_0x1781f0['allStrLength']=0x0,_0x1781f0[_0x58c659(0x259)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x1781f0;};for(var _0xd5a763=0x0;_0xd5a763<_0x43cf7a['length'];_0xd5a763++)_0x3aafb9['push'](_0x42634f[_0x1779d9(0x21f)]({'timeNode':_0x5bba14==='time'||void 0x0},_0x43cf7a[_0xd5a763],_0x167e45(_0x37c417),{}));if(_0x5bba14===_0x1779d9(0x2cb)){let _0x2ea77a=Error[_0x1779d9(0x29d)];try{Error[_0x1779d9(0x29d)]=0x1/0x0,_0x3aafb9['push'](_0x42634f[_0x1779d9(0x21f)]({'stackNode':!0x0},new Error()['stack'],_0x167e45(_0x37c417),{'strLength':0x1/0x0}));}finally{Error[_0x1779d9(0x29d)]=_0x2ea77a;}}return{'method':_0x1779d9(0x210),'version':_0x1413e4,'args':[{'ts':_0x2e974a,'session':_0x55999a,'args':_0x3aafb9,'id':_0x15eed6,'context':_0x67ff5}]};}catch(_0xffc067){return{'method':_0x1779d9(0x210),'version':_0x1413e4,'args':[{'ts':_0x2e974a,'session':_0x55999a,'args':[{'type':'unknown','error':_0xffc067&&_0xffc067[_0x1779d9(0x23e)]}],'id':_0x15eed6,'context':_0x67ff5}]};}finally{try{if(_0x26fd64&&_0x2d3028){let _0x4e863f=_0x2b0921();_0x26fd64[_0x1779d9(0x26b)]++,_0x26fd64[_0x1779d9(0x24b)]+=_0x36c28f(_0x2d3028,_0x4e863f),_0x26fd64['ts']=_0x4e863f,_0xde8c09[_0x1779d9(0x200)][_0x1779d9(0x26b)]++,_0xde8c09[_0x1779d9(0x200)][_0x1779d9(0x24b)]+=_0x36c28f(_0x2d3028,_0x4e863f),_0xde8c09['hits']['ts']=_0x4e863f,(_0x26fd64[_0x1779d9(0x26b)]>0x32||_0x26fd64[_0x1779d9(0x24b)]>0x64)&&(_0x26fd64[_0x1779d9(0x29e)]=!0x0),(_0xde8c09[_0x1779d9(0x200)]['count']>0x3e8||_0xde8c09[_0x1779d9(0x200)][_0x1779d9(0x24b)]>0x12c)&&(_0xde8c09[_0x1779d9(0x200)][_0x1779d9(0x29e)]=!0x0);}}catch{}}}return _0x297f55['_console_ninja'];})(globalThis,'127.0.0.1',_0x452e92(0x299),\"c:\\\\Users\\\\trinh\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.191\\\\node_modules\",_0x452e92(0x287),_0x452e92(0x20a),_0x452e92(0x279),_0x452e92(0x24f),_0x452e92(0x28f));");}catch(e){}};function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/