
let postApi = 'http://localhost:3000/posts';

fetch(postApi).then(function(response) {
    return response.json();
})
.then(function(comments) {
    console.log(comments);
})
fetch(postApi).forEach(function (phantu, element) {
    console.log(element, phantu);
})
// courses.forEach(function(phantu, index) {
//     console.log(index, phantu);
// })