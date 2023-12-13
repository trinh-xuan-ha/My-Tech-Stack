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
let htmls = sports.map(function(sports) {
    return`
        <div>
                <h2>${sports.name}</h2>
                <p>${sports.like}</p>
        </div>
    `;
});
console.log(htmls.join('')); //hiểm thị nên html.

var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given  the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  function checkWriter(watchList) {
    return watchList.Writer === 'Christopher Nolan';
  }
  function calculateRating(watchList) {
    
    let checkWriter = watchList.filter(function(checkWriter) {
      return checkWriter.Director === 'Christopher Nolan';
    })
    let sum = checkWriter.reduce((a,b) => parseFloat(a) + parseFloat(b.imdbRating),0);
    let i = checkWriter.length
    return sum / i;
  };
  
  // Expected results
  console.log(calculateRating(watchList)); // Output: 8.675
  
//tạo reduce.
Array.prototype.reduce2 = function (a ,b) {
  let i = 0;
  if(arguments.length<2)
  {
    i = 1;
    b = this[0]
  }
  for(;i<this.length;i++) {
    b = a(b, this[i], i, this);
  }
  return b;
}
let number10 = [1,2,3,4,5]
let check = number10.reduce2((a, b) => {
  return a + b;
})
let array4 = number5.reduce((a,b) => a.concat(b), []);
console.log(array4);
console.log(check)
function arrToObj(arr) {
    return arr.reduce;
}
 
// Expected results:
var arr1 = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr1)); // { name: 'Sơn Đặng', age: 18 }