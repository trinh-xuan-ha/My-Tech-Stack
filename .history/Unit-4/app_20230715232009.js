let postApi = 'http://localhost:3000/posts';

fetch(postApi).then(function(response) {
    return response.json();
})
.then(function(postApi) {
    console.log(a)
})