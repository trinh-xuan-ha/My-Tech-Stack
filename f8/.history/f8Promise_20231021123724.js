//! promise.
let promise = new Promise(
  //Executor
  function (resplve, reject) {
    //logic
    //thành công: resolve().
    //thất bại : reject()

    resplve([
      {
        id: 1,
        name: "Trịnh xuân hà",
        age: 10,
      },
    ]);
  }
);
promise
  .then(function (user) {
    //!nếu thành công thì in ra
    return new Promise(function (resplve) {
      setTimeout(function () {
        resplve("trịnh xuân hà" + [1, 2, 3]);
      }, 5000);
    });
  })
  .then(function (user) {
    //!nếu thành công thì in ra
    console.log(user);
  })
  .catch(function () {
    //! nếu thất bại thì in ra
    console.log("thất bại");
  })
  .finally(function () {
    //!nếu thành công hoặc thất bại đều in ra
    console.log("thành công hoặc thất bại.");
  });
let sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
sleep(1000)
  .then(() => {
    console.log(1);
    return sleep(1000);
  })
  .then(() => {
    console.log(2);
    return sleep(1000);
  })
  .then(() => {
    console.log(3);
    return sleep(1000);
  })
  .then(() => {
    console.log(4);
    return sleep(1000);
  });
let check1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
    }, 3000);
  });
};
// let check2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([4, 5, 6]);
//     }, 5000);
//   });
// };
let check2 = Promise.reject("lỗi rồi");

Promise.all([check1(), check2])
  .then((results) => {
    let a1 = results[0];
    let a2 = results[1];
    let abc = a1.concat(a2);
    console.log(abc);
  })
  .catch((a) => {
    console.log(a);
  });

let check3 = Promise.resolve("thành công rr3r3r32");
check3.then((a) => {
  console.log(a);
});
let check4 = Promise.reject("error!1212121");
check4
  .then((a) => {
    console.log(a);
  })
  .catch((a) => {
    console.log(a);
  });
//! promise example.
let users = [
  {
    id: 1,
    name: "trinh ha",
  },
  {
    id: 2,
    name: "nguyen an",
  },
  {
    id: 3,
    name: "tran the",
  },
];
let comments = [
  {
    id: 1,
    user_id: 1,
    content: "lam the nao de hoc tot hon",
  },
  {
    id: 2,
    user_id: 2,
    content: "don gian la gianh nhieu thoi gian cho no hon",
  },
  {
    id: 3,
    user_id: 1,
    content: "cam on ? okokok",
  },
  {
    id: 3,
    user_id: 2,
    content: "cam on",
  },
];

// lấy comments
//từ comments lấy ra user_id.
//từ user_id lấy ra users tuong ứng.
//fake API.
let getComments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });
};

let getUserIds = (userIds) => {
  return new Promise((resolve) => {
    let result = users.filter((user) => {
      return userIds.includes(user.id);
    });
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
};
let commentBlock = document.querySelector(".apinew");
console.log(commentBlock);
getComments()
  .then((comments) => {
    let userIds = comments.map((comment) => {
      // return comments.user_id;
      console.log(comment.user_id);
      return comment.user_id;
    });
    return getUserIds(userIds).then((users) => {
      return {
        users: users,
        comments: comments,
      };
      // console.log(user);
    });
  })


  .then(function (data) {
    let html = "";
    data.comments.forEach((comment) => {
      let user = data.users.find((user) => {
        return user.id === comment.user_id;
      });
      html += `<li>${user.name} : ${comment.content}</li>`;
    });
    commentBlock.innerHTML = html;
  });

//todo fetch
let postApt = "https://jsonplaceholder.typicode.com/posts";
fetch(postApt)
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    // console.log(posts);
    let htmls = posts.map((post) => {
      return `<li>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </li>`;
    });
    let html = htmls.join("");
    let apis = document.querySelector(".apinews");
    apis.innerHTML = html;
  })
  .catch((error) => {
    console.log(error);
  });

let postApts = "http://localhost:3000/courses";
fetch(postApts)
  .then((response) => {
    return response.json();
  })
  .then((posts) => {
    // console.log(posts);
    let htmls = posts.map((post) => {
      return `<li>
        <h2>${post.name}</h2>
        <p>${post.age}</p>
      </li>`;
    });
    let html = htmls.join("");
    let apis = document.querySelector(".apinews");
    apis.innerHTML = html;
  })
  .catch((error) => {
    console.log(error);
  });
