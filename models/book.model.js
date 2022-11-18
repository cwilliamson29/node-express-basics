const { DataTypes } = require("sequelize");

module.exports = function BookModel(sequelize) {
    const attributes = {
        title: { type: DataTypes.STRING, allowNull: false },
        author: { type: DataTypes.STRING, allowNull: false },
        isbn: { type: DataTypes.STRING, allowNull: false },
        summary: { type: DataTypes.STRING, allowNull: false },
        genre: { type: DataTypes.STRING, allowNull: false },
    };

    const options = {
        defaultScope: {
            attributes: {},
        },
    };

    return sequelize.define("book", attributes, options);
};
