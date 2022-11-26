const models = require("../models/models");

const async = require("async");

exports.bookinstance_list = async (req, res) => {
    const books = await models.bookInstance.findAll({
        order: [["book", "DESC"]],
    });

    //Successful, so render
    res.render("bookinstance_list", { title: "Book Instance List", bookinstance_list: books });
};

exports.bookinstance_detail = (req, res) => {
    res.send(`NOT IMPLEMENTED: bookinstance detail: ${req.params.id}`);
};

exports.bookinstance_create_get = (req, res) => {
    res.send("NOT IMPLEMENTED: bookinstance create get");
};

exports.bookinstance_create_post = (req, res) => {
    res.send("NOT IMPLEMENTED: bookinstance create post");
};

exports.bookinstance_delete_get = (req, res) => {
    res.send("NOT IMPLEMENTED: bookinstance delete get");
};

exports.bookinstance_delete_post = (req, res) => {
    res.send("NOT IMPLEMENTED: bookinstance delete post");
};

exports.bookinstance_update_get = (req, res) => {
    res.send("NOT IMPLEMENTED: bookinstance update get");
};

exports.bookinstance_update_post = (req, res) => {
    res.send("NOT IMPLEMENTED: bookinstance update post");
};
