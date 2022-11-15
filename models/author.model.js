const { DataTypes } = require("sequelize");

module.exports = function AuthorModel(sequelize) {
    const attributes = {
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        DOB: { type: DataTypes.DATE, allowNull: false },
        DOD: { type: DataTypes.DATE, allowNull: false },
    };

    const options = {
        defaultScope: {
            attributes: {},
        },
    };

    return sequelize.define("user", attributes, options);
};
