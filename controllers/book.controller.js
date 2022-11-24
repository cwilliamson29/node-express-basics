const models = require("../models/models");

const async = require("async");

exports.index = (req, res) => {
    async.parallel(
        {
            book_count: function (callback) {
                models.book.count().then((count) => {
                    callback(null, count);
                }); // Pass an empty object as match condition to find all documents of this collection
            },
            book_instance_count: function (callback) {
                models.bookInstance.count().then((count) => {
                    callback(null, count);
                });
            },
            book_instance_available_count(callback) {
                models.bookInstance.count({ status: "Available" }).then((count) => {
                    callback(null, count);
                });
            },
            author_count(callback) {
                models.author.count().then((count) => {
                    callback(null, count);
                });
            },
            genre_count(callback) {
                models.genre.count().then((count) => {
                    callback(null, count);
                });
            },
        },
        (err, results) => {
            res.render("index", {
                title: "Local Library Home",
                error: err,
                data: results,
            });
        }
    );
};

exports.book_list = async (req, res) => {
    const books = await models.book.findAll({
        order: [["author", "DESC"]],
    });

    //Successful, so render
    res.render("book_list", { title: "Book List", book_list: books });
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
