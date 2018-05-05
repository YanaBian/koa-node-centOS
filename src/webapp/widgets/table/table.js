/**
 * Created by bianyanran on 2018/5/4.
 */
import $ from 'jquery';
import axios from 'axios';

const tablecss = require('./table.css');

class table {
    constructor() {
        this.container = $('#JS-books-table');
    }
    init() {
        this.render();
        this.bind();
    }
    render() {
        axios.get('/get-books')
            .then(function(response) {
                console.log(books);
                var books = response.data;
                $('#JS-books-table tbody').html(
                    books.map((book) => {
                        return (
                            "<tr>" +
                            "<td>" + book.id + "</td>" +
                            "<td>" + book.title + "</td>" +
                            "<td>" + book.describe + "</td>" +
                            "<td>" + book.create_time_at + "</td>" +
                            "<td>" +
                            "<a class='btn btn-default btn-sm' href='/editBook'>编辑</a>" +
                            "<div data-id='" + book.id + "' class='btn btn-danger btn-sm ml-10 JS-delete-book'>删除</div>" +
                            "</td>" +
                            "</tr>"
                        )
                    }).join('')
                );
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    bind(){
        //删除
        $(document).delegate('.JS-delete-book', 'click', function() {
            axios.del('/deleteBook')
                .then(function(response) {
                    console.log(333+response.data);
                })
                .catch(function(error) {
                    console.log(error);
                });

        })
    }


}

export default table;