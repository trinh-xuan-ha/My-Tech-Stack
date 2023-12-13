 function callApi() {
  let userApi = 'http://localhost:3000/users'
  let start = () => {
    getUsers((users) => {
      rederUser(users)
    })

  }
  start();
  let getUsers = (callback) => {
    fetch(userApi) 
    .then((userApi) => {
      return userApi.json();
    })
    .then(callback);
  }
  let rederUser = (users) => {
    let listUser = document.querySelector("#tablephone");
    let htmls = users.map((user)=> {
      return 
      `
      <tr>
      <td>
      <div>
      <img  src = '${user.image}'/>
      <div>
      <h4>${user.name}</h4>
      <span>${user.gmail}</span>
      </div>
      </div>
      </td>
      <td>${user.role}</td>
      <td>${user.plan}</td>
      <td>${user.status}</td>
      <td>${user.billing}</td>
      
      
      </tr>
      `
    })
  }
  return(


  )
 }
 export default callApi;