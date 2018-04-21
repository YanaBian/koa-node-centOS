var axios = require('axios');


async function getBooks(fn) {
    var http = "http://localhost/gong/web/index.php?r=site/get-books";
    await axios.get(http)
        .then(function(response) {
            return fn(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
}
async function createBook(fn) {
    console.log(12345678);
    var  http = "http://127.0.0.1:80/gong/web/index.php?r=site/edit-book";
    await axios.post(http,{
        'title': 'aa',
        'describe':'bb',
        'content': 'cc'
    })
        .then(function(response) {
            return fn(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
}

exports.getBooks = getBooks;
exports.createBook = createBook;
