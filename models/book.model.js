module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("Book", {
        title: { type: Sequelize.STRING, allowNull: false },
        author: { type: Sequelize.STRING, allowNull: false },
        isbn: { type: Sequelize.STRING, allowNull: false },
        summary: { type: Sequelize.STRING, allowNull: false },
        genre: { type: Sequelize.STRING, allowNull: false },
    });
    return Book;
};
