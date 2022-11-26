const models = require("../models/models");
const async = require("async");

exports.genre_list = async (req, res) => {
  const list_genre = await models.genre.findAll({
    order: [["name", "DESC"]],
  });
  res.render("genre_list", {
    title: "Genre List",
    author_list: list_genre,
  });
};

exports.genre_detail = (req, res) => {
  async.parallel(
    {
      genre(callback) {
        models.genre.findByPk(req.params.id).exec(callback);
      },

      genre_books(callback) {
        models.book
          .findAll({ where: { Genreid: req.params.id } })
          .exec(callback);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.genre == null) {
        // No results.
        const err = new Error("Genre not found");
        err.status = 404;
        return next(err);
      }
      // Successful, so render
      res.render("genre_detail", {
        title: "Genre Detail",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    }
  );
};

exports.genre_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: genre create get");
};

exports.genre_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: genre create post");
};

exports.genre_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: genre delete get");
};

exports.genre_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: genre delete post");
};

exports.genre_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: genre update get");
};

exports.genre_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: genre update post");
};
