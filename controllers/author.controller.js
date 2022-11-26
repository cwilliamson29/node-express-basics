const models = require("../models/models");

const Author = require("../models/author.model");

exports.author_list = async (req, res) => {
  const list_authors = await models.author.findAll({
    order: [["lastName", "DESC"]],
  });
  res.render("author_list", {
    title: "Author List",
    author_list: list_authors,
  });
};

exports.author_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};

exports.author_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create get");
};

exports.author_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create post");
};

exports.author_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete get");
};

exports.author_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete post");
};

exports.author_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update get");
};

exports.author_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update post");
};
