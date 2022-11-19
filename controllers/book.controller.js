const Book = require("../models/book.model");

exports.index = (req, res) => {
    res.send("NOT IMPLEMENTED: Site Home Page");
};

exports.book_list = (req, res) => {
    res.send("NOT IMPLEMENTED: book List");
};

exports.book_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: book detail: ${req.params.id}`);
};

exports.book_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: book create get");
};

exports.book_create_post = (req, res) => {
    res.send("NOT IMPLEMENTED: book create post");
};

exports.book_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: book delete get");
};

exports.book_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: book delete post");
};

exports.book_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: book update get");
};

exports.book_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: book update post");
};
